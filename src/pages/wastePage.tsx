import ScanToDownload from "@/stove components/scantodownload";
import GetTheApp from "@/stove components/getTheApp";
import blob from "../assets/blob-blur.svg"
import residentHome from "../assets/home_1.jpg"
import industrialHome from "../assets/home_2.jpg"
import eletronicHome from "../assets/home_3.jpg"
import customerRecycling from '../assets/customer-residential-recycling-toter-mm-removebg-preview.png'
import binImg from "../assets/pngtree-flat-icon-for-waste-management-and-recycling-services-vector-png-image_42028252-removebg-preview.png"
import { Helmet } from "react-helmet";
export default function WastePage() {
   const ogData = {
     title: "Waste disposal",
     description: "Call Us anytime 24/7. Its all about creating a better environment",
     url: "https://www.nstve.netlify.app",
     image: "../assets/stovelogo.png",
     siteName: "Stove",
   };
   const canonicalUrl = "/waste-disposal";
   
    return (
      <main className="px-3 md:px-7 lg:px-16 w-full overflow-hidden">
        <Helmet>
          <title>Recycle</title>
          <meta
            name="description"
            content="Too good to be true? Absolutely not. Sit at home while we come
                handle environmental threatening wastes. Our goal is to find
                ways of recycling more materials until we live in a world where
                waste is a thing of the past."
          />
          <meta property="og:title" content={ogData.title} />
          <meta property="og:description" content={ogData.description} />
          <meta property="og:url" content={ogData.url} />
          <meta property="og:image" content={ogData.image} />
          <meta property="og:site_name" content={ogData.siteName} />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        ;
        <div
          id="WasteHero"
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
                <img
                  src={binImg}
                  alt="Fuel Delivery Icon website"
                  className="max-w-[200px] w-full"
                  loading="lazy"
                />
              </div>
              <h1 className="hero-heading text-[2.5rem] md:text-[4.5rem] font-medium">
                Call Us anytime 24/7. Its all about creating a better
                environment
              </h1>
              <p className="font-medium text-[1.2rem]">
                Too good to be true? Absolutely not. Sit at home while we come
                handle environmental threatening wastes. Our goal is to find
                ways of recycling more materials until we live in a world where
                waste is a thing of the past.
              </p>
            </div>
            <div>
              <ScanToDownload />
            </div>
          </div>
        </div>
        <div
          id="petrol-services"
          className="py-16 text-center flex flex-col gap-10 justify-center items-center"
        >
          <h3 className="font-medium text-[1.4rem]">
            A clean environment for a small fee
          </h3>
          <div className="flex flex-wrap basis-[80px] grow-0 items-center justify-center gap-8">
            <div className="flex md:flex-row flex-col items-center gap-3">
              <div className="engine-service rounded-xl w-[50px] h-[50px] flex justify-center items-center font-semibold text-[1.5rem] text-accent">
                R
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium">Residential Waste</p>
                <p className="text-stone-500 text-[0.8rem]">1000₦G₦</p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-3">
              <div className="kero-service rounded-xl w-[50px] h-[50px] flex justify-center items-center font-semibold text-[1.5rem] text-accent">
                I
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium">Industrial Waste</p>
                <p className="text-[#91e916] text-[0.8rem]">90₦G₦ / kg</p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-3">
              <div className="diesel-service rounded-xl w-[50px] h-[50px] flex justify-center items-center font-semibold text-[1.5rem] text-accent">
                E
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium">Electrical Waste</p>
                <p className="text-yellow-500 text-[0.8rem]">200₦G₦ / kg</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap basis-[30%] w-full justify-center items-start md:*:w-[40%] lg:*:w-[30%] gap-10 grow-0">
          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center justify-center">
              <img
                src={residentHome}
                alt="Our company provides prompt and effective waste collection and
                disposal services to residential apartments, hotels,
                restaurants, banks, lock-up shops and offices in Nigeria."
              />
            </div>
            <div className="flex-col flex gap-3">
              <h2 className="text-primary font-medium text-[2rem]">
                Residential Waste
              </h2>
              <p className="font-medium">
                Our company provides prompt and effective waste collection and
                disposal services to residential apartments, hotels,
                restaurants, banks, lock-up shops and offices in Nigeria.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center justify-center">
              <img
                src={eletronicHome}
                alt="Our company provides prompt and effective waste collection and
                disposal services to residential apartments, hotels,
                restaurants, banks, lock-up shops and offices in Nigeria."
              />
            </div>
            <div className="flex-col flex gap-3">
              <h2 className="text-primary font-medium text-[2rem] mb-3">
                Electronic Waste
              </h2>
              <p className="font-medium">
                Every year millions of electrical and electronic devices are
                discarded as products break these can be hazardous to everyone
                especially aquatic life Our company ensures safety of every by
                properly handling electronic waste and recycling reusable parts
                to help improve our life.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center justify-center">
              <img
                src={industrialHome}
                alt="We provide waste collection and waste disposal services to industries, construction and demolition sites, shopping malls and markets in Lagos and the Federal Capital Territory Abuja"
              />
            </div>
            <div className="flex-col flex gap-3">
              <h2 className="text-primary font-medium text-[2rem] mb-3">
                Industrial Waste
              </h2>
              <p className="font-medium">
                We provide waste collection and waste disposal services to
                industries, construction and demolition sites, shopping malls
                and markets in Lagos and the Federal Capital Territory Abuja
              </p>
              <p>
                We make use of specialized modern waste collection equipment
                such as Roll-On-Roll-Off and Skip-Bin for collection and
                disposal of construction/demolition wastes as well as other
                specialized waste.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row *:w-full justify-between py-16 relative">
          <div className="absolute opacity-65 top-[-200px] left-[-200px] -z-10">
            <svg
              width="923"
              height="922"
              viewBox="0 0 1123 1122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f)">
                <circle
                  cx="561.565"
                  cy="561"
                  r="437"
                  fill="#FF6584"
                  fill-opacity="0.5"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f"
                  x="0.56543"
                  y="0"
                  width="1122"
                  height="1122"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="62"
                    result="effect1_foregroundBlur"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div>
            <img src={customerRecycling} alt="customer recycling" />
          </div>
          <div>
            <h2 className="text-primary font-medium text-[2rem] mb-3">
              Recycling
            </h2>
            <div className="flex flex-col gap-3">
              <p>
                Recycling is the process of converting waste materials into
                reusable objects to prevent waste of potentially useful
                materials, reduce the consumption of fresh raw materials, energy
                usage, air pollution (from incineration) and water pollution
                (from landfilling) by decreasing the need for “conventional”
                waste disposal and lowering greenhouse gas emissions compared to
                plastic production. Recyclable materials include many kinds of
                glass, paper, metal, plastic, tires, textiles and electronics.
                The composting or other reuse of biodegradable waste—such as
                food or garden waste—is also considered recycling.
              </p>
              <p>
                Recycling is a key component of modern waste reduction and is
                the third component of the “Reduce, Reuse and Recycle” waste
                hierarchy.
              </p>
              <p>
                Recyclable materials include many kinds of glass, paper, metal,
                plastic, tires, textiles and electronics. The composting or
                other reuse of biodegradable waste—such as food or garden
                waste—is also considered recycling.
              </p>
            </div>
          </div>
        </div>
        <GetTheApp />
      </main>
    );
}