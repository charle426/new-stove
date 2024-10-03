import { Suspense } from "react";
import { Link, } from "react-router-dom";
import { useGlobalContext } from "@/stove components/Context";
import { Button } from "@/components/ui/button";
export function BlogAll() {

  const {server} : any
   = useGlobalContext()
  const sortData = server?.sort(
    (a: any, b: any) => b.uploadTime - a.uploadTime
  );
  
  const data = sortData?.map((items: any, index : number) => {
    const readTime = items.content;
    let min = 1;
    if (readTime.length > 200) {
      min = Math.ceil(readTime.trim().split(/\s+/).length / 200);
    }
    
    return (
      <Link key={index} to={`/blog/${items.id}`}>
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
              className="font-medium text-lg duration-200 group-hover:text-primary sm:text-xl"
            >
              {items.title}
            </h1>
            <p className="line-clamp-2">
              {items.content}
            </p>
            <div className="mb-5">
              <p className="text-small mt-3 ">
                {min} min read
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <section className="flex justify-center items-center w-full">
      <Suspense
        fallback={
          <div className="relative w-[300px] h-[300px] rounded-full p-3">
            <div className="h-full w-full loader border-primary border-t-[6px] border-solid animate-spin rounded-full"></div>
          </div>
        }
      >
        <div className="flex flex-wrap flex-grow justify-center items-center sm:items-start gap-8 *:basis-[95%] sm:*:basis-[40%] lg:*:basis-[30%]">
          {server?.length ? data : <p className="font-medium">there are no blogs at this time</p>}
        </div>
      </Suspense>
    </section>
  );
}

export function BlogSome() {
  const { server }: any = useGlobalContext();
  const sortData = server?.sort(
    (a: any, b: any) => b.uploadTime - a.uploadTime
  );
  const someBlog = sortData?.slice(0, 3)
  const data = someBlog?.map((items : any, index: number) => {
    const readTime = items.content;
    let min = 1;
    if (readTime.length > 200) {
      min = Math.ceil(readTime.trim().split(/\s+/).length / 200);
    }

    return (
      <Link key={index} to={`/blog/${items.id}`}>
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
              className="font-medium text-lg duration-200 group-hover:text-primary sm:text-xl"
            >
              {items.title}
            </h1>
            <p className="line-clamp-2">{items.content}</p>
            <div className="mb-5">
              <p className="text-sm opacity-60 mt-3 ">{min} min read</p>
            </div>
          </div>
        </div>
      </Link>
    );
  });


  return (
    <section className="flex justify-center py-10 flex-col gap-5">
      <h2 className="font-medium text-4xl">Join Our Community</h2>
      <Suspense
        fallback={
          <div className="relative w-[300px] h-[300px] rounded-full p-3">
            <div className="h-full w-full loader border-primary border-t-[6px] border-solid animate-spin rounded-full"></div>
          </div>
        }
      >
        <div className="flex flex-wrap flex-grow md:justify-center items-start sm:items-center gap-8 *:basis-[95%] sm:*:basis-[40%] lg:*:basis-[30%]">
          {server?.length ? (
            data
          ) : (
            <p className="font-medium">there are no blogs at this time</p>
          )}
        </div>
      </Suspense>
      <div className="w-full flex justify-center items-center my-5">

      <Link to="blog">
      <Button className="rounded-xl hover:bg-blue-400" >
          Blogs
      </Button>
      </Link>
      </div>
    </section>
  );
}