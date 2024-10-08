import {useInView} from "react-intersection-observer"
import {
  Fuel,
  EngineOil,
  CarWash,
  Tyre,
  Insurance,
  Rescue,
  EmergenceBattery,
  EmergenceFuel,
  EmergenceTyre,
} from "./service-componentui";
import fuelRefill from "../assets/3D-icon-web__fuel-Recovered.png";
import engineOil from "../assets/images-removebg-preview (1).png";
import rescue from "../assets/3D-icon-web__emergency.png";
import insurance from "../assets/3D-icon-web__insurance.png";
import wash from "../assets/waste-image.png";
import tyreChange from "../assets/A_Friendly_Shipping_Guy_Cartoon.png";
import emergenceBattery from "../assets/emergency-card-web__battery_2x.png"
import emergenceFuel from "../assets/emergency-card-web__fuel_2x.png"
import emergenceTyre from "../assets/emergency-card-web__tyre_2x.png"

function handleScroll(el : HTMLDivElement | null) {
  el?.scrollIntoView({behavior: "smooth"})
}

export function Services() {
  const [firstViewRef, fuelInView] = useInView({threshold: 0.5})
  const [secondViewRef, engineInView] = useInView({threshold: 0.5})
  const [thirdViewRef, carInView] = useInView({threshold: 0.5})
  const [fourViewRef, tyreInView] = useInView({threshold: 0.5})
  const [fiveViewRef, insuranceInView] = useInView({threshold: 0.5})
  const [sixViewRef, rescueInView] = useInView({threshold: 0.5})
  
  
  function displayThis() {
    if (fuelInView) {      return Fuel({
        classString:
          "inview py-6 md:py-12 px-3 md:px-10 rounded-[50px] gradBg flex flex-col md-flex-row w-full",
        src: fuelRefill,
      });
    } else if (engineInView) {
      return EngineOil({
        classString:
          "inview py-6 md:py-12 px-3 md:px-10 rounded-[50px] gradBg flex flex-col md-flex-row w-full",
        src: engineOil,
      });
    } else if (carInView) {
      return CarWash({
        classString:
          "inview py-6 md:py-12 px-3 md:px-10 rounded-[50px] gradBg flex flex-col md-flex-row w-full",
        src: wash,
      });
    } else if (tyreInView) {
      return Tyre({
        classString:
          "inview py-6 px-3 md:px-10 rounded-[50px] gradBg flex flex-col md-flex-row w-full",
        src: tyreChange,
      });
    } else if (insuranceInView) {
      return Insurance({
        classString:
          "inview py-6 md:py-12 px-3 md:px-10 rounded-[50px] gradBg flex flex-col md-flex-row w-full",
        src: insurance,
      });
    } else if(rescueInView) {
      return Rescue({
        classString:
          "rescue py-6 md:py-12 px-3 md:px-10 rounded-[50px] gradBg flex flex-col md-flex-row w-full",
        src: rescue,
      });
    } 
  }
  return (
    <section className="service px-3 md:px-7 lg:px-16 relative flex justify-center w-full items-center flex-col my-10">
      <div className="w-full absolute left-0 top-0 h-full">
        <div className="sticky w-full left-0 md:top-20 top-10">
          <div className="flex flex-wrap items-center justify-center basis-[200px] w-full *:hover: *:shadow-lg *:overflow-hidden p-2 *:font-medium gap-5 *:rounded-lg">
            <div
              className="flex py-2 px-3 flex-col items-center justify-center  bg-accent"
              onClick={() => handleScroll(document.querySelector("#first"))}
            >
              <img
                src={fuelRefill}
                alt="icon"
                className="max-w-[60px] md:max-w-[100px]"
              />
              <p className="text-[0.8rem]">Fuel</p>
            </div>
            <div
              className="py-2 px-3 flex flex-col items-center justify-center bg-accent"
              onClick={() => handleScroll(document.querySelector("#second"))}
            >
              <img
                src={engineOil}
                alt="icon"
                className="max-w-[80px] md:max-w-[100px] w-full"
              />
              <p className="text-[0.8rem]">Pay Bills</p>
            </div>
            <div
              className="py-2 px-3 flex flex-col items-center justify-center bg-accent"
              onClick={() => handleScroll(document.querySelector("#third"))}
            >
              <img
                src={wash}
                alt="icon"
                className="max-w-[60px] md:max-w-[100px]"
              />
              <p className="text-[0.8rem]">Waste Disposal</p>
            </div>
            <div
              className="flex flex-col items-center justify-center bg-accent py-2 px-3"
              onClick={() => handleScroll(document.querySelector("#four"))}
            >
              <img
                src={tyreChange}
                alt="icon"
                className="max-w-[60px] md:max-w-[80px]"
              />
              <p className="text-[0.8rem]">Shipping</p>
            </div>
            <div
              className="py-2 px-3 flex flex-col items-center justify-center bg-accent"
              onClick={() => handleScroll(document.querySelector("#five"))}
            >
              <img
                src={insurance}
                alt="icon"
                className="max-w-[60px] md:max-w-[100px]"
              />
              <p className="text-[0.8rem]">Logistics</p>
            </div>
            <div
              className="py-2 px-3 flex flex-col items-center justify-center bg-accent"
              onClick={() => handleScroll(document.querySelector("#six"))}
            >
              <img
                src={rescue}
                alt="icon"
                className="max-w-[60px] md:max-w-[100px]"
              />
              <p className="text-[0.8rem]">Rescue</p>
            </div>
          </div>
          <div></div>
          <div className=" mt-3 px-3 md:px-7 lg:px-16">{displayThis()}</div>
        </div>
      </div>
      <div id="first" className="h-[100vh] w-full" ref={firstViewRef}></div>
      <div id="second" className="h-[100vh] w-full" ref={secondViewRef}></div>
      <div id="third" className="h-[100vh] w-full" ref={thirdViewRef}></div>
      <div id="four" className="h-[100vh] w-full" ref={fourViewRef}></div>
      <div id="five" className="h-[100vh] w-full" ref={fiveViewRef}></div>
      <div id="six" className="h-[100vh] w-full" ref={sixViewRef}></div>
    </section>
  );
}


