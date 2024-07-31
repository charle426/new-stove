import blob from "../assets/blob-blur.svg";
import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
import card1 from "../assets/cpg-card__discover-01_2x.jpeg";
import card2 from "../assets/cpg-card__discover-02.jpeg";
import card3 from "../assets/cpg-card__discover-03.jpeg";
import card4 from "../assets/cpg-card__discover-04.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Building2, CarFront, MonitorSmartphone, PackageOpen, WorkflowIcon } from "lucide-react";
// import ScanToDownload from "@/stove components/scantodownload";

export default function PartnerShipPage() {
   const style1 = {
     backgroundImage: `url(${card1})`,
   };
   const style2 = {
     backgroundImage: `url(${card2})`,
   };
   const style3 = {
     backgroundImage: `url(${card3})`,
   };
   const style4 = {
     backgroundImage: `url(${card4})`,
   };
    return (
      <main className="px-3 md:px-7 lg:px-16 overflow-hidden w-full">
        <div
          id="partnershipHero"
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
                We are making moves <br />
                join us
              </h1>
              <p className="font-medium text-[1.2rem]">
                We’re partnering up with industry leaders to bring convenience
                to our customers
              </p>
            </div>
            <div>
              <Button className="hover:bg-primary">I'm interested</Button>
            </div>
          </div>
        </div>
        <section className="py-20">
          <Carousel
            opts={{ align: "center", loop: true }}
            className="relative z-10 my-10"
          >
            <div className="md:invisible visible blur-2xl bg-accent absolute h-full z-10 -left-8 w-[10%]"></div>
            <div className="md:invisible visible blur-2xl bg-accent absolute h-full z-10 -right-8 w-[10%]"></div>
            <CarouselContent className="text-accent *:dark:text-[#eeeeee] w-full lg:justify-center md:gap-4">
              <CarouselItem className="md:basis-1/2 basis-[75%] lg:basis-[250px] pl-2 md:pl-">
                <div
                  style={style1}
                  className="bg-cover bg-center repeat-0 relative shadow-md rounded-[30px] min-h-[400px] flex justify-end items-end object-cover lg:hover:translate-y-[-20px] py-7 px-3 duration-300"
                >
                  <div>
                    <h3 className="text-[1.5rem] font-medium mb-2">
                      Voucher Partnership
                    </h3>
                    <p>
                      Associate your brand to offer a unique set of benefits for
                      customers as well as your employees.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 basis-[75%] lg:basis-[250px] pl-2 ">
                <div
                  style={style2}
                  className="bg-cover bg-center repeat-0 shadow-md relative rounded-[30px] min-h-[400px] flex justify-end items-end object-cover lg:hover:translate-y-[-20px] duration-300 py-7 px-3"
                >
                  <div>
                    <h3 className="text-[1.5rem] font-medium mb-2">
                     Customer Acquisition
                    </h3>
                    <p>
                      Reach new audiences or target loyal users with discounts
                      and partnerships.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 basis-[75%] lg:basis-[250px] pl-2 ">
                <div
                  style={style3}
                  className="bg-cover bg-center repeat-0 shadow-md relative rounded-[30px] min-h-[400px] flex justify-end items-end object-cover lg:hover:translate-y-[-20px] duration-300 py-7 px-3"
                >
                  <div>
                    <h3 className="text-[1.5rem] font-medium mb-2">
                     Bolt Producers
                    </h3>
                    <p>
                      Partnering with businesses that offer car servicing and
                      fuel to reach larger audiences.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 basis-[75%] lg:basis-[250px] pl-2 ">
                <div
                  style={style4}
                  className="bg-cover bg-center repeat-0 shadow-md relative rounded-[30px] min-h-[400px] flex justify-end items-end object-cover lg:hover:translate-y-[-20px] duration-300 py-7 px-3"
                >
                  <div>
                    <h3 className="text-[1.5rem] font-medium mb-2">
                      Loyalty
                    </h3>
                    <p>
                      
                        Adding value to customers by teaming up relevant brands
                        and companies.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </section>
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
                We have built a prominent brand on automotive & mobility space
              </p>
              <p className="font-semibold md:text-[2rem] text-[1.2rem] w-full">
                We provide a sustainable way to widen your customer reach
              </p>
              <p className="font-semibold md:text-[2rem] text-[1.2rem] w-full">
                We support partners through tailored campaigns for your audience
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
                Types of industry partners
              </h3>
              <p>
                We seek partnership opportunities through various industries as
                we strive to bring convenience to our customers
              </p>
            </div>
            <div className="flex-col md:items-center justify-center flex gap-3 *:w-full *:max-w-[350px] *:rounded-xl *:p-4 *:bg-secondary">
              <div className=" flex gap-3">
                <CarFront className="text-primary" />
                <div>
                  <h5 className="font-medium text-xl mb-2">OEMs</h5>
                  <p>Vehicle manufactures and dealers</p>
                </div>
              </div>
              <div className=" flex gap-3">
                <WorkflowIcon className="text-primary" />
                <div>
                  <h5 className="font-medium text-xl mb-2">Auto service</h5>
                  <p>Vehicle manufactures and service centers</p>
                </div>
              </div>
              <div className=" flex gap-3">
                <Building2 className="text-primary" />
                <div>
                  <h5 className="font-medium text-xl mb-2">
                    Financial Institutions
                  </h5>
                  <p>Banks, insurance companies, etc</p>
                </div>
              </div>
              <div className=" flex gap-3">
                <MonitorSmartphone className="text-primary" />
                <div>
                  <h5 className="font-medium text-xl mb-2">Technology</h5>
                  <p>Platforms, tech companies and enablers</p>
                </div>
              </div>
              <div className=" flex gap-3">
                <PackageOpen className="text-primary" />
                <div>
                  <h5 className="font-medium text-xl mb-2">Consumer Brands</h5>
                  <p>FMCG, retail and consumer brands</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}