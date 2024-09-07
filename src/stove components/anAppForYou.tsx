import img from "../assets/IMG-20230929-WA0007.png";
import blur from "../assets/blob-blur.svg";
import ScanToDownload from "./scantodownload";
export default function AnAppForYou() {
    return (
      <section className="relative w-full overflow-hidden md:overflow-visible">
         <img src={blur} alt="" className="absolute md:-top-[500px] top-0 left-3 -z-1 md:max-w-[900px] max-w-[200px]" />
        <div className="flex relative z-10 flex-col md:flex-row justify-between *:w-full items-center">
          <div>
            <img src={img} alt="The everything app for your car" loading="lazy"  className="max-w-[350px] w-full"/>
          </div>
          <div className="flex flex-col gap-7">
            <p className="font-semibold text-[3rem]">
              The everything app for your car
            </p>
            <p>
              Fuel, Gas Refill, Waste Disposal, Cargo, Logistics, Bill Payment, Flight Booking and more - just tap and we'll roll to wherever you are. I mean, who still goes to the gas station or dump sites to dispose wate anymore? its 2024 and STOVE has come!
            </p>
            <div className="max-w-[250px]">

            <ScanToDownload/>
            </div>
          </div>
        </div>
      </section>
    );
}