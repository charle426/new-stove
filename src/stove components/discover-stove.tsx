import { Link } from "react-router-dom"
import card1 from "../assets/cpg-card__discover-01_2x.jpeg"
import card2 from "../assets/cpg-card__discover-02.jpeg"
import card3 from "../assets/cpg-card__discover-03.jpeg"
import card4 from "../assets/cpg-card__discover-04.png"
import arrowIcon from "../assets/arrow-east-icon.svg"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
export default function Discover() {
    const style1 = {
        backgroundImage: `url(${card1})`
    }
    const style2 = {
        backgroundImage: `url(${card2})`
    }
    const style3 = {
        backgroundImage: `url(${card3})`
    }
    const style4 = {
        backgroundImage: `url(${card4})`
    }
    return (
      <section className="relative py-10">
        <h2 className="mb-5 text-[3rem] relative z-20 font-medium">
          Discover Stove
        </h2>
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
                    <span className="text-primary">Get 10% off </span>
                    your first order
                  </h3>
                  <p>Enjoy up to 10% discount on your first petroleum order</p>
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
                    Earn
                    <span className="text-primary"> 20% discount </span>
                    for you and a friend
                  </h3>
                  <p>
                    Stove customer can refer friends and get 20% discount on
                    their first order
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 basis-[75%] lg:basis-[250px] pl-2 ">
              <Link to="community">
                <div
                  style={style3}
                  className="bg-cover bg-center repeat-0 shadow-md relative rounded-[30px] min-h-[400px] flex justify-end items-end object-cover lg:hover:translate-y-[-20px] duration-300 py-7 px-3"
                >
                  <img
                    src={arrowIcon}
                    alt="Read up on how we achieve this on our annual report"
                    className="absolute right-6 top-10"
                  />
                  <div>
                    <h3 className="text-[1.5rem] font-medium mb-2">
                      Our
                      <span className="text-primary">
                        {" "}
                        environmental commitment{" "}
                      </span>
                      knows no borders
                    </h3>
                    <p>Read up on how we achieve this on our annual report</p>
                  </div>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 basis-[75%] lg:basis-[250px] pl-2 ">
              <div
                style={style4}
                className="bg-cover bg-center repeat-0 shadow-md relative rounded-[30px] min-h-[400px] flex justify-end items-end object-cover lg:hover:translate-y-[-20px] duration-300 py-7 px-3"
              >
                <div>
                  <h3 className="text-[1.5rem] font-medium mb-2">
                    Spot a STOVE truck?
                    <span className="text-primary"> Ask, stop, refill</span>
                  </h3>
                  <p>
                    If you spot a STOVE truck parked just ask them to refill
                    your vehicle
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
    );
}