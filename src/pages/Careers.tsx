import { Button } from "@/components/ui/button";
import blob from "../assets/blob-blur.svg";
import img1 from "../assets/img_careers-01.jpeg"
import img2 from "../assets/img_careers-02.jpeg"
import { HandHeart, KeySquare, Lightbulb, ShoppingCart, UsersRound } from "lucide-react";
export default function Careers() {
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
              Looking to step up your career?
            </h1>
            <p className="font-medium text-[1.2rem]">
              You’ve come to the right place. Explore our open roles to become a
              part of a purposeful, dynamic and fearless team working towards
              innovative solutions
            </p>
          </div>
          <div>
            <Button className="hover:bg-primary rounded-xl p-5">
              See open roles
            </Button>
          </div>
        </div>
      </div>
      <section>
        <div className="flex flex-col-reverse justify-between *:w-full gap-5 md:flex-row py-10">
          <div className="*:mb-3 font-medium">
            <h2 className="text-5xl ">Life @ STOVE</h2>
            <p>
              Our company is made up of teams that innovate and focus on problem
              solving on a daily. If you're up for the challenge and looking for
              an optimistic, engaged, and deeply mission-driven company and
              culture — you've found your people.
            </p>
            <p>
              Explore opportunities to join some of the brightest, boldest, and
              best people we know working together on a problem worth solving.
            </p>
            <div>
              <Button className="hover:bg-primary rounded-xl p-5 mt-3">
                See open roles
              </Button>
            </div>
          </div>
          <div className="flex md:justify-end">
            <img
              src={img1}
              alt="life at stove"
              className="rounded-xl w-full max-w-[500px]"
            />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="flex justify-between *:w-full md:flex-row gap-7 flex-col">
          <div>
            <h3 className="font-medium text-4xl md:text-6xl mb-3">
              Our values
            </h3>
            <p>Achieve nothing less than superb.</p>
          </div>
          <div className="flex-col md:items-center justify-center flex gap-3 *:w-full *:max-w-[350px] *:rounded-xl *:p-4 *:bg-secondary">
            <div className=" flex gap-3">
              <ShoppingCart className="text-primary text-[20px] w-[50px]" />
              <div>
                <h5 className="font-medium text-xl mb-2">Be a customer</h5>
                <p>
                  We are customers and creators. We recognize and understand our
                  customer needs to create a better service
                </p>
              </div>
            </div>
            <div className=" flex gap-3">
              <KeySquare className="text-primary text-[20px] w-[50px]" />
              <div>
                <h5 className="font-medium text-xl mb-2">Be an owner</h5>
                <p>
                  We think like owners and act like owners. Whatever our role at
                  STOVE, we are all accountable
                </p>
              </div>
            </div>
            <div className=" flex gap-3">
              <Lightbulb className="text-primary text-[20px] w-[50px]" />
              <div>
                <h5 className="font-medium text-xl mb-2">Be forever curious</h5>
                <p>We think like there is no box and connect invisible dots</p>
              </div>
            </div>
            <div className=" flex gap-3">
              <HandHeart className="text-primary text-[20px] w-[50px]" />
              <div>
                <h5 className="font-medium text-xl mb-2">
                  Impact & serve communities
                </h5>
                <p>
                  We create opportunities that drive the growth and development
                  of our communities
                </p>
              </div>
            </div>
            <div className=" flex gap-3">
              <UsersRound className="text-primary text-[20px] w-[50px]" />
              <div>
                <h5 className="font-medium text-xl mb-2">
                  Move with purpose together
                </h5>
                <p>We collaborate as if our lives depend on it</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col-reverse justify-between items-center *:w-full gap-5 md:flex-row-reverse py-10">
          <div className="*:mb-3 font-medium">
            <h2 className="text-5xl ">Ready to work at STOVE?</h2>
            <p>
              Find out how you can make an impact. See the latest opportunities
              for you to be part of a collaborative culture of curiosity,
              growth, and impact.
            </p>
            <div>
              <Button className="hover:bg-primary rounded-xl p-5 mt-3">
                See open roles
              </Button>
            </div>
          </div>
          <div className="">
            <img
              src={img2}
              alt="life at stove"
              className="rounded-xl w-full max-w-[500px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
