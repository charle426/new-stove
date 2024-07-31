import { CalendarDays, Clock3, FileLineChart, Presentation } from "lucide-react";
import blob from "../assets/blob-blur.svg";
import { Button } from "@/components/ui/button";


export default function FleetPage() {

  return (
    <main className="px-3 md:px-7 lg:px-16 overflow-hidden w-full">
      <div
        id="FleetHero"
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
              Fueling convenience to Nigeria's top companies
            </h1>
            <p className="font-medium text-[1.2rem]">
              Cost effective fleet operations, saving your business time and money
            </p>
          </div>
          <div>
            <Button className="hover:bg-primary">I'm interested</Button>
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
              Fueling your fleet on demand or on a pre-booked schedule
            </p>
            <p className="font-semibold md:text-[2rem] text-[1.2rem] w-full">
              Using data to help keep your fleet efficient
            </p>
            <p className="font-semibold md:text-[2rem] text-[1.2rem] w-full">
              Keeping your fleet clean & fresh with car wash options
            </p>
          </div>
          <div>
            <Button className="hover:bg-primary">I'm interested</Button>
          </div>
        </div>
      </div>
      <section className="py-20">
        <div className="flex justify-between *:w-full md:flex-row gap-7 flex-col">
          <div>
            <h3 className="font-medium text-4xl md:text-6xl mb-3">
              The STOVE business advantage
            </h3>
            <p>
              There is much more to it than fuel delivery
            </p>
          </div>
          <div className="flex-col md:items-center justify-center flex gap-3 *:w-full *:max-w-[350px] *:rounded-xl *:p-4 *:bg-secondary">
            <div className=" flex gap-3 ">
              <CalendarDays className="text-primary w-[50px]" />
              <div>
                <p>On-demand and pre-booking fuel and car wash services that fit your schedule and location</p>
              </div>
            </div>
            <div className=" flex gap-3">
              <FileLineChart className="text-primary w-[50px]" />
              <div>
                <p>Fuel consumption and expense tracking</p>
              </div>
            </div>
            <div className=" flex gap-3">
              <Clock3 className="text-primary w-[50px]" />
              <div>
                <p>24/7 priority support for businesses</p>
              </div>
            </div>
            <div className=" flex gap-3">
              <Presentation className="text-primary w-[50px]" />
              <div>
                <p>Employee benefits for your teams and organisation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