export function EmergenceServices() {
  const [firstViewRef, fuelInView] = useInView({ threshold: 0.5 });
  const [secondViewRef, tyreInView] = useInView({ threshold: 0.5 });
  const [thirdViewRef, batteryInView] = useInView({ threshold: 0.5 });

  function displayThis() {
    if (fuelInView) {
      return EmergenceFuel();
    } else if (tyreInView) {
      return EmergenceTyre();
    } else if (batteryInView) {
      return EmergenceBattery();
    } 
  }
  return (
      <section className="service md:px-7 lg:px-16 relative flex justify-center w-full items-center flex-col my-10">
      <div className="w-full absolute left-0 top-0 h-full">
        <div className="sticky w-full left-0 md:top-20 top-10">
          <div className="flex flex-wrap items-center justify-center basis-[200px] w-full *:hover: *:shadow-lg *:overflow-hidden p-2 *:font-medium gap-5 *:rounded-lg">
            <div
              className="flex flex-col items-center justify-center  bg-accent"
              onClick={() => handleScroll(document.querySelector("#emergenceFirst"))}
            >
              <img
                src={emergenceFuel}
                alt="icon"
                className="max-w-[60px] md:max-w-[100px]"
              />
              <p className="text-[0.8rem]">Fuel</p>
            </div>
            <div
              className="py-2 px-3 flex flex-col items-center justify-center bg-accent"
              onClick={() => handleScroll(document.querySelector("#emergenceSecond"))}
            >
              <img
                src={emergenceTyre}
                alt="icon"
                className="max-w-[60px] md:max-w-[100px]"
              />
              <p className="text-[0.8rem]">Punctured Tyre</p>
            </div>
            <div
              className="py-2 px-3 flex flex-col items-center justify-center bg-accent"
              onClick={() => handleScroll(document.querySelector("#emergenceThird"))}
            >
              <img
                src={emergenceBattery}
                alt="icon"
                className="max-w-[60px] md:max-w-[100px]"
              />
              <p className="text-[0.8rem]">Jump Start</p>
            </div>
          </div>
          <div></div>
          <div className=" mt-3 px-3 md:px-7 lg:px-16">{displayThis()}</div>
        </div>
      </div>
      <div id="emergenceFirst" className="h-[100vh] w-full" ref={firstViewRef}></div>
      <div id="emergenceSecond" className="h-[100vh] w-full" ref={secondViewRef}></div>
      <div id="emergenceThird" className="h-[100vh] w-full" ref={thirdViewRef}></div>
    </section>
    )
}