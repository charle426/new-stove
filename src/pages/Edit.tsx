import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, DocumentReference, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid"
import {useNavigate} from "react-router-dom"
import { Button } from "@/components/ui/button";

export default function Edit() {
    const { id } = useParams();
  const blogsCollection = collection(db, "blogs");
  const docRef: DocumentReference = doc(db, "blogs", `${id}`);
  const [edited, setEdited] = useState({
        title: "",
        content: "",
        file: ""
  });
  console.log(edited)
    useEffect(() => { 
      async function editData() {
        const data = await getDoc(docRef)
        const res = data.data()

        return  setEdited({
            title: res?.title,
            content: res?.content,
            file: res?.file
          })
      }
            editData()
    }, [])

    useEffect(() => {
     const unsub = onSnapshot(doc(blogsCollection), (docs) => {
       console.log(docs.data()?.title)
      return setEdited(
        {
          title: docs.data()?.title,
          content: docs.data()?.content,
          file: docs.data()?.file,
        })
     });
    return unsub
  }, [])

    const navigate = useNavigate()
   

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = e.target
        setEdited(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
  const [wait, setWait] = useState(false)
  const [imageFile, setImageFile] = useState("")
   
     function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
       const imgRef = ref(storage, `/images/file${v4()}`);
       const files: FileList | null = e.target.files;
      uploadBytes(imgRef, files?.[0] as File)
        .then((data) => {
          getDownloadURL(data.ref).then((url) => {
            setImageFile(url)
            console.log(url)
          });
        })
        .catch((err) => console.log(err));
  }
  
   async function handleSubmit(e : FormEvent) {
       e.preventDefault()
     const { title, content, file } = edited

     const formData = {
      title,
      content,
      file : !imageFile ? file : imageFile
    }
setWait(true)
    
      await  updateDoc(docRef, formData)
      .then(() => {
        setTimeout(() => {
          navigate("/blog/stove/admin/234813649")
        }, 10000);
        
      }).catch(err => console.log(err))
   
     
     
       
       setTimeout(() => {
        setWait(false)
       }, 8000);
  }

     
    
    return (
      <section className="mt-28 md:px-5 py-5 px-2">
        <form
          method="post"
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <div>
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={handleFileChange}
              placeholder="edit Blog file"
              className="bg-white rounded-[10px] w-full p-2"
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={edited.title}
              onChange={handleChange}
              placeholder="edit Blog Title"
              className="bg-white rounded-[10px] w-full p-2"
            />
          </div>

          <div>
            <textarea
              name="content"
              value={edited.content}
              onChange={handleChange}
              placeholder="Edit Blog Content"
              rows={6}
              className="bg-white rounded-[10px] w-full p-2"
            ></textarea>
          </div>

          {wait ? (
                    <Button
                        variant={"outline"}
              className="button pointer-events-none select-none animate-pulse flex justify-center items-center max-w-[150px] py-2"
            >
              Please Wait...
            </Button>
          ) : (
            <Button variant={"outline"} type="submit" className="button max-w-[150px] py-2">
              Edit
            </Button>
          )}
        </form>
      </section>
    );
}