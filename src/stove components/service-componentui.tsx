import whatsapp from "../assets/whatsapp-icon.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import emergenceBattery from "../assets/emergency-card-web__battery_2x.png";
import emergenceFuel from "../assets/emergency-card-web__fuel_2x.png";
import emergenceTyre from "../assets/emergency-card-web__tyre_2x.png";
function Fuel(props: { classString: string; src: string }) {
  return (
    <div className="">
      <div
        id="1"
        className={
          props
            ? props.classString
            : "py-12 px-5 md:px-10 rounded-[50px] bg-primary flex flex-col md-flex-row w-full"
        }
      >
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div>
            <h1 className="text-[2rem] font-semibold text-[#eeffef] md:text-[3.5rem]">
              Fuel up anywhere 24/7 at petrol station prices.
            </h1>
            <p>
              Zero delivery fees and around the clock fuel delivery at same
              price as the petrol station. Yep – you heard it right.
            </p>
            <div>
              <Link to="petroleum-delivery">
                <Button variant={"outline"} className="rounded-2xl mt-7">
                  Request Service
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <img src={props.src} alt="icon" className="max-w-[150px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
function EngineOil(props: { classString: string; src: string }) {
  return (
    <div className="">
      <div
        id="1"
        className={
          props
            ? props.classString
            : "py-12 px-5 md:px-10 rounded-[50px] bg-primary flex flex-col md-flex-row w-full"
        }
      >
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div>
            <h1 className="text-[2rem] font-semibold text-[#eeffef] md:text-[3.5rem]">
              Pay Bills, Buy Airtime and Data.
            </h1>
            <p>
              We can't stop the bills from coming, but we an make paying them as
              easy as possible
            </p>
            <div>
              <Link to="bill-payments">
                <Button variant={"outline"} className="rounded-2xl mt-7">
                  Request Service
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <img src={props.src} alt="icon" className="max-w-[150px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
function CarWash(props: { classString: string; src: string }) {
  return (
    <div className="">
      <div
        id="1"
        className={
          props
            ? props.classString
            : "py-12 px-5 md:px-10 rounded-[50px] bg-primary flex flex-col md-flex-row w-full"
        }
      >
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div>
            <h1 className="text-[2rem] font-semibold text-[#eeffef] md:text-[3.5rem]">
              Rise and shine. Your environment deserves a spa day too.
            </h1>
            <p>
              Don't let four odour or smelly trash disturb your convenience. Let
              our professional trashers come to you and dispose your domestic,
              industrial and electronic waste.
            </p>
            <div>
              <Link to="waste-disposal">
                <Button variant={"outline"} className="rounded-2xl mt-7">
                  Request Service
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <img src={props.src} alt="icon" className="max-w-[150px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Tyre(props: { classString: string; src: string }) {
  return (
    <div className="">
      <div
        id="1"
        className={
          props
            ? props.classString
            : "py-12 px-5 md:px-10 rounded-[50px] bg-primary flex flex-col md-flex-row w-full"
        }
      >
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div>
            <h1 className="text-[2rem] font-semibold text-[#eeffef] md:text-[3.5rem]">
              SHIP AND CHILL. Do life and business with ease.
            </h1>
            <p>
              Deliveries becomes easier when we handle your international
              shipping - our sea and air freight with swift door-to-door
              deliveries to your client will wow you, while we offer the same
              day domestic deliveries
            </p>
            <div>
              <Link to="shipping">
                <Button variant={"outline"} className="rounded-2xl mt-7">
                  Request Service
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <img src={props.src} alt="icon" className="max-w-[150px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Insurance(props: { classString: string; src: string }) {
  return (
    <div className="">
      <div
        id="1"
        className={
          props
            ? props.classString
            : "py-12 px-5 md:px-10 rounded-[50px] bg-primary flex flex-col md-flex-row w-full"
        }
      >
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div>
            <h1 className="text-[2rem] font-semibold text-[#eeffef] md:text-[3.5rem]">
              Ensure the best protection on the road.
            </h1>
            <p>
              It’s not worth the risk – get the best car cover on the streets.
            </p>
            <div>
              <Link to="investment">
                <Button variant={"outline"} className="rounded-2xl mt-7">
                  Request Service
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <img src={props.src} alt="icon" className="max-w-[150px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Rescue(props: { classString: string; src: string }) {
  return (
    <div className="">
      <div
        id="1"
        className={
          props
            ? props.classString
            : "py-12 px-5 md:px-10 rounded-[50px] bg-primary flex flex-col md-flex-row"
        }
      >
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div>
            <h1 className="text-[2rem] font-semibold text-[#eeffef] md:text-[3.5rem]">
              Stuck with life threatening hazards and risks? No sweat.
            </h1>
            <p>
              Feel free to tap our emergence and safety tab for what to do
            </p>
            <div>
              <Link to="emergence-services">
                <Button variant={"destructive"} className="rounded-2xl mt-7">
                  Rescue
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <img src={props.src} alt="icon" className="max-w-[150px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
function EmergenceFuel() {
  return (
    <div className="">
      <div
        id=""
        className="rescue py-12 px-5 md:px-10 rounded-[50px] bg-primary flex flex-col md-flex-row"
      >
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="text-[#eeffef]">
            <h1 className="text-[2rem] font-semibold md:text-[3.5rem]">
              Fuel
            </h1>
            <p>
              Ran out of fuel at the roadside? We are here for you. On Whatsapp
              <Button variant={"link"}> T&C apply</Button>
            </p>
            <div>
              <div className="flex flex-col *:font-medium text-white">
                <p className="text-small">Arrives within</p>
                <p className="text-3xl">30mins</p>
              </div>
            </div>
            <div className="mt-8">
              <a href="#">
                <Button className="bg-green-500 p-6 rounded-xl font-medium hover:scale-105 hover:bg-green-400 flex gap-1 items-center text-white">
                  <img src={whatsapp} alt="" /> Rescue me
                </Button>
              </a>
            </div>
          </div>
          <div className="w-full flex items-center mt-6 justify-center">
            <img src={emergenceFuel} alt="icon" className="max-w-[250px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
function EmergenceTyre() {
  return (
    <div className="">
      <div
        id=""
        className="rescue py-12 px-5 md:px-10 rounded-[50px] bg-primary flex flex-col md-flex-row"
      >
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="text-[#eeffef]">
            <h1 className="text-[2rem] font-semibold md:text-[3.5rem]">
              Tyre Change
            </h1>
            <p>
              Got a puncture? We’ll arrive and install the spare wheel in your
              car.<Button variant={"link"}> T&C apply</Button>
            </p>
            <div>
              <div className="flex flex-col *:font-medium text-white">
                <p className="text-small">Arrives within</p>
                <p className="text-3xl">30mins</p>
              </div>
            </div>
            <div className="mt-8">
              <a href="#">
                <Button className="bg-green-500 p-6 rounded-xl font-medium hover:scale-105 hover:bg-green-400 flex gap-1 items-center text-white">
                  <img src={whatsapp} alt="" /> Rescue me
                </Button>
              </a>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <img src={emergenceTyre} alt="icon" className="max-w-[200px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function EmergenceBattery() {
  return (
    <div className="">
      <div
        id=""
        className="rescue py-12 px-5 md:px-10 rounded-[50px] bg-primary flex flex-col md-flex-row"
      >
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="text-[#eeffef]">
            <h1 className="text-[2rem] font-semibold md:text-[3.5rem]">
              Jump Start
            </h1>
            <p>
              Dead battery? Don’t panic – we’ll come and give you a boost.
              <Button variant={"link"}> T&C apply</Button>
            </p>
            <div>
              <div className="flex flex-col *:font-medium text-white">
                <p className="text-small">Arrives within</p>
                <p className="text-3xl">30mins</p>
              </div>
            </div>
            <div className="mt-8">
              <a href="#">
                <Button className="bg-green-500 p-6 rounded-xl font-medium hover:scale-105 hover:bg-green-400 flex gap-1 items-center text-white">
                  <img src={whatsapp} alt="" /> Rescue me
                </Button>
              </a>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <img src={emergenceBattery} alt="icon" className="max-w-[200px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Fuel, EngineOil, CarWash, Tyre, Insurance, Rescue, EmergenceBattery, EmergenceFuel, EmergenceTyre };
