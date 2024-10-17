import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import ScanToDownload from "@/stove components/scantodownload";
import { Building2, Clock2, DoorClosed, Earth, Lock, Package, Zap } from "lucide-react";
import  plane from "../assets/air-freight-services-1-540x365.jpg";
import  ship from "../assets/Rectangle 34624289.png";
import { Helmet } from "react-helmet";
export default function Shipping() {
  const ogData = {
    title: "shipping",
    description: "Lets manage your shipments from one destination to another",
    url: "https://www.nstve.netlify.app",
    image: "../assets/stovelogo.png",
    siteName: "Stove",
  };
  const canonicalUrl = "/shipping";
  
    return (
      <main className="overflow-hidden w-full">
        <Helmet>
          <title>emergence</title>6
          <meta property="og:description" content={ogData.description} />
          <meta property="og:url" content={ogData.url} />
          <meta property="og:image" content={ogData.image} />
          <meta property="og:site_name" content={ogData.siteName} />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <section className="px-3 md:px-7 lg:px-16">
          <meta
            name="description"
            content="Lets manage your shipments from one destination to another"
          />
          <meta property="og:title" content={ogData.title} />

          <div
            id="shippingHero"
            className="flex w-full justify-center items-center pt-36 pb-20 relative"
          >
            <img
              src="/blob-blur-yellow.svg"
              alt=""
              className="absolute -z[10] left-0 top-0 opacity-35"
            />
            <div className="flex flex-col gap-10 items-center max-w-[900px] relative z-10">
              <div className="flex flex-col gap-6 items-center text-center">
                <h1 className="hero-heading text-[2.5rem] md:text-[4.5rem] font-medium">
                  Lets manage your shipments from one location to another
                </h1>
                <p className="font-medium text-[1.2rem]"></p>
              </div>
              <div>
                <ScanToDownload />
              </div>
            </div>
          </div>
          <div
            id="shipping-services"
            className="py-16 relative z-20 text-center flex flex-col gap-10 justify-center items-center"
          >
            <h3 className="font-medium text-[1.4rem]">
              Let manage your shipments from one destination to another
            </h3>
            <div className="flex flex-wrap basis-[80px] grow-0 items-center justify-center gap-8">
              <div className="flex md:flex-row flex-col items-center gap-3">
                <div className="lpg-service rounded-xl w-[50px] h-[50px] flex justify-center items-center font-semibold text-[1.5rem] text-accent">
                  R
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Road Freight</p>
                  <p className="text-green-500 text-[0.8rem]"></p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col items-center gap-3">
                <div className="diesel-service rounded-xl w-[50px] h-[50px] flex justify-center items-center font-semibold text-[1.5rem] text-accent">
                  A
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Air Freight</p>
                  <p className="text-yellow-500 text-[0.8rem]"></p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col items-center gap-3">
                <div className="kero-service rounded-xl w-[50px] h-[50px] flex justify-center items-center font-semibold text-[1.5rem] text-accent">
                  S
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Sea Freight</p>
                  <p className="text-[#91e916] text-[0.8rem]"></p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col items-center gap-3">
                <div className="engine-service rounded-xl w-[50px] h-[50px] flex justify-center items-center font-semibold text-[1.5rem] text-accent">
                  W
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Warehousing</p>
                  <p className="text-[#576247] text-[0.8rem]"></p>
                </div>
              </div>
            </div>
          </div>
          <section className="py-10">
            <div className="pb-8">
              <div className="w-fit md:translate-x-10">
                <p className="italic">Our service</p>
                <div className="h-[2px] w-auto bg-primary mt-2"></div>
              </div>
              <div className="flex justify-center items-center">
                <h2 className="text-[2rem] font-medium">
                  Where your Satisfaction is our Top Priority
                </h2>
              </div>
            </div>

            <div className="flex md:*:basis-[28%] *:basis-[45%] auto-grid justify-center md:items-center gap-6 flex-wrap shrink-0 w-full">
              <Card className="flex hover:scale-105 duration-200 flex-col items-center py-5 justify-center rounded-xl">
                <CardTitle className="flex justify-center items-center h-12 w-12 rounded-full ring-1 ring-secondary">
                  <Zap />
                </CardTitle>
                <CardHeader className="text-[1.2rem] font-medium">
                  Express Shipping
                </CardHeader>
              </Card>
              <Card className="flex hover:scale-105 duration-200 flex-col items-center py-5 justify-center rounded-xl">
                <CardTitle className="flex justify-center items-center h-12 w-12 rounded-full ring-1 ring-secondary">
                  <DoorClosed />
                </CardTitle>
                <CardHeader className="text-[1.2rem] font-medium">
                  Door To Door Delivery
                </CardHeader>
              </Card>
              <Card className="flex hover:scale-105 duration-200 flex-col items-center py-5 justify-center rounded-xl">
                <CardTitle className="flex justify-center items-center h-12 w-12 rounded-full ring-1 ring-secondary">
                  <Building2 />
                </CardTitle>
                <CardHeader className="text-[1.2rem] font-medium">
                  E-commerce Shipping
                </CardHeader>
              </Card>
              <Card className="flex hover:scale-105 duration-200 flex-col items-center py-5 justify-center rounded-xl">
                <CardTitle className="flex justify-center items-center h-12 w-12 rounded-full ring-1 ring-secondary">
                  <Earth />
                </CardTitle>
                <CardHeader className="text-[1.2rem] font-medium">
                  International Shipping
                </CardHeader>
              </Card>
              <Card className="flex hover:scale-105 duration-200 flex-col items-center py-5 justify-center rounded-xl">
                <CardTitle className="flex justify-center items-center h-12 w-12 rounded-full ring-1 ring-secondary">
                  <Clock2 />
                </CardTitle>
                <CardHeader className="text-[1.2rem] font-medium">
                  Time-sensitive Deliveries
                </CardHeader>
              </Card>
              <Card className="flex hover:scale-105 duration-200 flex-col items-center py-5 justify-center rounded-xl">
                <CardTitle className="flex justify-center items-center h-12 w-12 rounded-full ring-1 ring-secondary">
                  <Package />
                </CardTitle>
                <CardHeader className="text-[1.2rem] font-medium">
                  Packaging and Crating
                </CardHeader>
              </Card>
            </div>
          </section>
          <section className="py-10">
            <div className="flex justify-between w-full gap-9 items-center md:flex-row flex-col">
              <div className="w-full">
                <h3 className="text-4xl md:text-5xl mb-5">
                  Air Freight Forwarding Services
                </h3>
                <p className="opacity-85 text-small">
                  We secure priority spaces and deliver air freight forwarding
                  services to clients in major cities and continents across the
                  globe at very competitive rates, thanks to our partnership
                  with highly reputable airliners. <br className="py-3" /> Our
                  combination of cost-effectiveness and cargo monitoring from
                  collection at origin, movement of cargo, Customs clearance at
                  destination and delivery to clients is one of our most
                  dependable assets.
                </p>
              </div>
              <div className="w-full flex md:justify-end justify-center">
                <img
                  src={plane}
                  alt="air freight"
                  className="w-full max-w-[400px] rounded-xl"
                />
              </div>
            </div>
          </section>
          <section className="py-10">
            <div className="flex justify-between w-full gap-9 items-center md:flex-row flex-col-reverse">
              <div className="w-full justify-center">
                <img
                  src={ship}
                  alt="shipping freight"
                  className="w-full max-w-[400px] rounded-xl"
                />
              </div>
              <div className="w-full">
                <h3 className="text-4xl md:text-5xl mb-5">
                  Shipping Freight Forwarding Services
                </h3>
                <div className="opacity-85 text-small flex flex-col gap-4">
                  <p>
                    We as STOVE is an international forwarder specialized in
                    managing your shipments from one destination to another. We
                    design and implement industry-leading solutions together
                    with our worldwide network of partners.
                  </p>
                  <p>
                    Our focus on providing excellence and value to our customers
                    is made possible by our team of experts who bring passion to
                    their work. We are totally committed to meeting and
                    exceeding our customer’s expectations. Fortune Global is a
                    shipping company in Nigeria with style.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
        <div className="flex pt-10 gap flex-wrap w-full *:w-full md:*:basis-[33.3%] *:min-h-[400px]">
          <div className="flex flex-col bg-secondary gap-5 items-center justify-center text-center">
            <div className="ring-[2px] ring-primary p-3 rounded-full">
              <Lock />
            </div>
            <h4 className="font-medium text-3xl">SAFE & SECURE</h4>
            <p className="text-small opacity-90 max-w-[300px]">
              You benefit from our experience in delivering effective solutions
              to the complex global supply chains of some of the world’s biggest
              corporations.
            </p>
          </div>
          <div className="flex flex-col bg-deep text-accent dark:text-accent-foreground dark:bg-primary gap-5 items-center justify-center text-center">
            <div className="ring-[2px] ring-primary dark:ring-secondary p-3 rounded-full">
              <Zap />
            </div>
            <h4 className="font-medium text-3xl">FAST DELIVERY</h4>
            <p className="text-small opacity-90 max-w-[300px] ">
              You benefit from every innovation, whether it involves a simple
              extension to our Air and Ocean Freight products, whether it means
              a development in warehousing.
            </p>
          </div>
          <div className="flex flex-col bg-accent gap-5 items-center justify-center text-center">
            <div className="ring-[2px] ring-secondary-foreground p-3 rounded-full">
              <Clock2 />
            </div>
            <h4 className="font-medium text-3xl">24/7 SUPPORT</h4>
            <p className="text-small opacity-90 max-w-[300px]">
              All of which explains why you’ll find the team of outstanding
              support at Fortune Global ready to apply their passion for
              solutions in support of your business.
            </p>
          </div>
        </div>
        <div className="pb-10">
          <div className="py-10 bg-deep dark:bg-primary px-2 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col gap-4 w-full items-center justify-center">
              <h3 className="pb-3 text-slate-300 md:text-5xl font-medium max-w-[500px] text-center">
                Schedule your effortless delivery for exceptional service
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
