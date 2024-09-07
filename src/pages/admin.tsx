import React, { FormEvent, Suspense, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc, getDocs, DocumentData, onSnapshot, } from "firebase/firestore"; 
import { db, storage } from "../firebaseConfig"
import { doc, deleteDoc, } from "firebase/firestore";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage"
import { v4 } from "uuid";
import {useNavigate} from "react-router-dom"
import { Button } from "@/components/ui/button";

type Props = {
  adminAuth : boolean | null
}

export default function Admin(props: Props) {

  type ValueProp = {
    id: string;
    title: string;
    content: string;
    file: string;
    uploadTime: Date;
  }[];

  const navigate = useNavigate()
  React.useEffect(() => {
    if (!props.adminAuth) {
      navigate("/blog/admin/login");
    }
  }, [])
  
  const blogsCollection = collection(db, "blogs");
  
  const [adminForm, setAdminForm] = React.useState({
    title: "",
    desc: "",
  });

  const [file, setFile] = React.useState("");
  
  const [deleteInfo, setDeleteInfo] = React.useState({
    title: "",
    id: "",
  });

  const [postedBlogs, setPostedBlogs] = React.useState<ValueProp | null>(null);
  const [popUp, setPopUp] = React.useState(false);

  React.useEffect(() => {
    const fetchPostedBlogs = async () => {
      const data = await getDocs(blogsCollection);
      return setPostedBlogs(
        data.docs.map((doc: DocumentData) => ({
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          file: doc.data().file,
          uploadTime: doc.data().uploadTime,
        }))
      );
    };
    fetchPostedBlogs();
  }, []);

  React.useEffect(() => {
     const unsub = onSnapshot(doc(blogsCollection), (docs : DocumentData) => {
       console.log(docs.data()?.title)
      return setPostedBlogs([
        {
          id: docs.id,
          title: docs.data()?.title,
          content: docs.data()?.content,
          file: docs.data()?.file,
          uploadTime: docs.data()?.uploadTime,
        }])
     });
    return unsub
  }, [])
  // console.log(postedBlogs);
  const data = postedBlogs?.map((items, index) => {
    const readTime = items.content
    let min = 1;
    if (readTime?.length > 200) {
      min = Math.ceil(readTime.trim().split(/\s+/).length / 200);
    }

    return (
      <div key={index} className="flex flex-col gap-3 items-center">
        <Link to={`/blog/${items.id}`}>
          <div className="cursor-pointer group max-w-[450px] duration-200 flex-col flex items-center justify-between">
            <div className="">
              <img
                src={items.file}
                alt="blog-image"
                width="100%"
                className="rounded-[20px] mb-2 duration-200 max-w-[400px]"
              />
            </div>
            <div className="relative p-3 w-full">
              <h1
                id={items.title}
                className="font-semibold text-[1.5rem] duration-200 group-hover:text-[#a8e92f] sm:text-[1.5rem]"
              >
                {items.title}
              </h1>
              <p className="line-clamp-2 text-[#1b1b1b96] group-hover:text-black">
                {items.content}
              </p>
              <div className="mb-5">
                <p className="text-[0.8rem] text-[#1b1b1b96] mt-3 group-hover:text-black">
                  {min} min read
                </p>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex gap-2 items-center justify-center">
          <Link to={`/blog/admin/edit/${items.id}`}>
            <div className="bg-blue-400 px-3 rounded-[3px] font-medium text-[18px] py-[2px]">
              Edit 
            </div>
          </Link>
          <div
            className="bg-red-500 px-3 rounded-[3px] font-medium text-[18px] py-[2px] cursor-pointer"
            id={items.id}
            onClick={() => doBoth(items.title, items.id)}
          >
            Delete
          </div>
        </div>
      </div>
    );
  });

  function doBoth(title: string, id: string) {
    // DeleteBlog()
    setDeleteInfo({
      title: title,
      id: id,
    });
    return setPopUp(true);
  }

  async function deleteAndReset(e: SyntheticEvent) {
    const deleteId = e.currentTarget.id;
    deleteDoc(doc(db, "blogs", deleteId))
      .then(() => {
        setPopUp(false);
        // setTimeout(() => {
        //   // window.location.reload();
        // }, 2500);
      })
      .catch((err) => console.log(err));
  }

  function DeleteBlog() {
    return (
      <div
        className={
          popUp
            ? "fixed bg-[#0e1e1183] w-full h-full z-[1000] top-0 left-0"
            : ""
        }
      >
        <div
          className={
            popUp
              ? "fixed rounded-3 left-[50%] top-[50%] flex flex-col gap-5 -translate-x-[50%] -translate-y-[50%] rounded-md bg-white p-5 duration-500 w-[90%] sm:w-[70%]"
              : "bg-white p-5 duration-500 fixed w-0 h-0 overflow-hidden rounded-full left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
          }
        >
          <p className="text-[#a8e92f]">are you sure you want to delete :</p>
          <h3 className="font-semibold text-[1.5rem]">{deleteInfo.title}</h3>
          <div className="flex items-center gap-2 sm:flex-nowrap flex-wrap">
            <div
              id={deleteInfo.id}
              className="bg-red-500 px-3 rounded-[3px] cursor-pointer font-medium text-[18px] py-[2px]"
              onClick={deleteAndReset}
            >
              Yes, delete
            </div>
            <div
              className="bg-blue-400 px-3 rounded-[3px] cursor-pointer font-medium text-[18px] py-[2px]"
              onClick={() => setPopUp(false)}
            >
              Cancel
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAdminForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // form submit

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement | null>) {
    const imgRef = ref(storage, `/images/file${v4()}`);
     const files: FileList | null = e.target.files;
     uploadBytes(imgRef, files?.[0] as File)
       .then((data) => {
         getDownloadURL(data.ref).then((url) => setFile(url));
       })
       .catch((err) => console.log(err));
  }

  const handleSubmit = async (e : FormEvent) => {
    e.preventDefault();
    const { title, desc } = adminForm;
    if (!title || !desc) return alert("Please fill form properly");

    const formData = {
      title,
      content: desc,
      file,
      uploadTime: Date.now(),
      };

    await addDoc(blogsCollection, formData)
      .then(() => {
        setAdminForm({
          title: "",
          desc: "",
        });
        alert("Blog Posted")
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="px-5 md:px-10 py-7">
      <div className="flex justify-between items-center">
        <h1>Admin</h1>
        <div>
          {postedBlogs ? <p>blogs({postedBlogs.length})</p> : <p>blogs(0)</p>}
        </div>
      </div>
      <div className="flex justify-center items-center flex-col w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-4 mt-9"
        >
          <div className="flex flex-col md:flex-row">
            <input
              type="file"
              name="file"
              // value={file}
              onChange={handleFileChange}
              accept="image/*"
              className="bg-white rounded-[10px] sm:w-[40%] w-full"
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={adminForm.title}
              onChange={handleChange}
              placeholder="blog title"
              className="bg-white rounded-[10px] w-full p-2"
            />
          </div>

          <div>
            <textarea
              name="desc"
              value={adminForm.desc}
              onChange={handleChange}
              placeholder="Blog Content"
              rows={6}
              className="bg-white rounded-[10px] w-full p-2"
            ></textarea>
          </div>

          <Button type="submit" className="button max-w-[150px] py-2 hover:opacity-90 duration-200 hover:bg-primary">
            Post
          </Button>
        </form>
      </div>

      <Suspense
        fallback={
          <div className="relative w-[300px] h-[300px] rounded-full p-3">
            <div className="h-full w-full loader border-[#a8e92f] border-t-[6px] border-solid animate-spin rounded-full"></div>
          </div>
        }
      >
        <div className="auto-grid py-10 px-2 md:px-3">
          {postedBlogs ? (
            data
          ) : (
            <p className="text-[23px] font-semibold">No blogs at this time</p>
          )}{" "}
        </div>
      </Suspense>
      {popUp && <DeleteBlog />}
    </section>
  );
}
