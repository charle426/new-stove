import {lazy} from "react"
import blob from "../assets/blob-blur.svg";
import imgGroup from '../assets/IMG-20241009-WA0016.jpg'
import imgJoin from '../assets/img_aboutus-02.jpeg'
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import {Helmet} from "react-helmet"
const ScanToDownload = lazy(() => import("@/stove components/scantodownload"));
export default function AboutPage() {
   const ogData = {
     title: "About",
     description: "Learn more about our company STOVE",
     url: "https://www.nstve.netlify.app",
     image: "../assets/stovelogo.png",
     siteName: "Stove",
  };
  const canonicalUrl = "https://www.yourwebsite.com/your-page";
  
  return (
    <main className="px-3 md:px-7 lg:px-16 overflow-hidden w-full">
      <Helmet>
        <title>About Us</title>
        <meta name="About Us" content="Learn more about our company STOVE" />
        <meta property="og:title" content={ogData.title} />
        <meta property="og:description" content={ogData.description} />
        <meta property="og:url" content={ogData.url} />
        <meta property="og:image" content={ogData.image} />
        <meta property="og:site_name" content={ogData.siteName} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div
        id="AboutHero"
        className="flex w-full justify-center items-center pt-36 pb-20 relative"
      >
        <img
          src={blob}
          alt=""
          className="absolute -z[10] left-0 top-0 opacity-35"
        />
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
            <h1 className="hero-heading text-[2.5rem] md:text-[4.5rem] font-medium">
              Convenience on the move
            </h1>
            <p className="font-medium text-[1.2rem]">
              We’re are all about innovation through convenience, and giving you
              back some time
            </p>
          </div>
          <div>
            <ScanToDownload />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-6 md:flex-row flex-col-reverse my-20">
        <div className="flex flex-col gap-3 w-full">
          <h3 className="font-medium text-4xl mb-3">Who we are</h3>
          <p>
            Stove is Nigeria's own & world leading digital platform for vehicle
            and other convenient services. Whether your looking to save time by
            avoiding filling stations, get a second pair of eye for maintenance
            or get yourself a new one, you can book it all through the STOVE app
          </p>
          <p>
            Our on-demand services seamlessly connect customer with innovative
            solutions that redefine convenience, saving our community both time
            and money
          </p>
          <p>
            We believe in using tech to challenge the norm and applying it to
            create grater impact and exceptional services for our customers and
            communities - a platform that moves them forward with ease
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <img
            src={imgGroup}
            alt="stove staffs"
            className="w-full max-w-[500px] flex-shrink-0"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-6 md:flex-row flex-col my-20">
        <div className="flex justify-center items-center w-full">
          <img
            src={imgJoin}
            alt="stove staffs"
            className="w-full rounded-2xl max-w-[500px] flex-shrink-0"
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <h3 className="font-medium text-4xl mb-3">
            Ready to be a part of STOVE?
          </h3>
          <p>
            We are always looking for great talents to join our team. If you're
            ready to take on a challenge and step up your career give us a shout
          </p>
          <Button
            variant={"secondary"}
            className="w-fit group my-4 rounded-xl p-6"
          >
            See open roles{" "}
            <ChevronRightIcon className="group-hover:ml-3 duration-200" />
          </Button>
        </div>
      </div>
    </main>
  );
}
