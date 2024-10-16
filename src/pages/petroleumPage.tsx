import { lazy } from "react";
const ScanToDownload = lazy(() => import("@/stove components/scantodownload"));
import fuel from "../assets/3D-icon-web__fuel-Recovered.png";
import blob from "../assets/blob-blur.svg";
import noQueues from "../assets/IMG-20230929-WA0009.png";
import spotFuel from "../assets/IMG-20241009-WA0037.jpg";
import Faq from "@/stove components/faq";
import { Helmet } from "react-helmet";


const ogData = {
  title: "Refill",
  description: "Order up Petrol station prices with free delivery",
  url: "https://www.nstve.netlify.app",
  image: "../assets/stovelogo.png",
  siteName: "Stove",
};
const canonicalUrl = "https://www.nstve.netlify.app";

export default function PetroleumPage() {
  return (
    <main className="px-3 md:px-7 lg:px-16 overflow-hidden w-full">
      <Helmet>
  <title>Refill</title>
  <meta name="About Us" content="Learn more about our company STOVE" />
  <meta property="og:title" content={ogData.title} />
  <meta property="og:description" content={ogData.description} />
  <meta property="og:url" content={ogData.url} />
  <meta property="og:image" content={ogData.image} />
  <meta property="og:site_name" content={ogData.siteName} />
  <link rel="canonical" href={canonicalUrl} />
</Helmet>
      <div
        id="petrolHero"
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
                src={fuel}
                loading="lazy"
                alt="Fuel Delivery Icon website"
                className="max-w-[200px] w-full"
              />
            </div>
            <h1 className="hero-heading text-[2.5rem] md:text-[4.5rem] font-medium">
              Order up anywhere 24/7 at petrol station prices
            </h1>
            <p className="font-medium text-[1.2rem]">
              Too good to be true? Absolutely not. High-quality petroleum
              product delivered at the same price. Our petrol stations are on
              wheels so we can bring the station to you.
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
          Petrol station prices with free delivery
        </h3>
        <div className="flex flex-wrap basis-[80px] grow-0 items-center justify-center gap-8">
          <div className="flex md:flex-row flex-col items-center gap-3">
            <div className="fuel-service rounded-xl w-[50px] h-[50px] flex justify-center items-center font-semibold text-[1.5rem] text-accent">
              F
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium">Fuel</p>
              <p className="text-blue-500 text-[0.8rem]">760₦G₦ / L</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-3">
            <div className="lpg-service rounded-xl w-[50px] h-[50px] flex justify-center items-center font-semibold text-[1.5rem] text-accent">
              L
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium">LPG</p>
              <p className="text-green-500 text-[0.8rem]">900₦G₦ / kg</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-3">
            <div className="diesel-service rounded-xl w-[50px] h-[50px] flex justify-center items-center font-semibold text-[1.5rem] text-accent">
              D
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium">Diesel</p>
              <p className="text-yellow-500 text-[0.8rem]">1200₦G₦ / L</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-3">
            <div className="kero-service rounded-xl w-[50px] h-[50px] flex justify-center items-center font-semibold text-[1.5rem] text-accent">
              K
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium">Kerosene</p>
              <p className="text-[#91e916] text-[0.8rem]">1450₦G₦ / L</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-3">
            <div className="engine-service rounded-xl w-[50px] h-[50px] flex justify-center items-center font-semibold text-[1.5rem] text-accent">
              E
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium">Engine oil</p>
              <p className="text-[#576247] text-[0.8rem]">4500₦G₦ / L</p>
            </div>
          </div>
        </div>
      </div>
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
          <div className="flex items-start justify-center gap-9 flex-col md:flex-row">
            <p className="font-semibold md:text-[2rem] text-[1.2rem] w-full">
              Don’t sit in line, we will come to you
            </p>
            <p className="font-semibold md:text-[2rem] text-[1.2rem] w-full">
              Choose when you need us, right away or even overnight
            </p>
            <p className="font-semibold md:text-[2rem] text-[1.2rem] w-full">
              Petrol station prices with zero delivery fees
            </p>
          </div>
          <div>
            <ScanToDownload />
          </div>
        </div>
      </div>
      <div className="relative py-10">
        <div className="py-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full justify-center md:justify-start flex">
              <img
                src={noQueues}
                alt="no queues img"
                className="md:max-w-[400px] shadow-lg w-full"
              />
            </div>
            <div className="w-full max-w-[500px]">
              <h3 className="text-[2.5rem] font-semibold mb-4">
                Queues? Forget it.
              </h3>
              <p>
                Want to sit in line? We certainly don’t. Kick back and relax
                while we bring high-quality fuel to your door at the same price
                as the petrol station. Also, there’s zero delivery fees.
              </p>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="flex gap-8 flex-col md:flex-row justify-between items-center">
            <div className="w-full max-w-[500px]">
              <h3 className="text-[2.5rem] font-semibold mb-4">
                No app? No problem.
              </h3>
              <p>
                In a rush and spot a <b>STOVE</b> truck? No sweat – just
                approach the Pilot and request a fill up. He can pump on the
                spot and you’ll be back on the move in minutes.
              </p>
            </div>
            <div className="w-full flex md:justify-end justify-center">
              <img
                src={spotFuel}
                alt="no queues img"
                className="max-w-[400px] shadow-lg"
              />
            </div>
          </div>
          <div className="absolute opacity-65 top-0 right-0 -z-10">
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
        </div>
      </div>
      <div>
        <h3 className="text-[2.5rem] font-semibold mb-8">
          No app? No problem.
        </h3>
        <div className="flex gap-6 flex-col items-start">
          <div className="flex items-center justify-center gap-3">
            <p className="bg-secondary w-7 h-7 flex justify-center items-center rounded-full">
              1
            </p>
            <p className="font-medium text-[1.2rem]">
              Download the STOVE app or continue on{" "}
              <span>
                <a
                  href="https://www.stv.afrimol.com.ng/register.php"
                  className="underline visited:text-slate-700 visited:dark:text-slate-300 text-primary"
                >
                  web
                </a>
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <p className="bg-secondary w-7 h-7 flex justify-center items-center rounded-full">
              2
            </p>
            <p className="font-medium text-[1.2rem]">
              Tap Fuel and choose your time slot
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <p className="bg-secondary w-7 h-7 flex justify-center items-center rounded-full">
              3
            </p>
            <p className="font-medium text-[1.2rem]">Await your full tank</p>
          </div>
        </div>
      </div>
      <Faq />
    </main>
  );
}
