import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { doc, DocumentReference, getDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid"
import {useNavigate} from "react-router-dom"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Edit() {
    const { id } = useParams();
  const docRef: DocumentReference = doc(db, "blogs", `${id}`);
  const [imageFile, setImageFile] = useState("")
  console.log(imageFile)
  const [edited, setEdited] = useState({
        title: "",
        content: "",
        file: imageFile
  });
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
          <div className="flex flex-col md:flex-row">
            <label htmlFor="fileId" className="flex gap-3 items-center">
              <div className="ring-1 w-fit ring-primary p-3 rounded-full">
                <Plus className="text-[10rem] " size={40} />
              </div>

              {imageFile ? (
                <p> image added👍 </p>
              ) : (
                <p>
                  Add file ignore if you don't want to change the previous image
                </p>
              )}
            </label>
            <input
              id="fileId"
              type="file"
              name="file"
              // value={file}
              onChange={handleFileChange}
              accept="image/*"
              className="bg-white hidden rounded-[10px] sm:w-[40%] w-full"
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={edited.title}
              onChange={handleChange}
              placeholder="edit Blog Title"
              className="bg-white dark:bg-slate-800 rounded-[10px] w-full p-2"
            />
          </div>

          <div>
            <textarea
              name="content"
              value={edited.content}
              onChange={handleChange}
              placeholder="Edit Blog Content"
              rows={6}
              className="bg-white dark:bg-slate-800 rounded-[10px] w-full p-2"
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
            <Button
              variant={"outline"}
              type="submit"
              className="button max-w-[150px] py-2"
            >
              update
            </Button>
          )}
        </form>
      </section>
    );
}