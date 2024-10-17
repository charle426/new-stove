import bg from "../assets/hero-img_esg_desktop.jpeg"
import blob from "../assets/blob-blur.svg";
import { Button } from "@/components/ui/button";
import { BlogSome } from "./blog";
import { Helmet } from "react-helmet";
export default function Community() {
   const style = {
     backgroundImage: `url(${bg})`,
  };
  
  const ogData = {
    title: "community",
    description:
      " We’re working towards building and preserving a better world",
    url: "https://www.nstve.netlify.app",
    image: "../assets/stovelogo.png",
    siteName: "Stove",
  };
  const canonicalUrl = "/community";

    return (
      <main className="overflow-hidden w-full">
        <Helmet>
          <title>Community</title>
          <meta
            name="description"
            content="We are dedicated to reducing energy use & combatting climate
                change head on"
          />
          <meta property="og:title" content={ogData.title} />
          <meta property="og:description" content={ogData.description} />
          <meta property="og:url" content={ogData.url} />
          <meta property="og:image" content={ogData.image} />
          <meta property="og:site_name" content={ogData.siteName} />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <div
          style={style}
          id="partnershipHero"
          className="flex bg-center bg-cover mb-16 min-h-[100vh] after:absolute bg-no-repeat bg-fixed w-full justify-center items-center pt-36 pb-20 relative"
        >
          <img
            src={blob}
            alt=""
            className="absolute -z[10] left-0 top-0 opacity-55"
          />
          <div className="w-full absolute bg-black h-[100%] top-0 left-0 opacity-30"></div>
          <div className="flex flex-col gap-10 items-center max-w-[900px] relative z-10">
            <div className="flex flex-col gap-6 items-center text-center">
              <div>
                {/* <img
                  src={fuel}
                  loading="lazy"
                  alt="Fuel Delivery Icon website"
                  className="max-w-[200px] w-full"
                /> */}
              </div>
              <h1 className="hero-heading text-5xl md:text-7xl font-medium">
                We’re working towards building and preserving a better world
              </h1>
              <p className="font-medium text-[1.2rem] text-white">
                We are dedicated to reducing energy use & combatting climate
                change head on
              </p>
            </div>
            <div>
              {/* <Button className="hover:bg-primary">I'm interested</Button> */}
            </div>
          </div>
        </div>
        <section className="px-3 md:px-7 lg:px-16">
          <div className="justify-center items-center flex py-10">
            <div className="flex flex-col gap-5 justify-center items-center text-center w-full">
              <svg viewBox="0 2 108.5 29" xmlns="https://www.w3.org/2000/svg">
                <foreignObject
                  xmlns="https://www.w3.org/1999/svg"
                  x="5"
                  y="8"
                  width="95.5%"
                  height="100%"
                >
                  <h1 className="opacity-70 text-ellipsis whitespace-nowrap why-heading font-bold ">
                    We're STOVE
                  </h1>
                </foreignObject>
              </svg>
              <div className="flex items-start justify-center gap-9 flex-col md:flex-row">
                <p className="font-semibold md:text-[2rem] text-[1.2rem] w-full">
                  We're dedicated to achieving carbon neutrality
                </p>
                <p className="font-semibold md:text-[2rem] text-[1.2rem] w-full">
                  We leverage tech for sustainable operations
                </p>
                <p className="font-semibold md:text-[2rem] text-[1.2rem] w-full">
                  We're building a tribe of partner advocates
                </p>
              </div>
              <div>
                {/* <Button className="hover:bg-primary">I'm interested</Button> */}
              </div>
            </div>
          </div>
          <BlogSome />
        </section>
        <div className="pb-10">
          <div className="py-10 bg-deep dark:bg-primary px-2 flex flex-col md:flex-row justify-between">
            <div className="flex *:text-slate-300 flex-col gap-4 w-full items-center justify-center">
              <h3 className="pb-3 text-slate-300 md:text-5xl font-medium max-w-[700px] text-center">
                Our environmental commitment knows no borders
              </h3>
              <p className="max-w-[700px] text-center text-xl">
                STOVE's environmental, social and governance commitment
                continues to cross borders in an effort to build a more
                sustainable global future
              </p>
              <div>
                <a href="https://www.stv.afrimol.com.ng/register.php">
                  <Button
                    className="dark:text-accent-foreground rounded-xl"
                    variant={"secondary"}
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}