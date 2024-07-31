import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid"
import {useNavigate} from "react-router-dom"

export default function Edit() {
  const { id } = useParams();
  const blogsCollection = collection(db, "blogs");
  const docRef = doc(db, "blogs", id);
    const [update, setUpdate] = useState()
  const [edited, setEdited] = useState({
        title: "",
        content: "",
        file: ""
  });
    useEffect(() => { 
      async function editData() {
        const data = await getDoc(docRef)
        const res = data.data()

          setEdited({
            title: res.title,
            content: res.content,
            file: res.file
          });
              return setUpdate(res);
      }
            editData()
    }, [])

    const navigate = useNavigate()
   

    function handleChange(e) {
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
   
     function handleFileChange(e) {
      const imgRef = ref(storage, `/images/file${v4()}`);
      uploadBytes(imgRef, e.target.files[0])
        .then((data) => {
          getDownloadURL(data.ref).then((url) => {
            setImageFile(url)
            console.log(url)
          });
        })
        .catch((err) => console.log(err));
  }
  
   async function handleSubmit(e) {
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
      <section className="mt-5 md:px-5 py-5 px-2">
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
            <button
              type=""
              className="button pointer-events-none select-none animate-pulse flex justify-center items-center max-w-[150px] py-2"
            >
              Please Wait...
            </button>
          ) : (
            <button type="submit" className="button max-w-[150px] py-2">
              Edit
            </button>
          )}
        </form>
      </section>
    );
}