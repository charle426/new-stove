import { BlogAll } from "./blog";
import blob from "../assets/blob-blur.svg"
import bg from "../assets/img_careers-02.jpeg"
export default function BlogPage() {
    const style = {
      backgroundImage: `url(${bg})`,
    };
  return (
    <>
      <section className=" bg-cover bg-no-repeat bg-center object-cover overflow-hidden relative">
        <img
          src={blob}
          alt=""
          className="absolute z-[10] left-0 top-0 opacity-55"
        />
        <div
          style={style}
          className=" bg-cover bg-no-repeat mb-10 object-cover py-10 md:px-10 px-4 duration-500 w-full h-[95vh] flex justify-center items-center"
        >
          <h1 className="sm:text-7xl text-5xl text-white relative z-20 text-[2rem] font-semibold">
            Blogs
          </h1>
              </div>
                    <section className="md:px-10 z-20 bg-cover bg-no-repeat bg-center object-cover overflow-hidden md:pb-10 px-2 mb-6 relative">

        <BlogAll />
      </section> 
      </section> 
    </>
  );
}
