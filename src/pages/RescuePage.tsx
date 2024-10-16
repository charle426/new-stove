import whatsapp from "../assets/whatsapp-icon.svg"
import emergence from "../assets/3D-icon-web__emergency.png"
import { Button } from "@/components/ui/button";
import { EmergenceServices } from "@/stove components/services-section";
import { Helmet } from "react-helmet";
export default function RescuePage() {
  

  const ogData = {
    title: "emergence",
    description: "Struck at the roadside no sweat Stove's Just a dial away",
    url: "https://www.nstve.netlify.app",
    image: "../assets/stovelogo.png",
    siteName: "Stove",
  };
  const canonicalUrl = "https://www.nstve.netlify.app";
  
    return (
      <main><Helmet>
    <title>emergence</title>
    <meta name="Rescue" content="Learn more about our company STOVE" />
    <meta property="og:title" content={ogData.title} />
    <meta property="og:description" content={ogData.description} />
    <meta property="og:url" content={ogData.url} />
    <meta property="og:image" content={ogData.image} />
    <meta property="og:site_name" content={ogData.siteName} />
    <link rel="canonical" href={canonicalUrl} />
  </Helmet>;
        <section className="px-3 md:px-7 lg:px-16 ">
          <div
            id="RescueHero"
            className="flex w-full justify-center items-center pt-36 pb-20 relative"
          >
            <img
              src="/blob-blur-yellow.svg"
              alt=""
              className="absolute -z[10] left-0 top-0 opacity-55"
            />
            <div className="flex flex-col gap-10 items-center max-w-[900px] relative z-10">
              <div className="flex flex-col gap-4 items-center text-center">
                <div>
                  <img
                    src={emergence}
                    loading="lazy"
                    alt="emergence icon website"
                    className="max-w-[200px] w-full"
                  />
                </div>
                <h1 className="hero-heading text-4xl md:text-7xl font-medium">
                  Stuck at the roadside? No sweat.
                </h1>
                <p className="font-medium text-[1.2rem] max-w-[600px]">
                  Ran out of fuel? Got a puncture? Battery died? Need a tow? We
                  are just dial away it and we’ll be to you in minutes.
                </p>
              </div>
              <div>
                <a href="#">
                  <Button className="bg-green-500 p-6 rounded-xl font-medium hover:scale-105 hover:bg-green-400 flex gap-1 items-center text-white">
                    <img src={whatsapp} alt="" /> Rescue me
                  </Button>
                </a>
              </div>
            </div>
                </div>
                <EmergenceServices/>
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
                    Why STOVE?
                  </h1>
                </foreignObject>
              </svg>
              <div className="flex items-start justify-center gap-9 flex-col max-w-[1100px] md:flex-row">
                <h6 className="font-medium md:text-4xl text-[3xl] w-full">
                  We’re available on WhatsApp, just a few taps away
                </h6>
                <h6 className="font-medium md:text-4xl text-[3xl] w-full">
                  Dedicated experts for every service
                </h6>
                <h6 className="font-medium md:text-4xl text-[3xl] w-full">
                  Our team will be with you within the hour
                </h6>
              </div>
              <div>
                <a href="#">
                  <Button className="bg-green-500 p-6 rounded-xl font-medium hover:scale-105 hover:bg-green-400 flex gap-1 items-center text-white">
                    <img src={whatsapp} alt="" /> Rescue me
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[2.5rem] font-semibold mb-8">
              Get started in 3 steps
            </h3>
            <div className="flex gap-6 flex-col items-start">
              <div className="flex items-center justify-center gap-3">
                <p className="bg-secondary w-7 h-7 flex justify-center items-center rounded-full">
                  1
                </p>
                <p className="font-medium text-[1.2rem]">Click on rescue me</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <p className="bg-secondary w-7 h-7 flex justify-center items-center rounded-full">
                  2
                </p>
                <p className="font-medium text-[1.2rem]">
                  Send the service you need with location through WhatsApp
                </p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <p className="bg-secondary w-7 h-7 flex justify-center items-center rounded-full">
                  3
                </p>
                <p className="font-medium text-[1.2rem]">
                  A STOVE pilot will be with you in minutes
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="py-10">
          <div className="py-10 bg-deep dark:bg-primary px-2 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col gap-4 w-full items-center justify-center">
              <h3 className="pb-3 text-slate-300 md:text-5xl font-medium max-w-[600px] text-center">
                Keep you moving, even in the most difficult times
              </h3>
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