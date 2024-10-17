import { useEffect, useState } from "react"
import heroVideo from "../assets/heroBg.mp4"
import  TextTransition ,{presets} from "react-text-transition"
import ScanToDownload from "./scantodownload";
export default function Hero() {
  const [count, setCount] = useState(1)
   const TEXTS : string[] = ["Gasoline delivery", "E-commerce", "Shipping","Bill payment", "Flights and Hotel", "Waste Disposal"]
    
    useEffect(() => {
         const inter = setInterval(() => {
        setCount(prev => prev + 1)
        if (count > 5)
        {
            setCount(1)
            
        }
    }, 3000)
        return () => clearInterval(inter)
    }, [count])
  

    return (
      <section className=" shado relative overflow-hidden min-h-[100vh] w-[100%] flex items-center justify-center">
          <video
            controls={false}
            autoPlay
            loop
            className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-auto h-auto min-h-full min-w-full bg-cover bg-center object-cover"
            src={heroVideo}
          ></video>
        <div className="after:h-full after:w-full after:absolute after:top-0 after:left-0 after:bg-[#00000084] ">
          
          <div className=" z-[40] w-full relative text-center flex flex-col justify-center items-center *:md:text-7xl *:text-4xl *:scroll-m-20 *:tracking-tight *:font-semibold gap-4">
            <div className="w-full flex items-center flex-col">
              <h1 className="hero-heading">The all in one app for</h1>

              <TextTransition
              className="text-center"
              springConfig={presets.default}
              >
               <h1 className="hero-heading min-h-[88px] whitespace-normal"> {TEXTS[count % TEXTS.length]}</h1>
              </TextTransition>
            </div>
            
            <div className="flex items-center justify-center mt-7 md:mt-10">
              <ScanToDownload/>
            </div>
          </div>
        </div>
        <div className="h-[150px] w-full absolute dark:blur-lg blur-3xl dark:bg-black opacity-65 bg-accent -bottom-9 left-0">

        </div>
      </section>
    );
}
