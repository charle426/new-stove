import { Link } from "react-router-dom"
import card1 from "../assets/IMG-20241009-WA0030.jpg";
import card2 from "../assets/IMG-20240924-WA0004.jpg";
import card3 from "../assets/cpg-card__discover-03.jpeg";
import card4 from "../assets/20240717_211606.jpg";
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
                className="bg-cover bg-center repeat-0 after:absolute after:w-full after:bg-[#0000004c] after:left-0 after:top-0 after:h-full overflow-hidden relative shadow-md rounded-[30px] min-h-[400px] flex justify-end items-end object-cover lg:hover:translate-y-[-20px] py-7 px-3 duration-300"
              >
                <div className="relative z-10">
                  <h3 className="text-[1.5rem] font-medium mb-2">
                    Don't let foul smell
                    <span className="text-pink-300"> Disturb You </span>
                  </h3>
                  <p>Order a stove trasher to dispose your garbage <br/> Your first trash disposal is on us FREE to enjoy</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 basis-[75%] lg:basis-[250px] pl-2 ">
              <div
                style={style2}
                className="bg-cover bg-center repeat-0 after:absolute after:w-full after:bg-[#0000004c] after:left-0 after:top-0 after:h-full overflow-hidden shadow-md relative rounded-[30px] min-h-[400px] flex justify-end items-end object-cover lg:hover:translate-y-[-20px] duration-300 py-7 px-3"
              >
                <div className="relative z-10">
                  <h3 className="text-[1.5rem] font-medium mb-2">
                    Do
                    <span className="text-pink-300"> Business wth Ease </span>
                  </h3>
                  <p>
                    Enjoy seamless local same day delivery and international shipping with the lowest cost
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 basis-[75%] lg:basis-[250px] pl-2 ">
              <Link to="community">
                <div
                  style={style3}
                  className="bg-cover bg-center repeat-0  after:absolute after:w-full after:bg-[#0000004c] after:left-0 after:top-0 after:h-full overflow-hidden shadow-md relative rounded-[30px] min-h-[400px] flex justify-end items-end object-cover lg:hover:translate-y-[-20px] duration-300 py-7 px-3"
                >
                  <img
                    src={arrowIcon}
                    alt="Read up on how we achieve this on our annual report"
                    className="absolute right-6 top-10 z-10"
                  />
                  <div className="relative z-10">
                    <h3 className="text-[1.5rem] font-medium mb-2">
                      Our
                      <span className="text-pink-300">
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
                className="bg-cover bg-center repeat-0  after:absolute after:w-full after:bg-[#0000004c] after:left-0 after:top-0 after:h-full overflow-hidden shadow-md relative rounded-[30px] min-h-[400px] flex justify-end items-end object-cover lg:hover:translate-y-[-20px] duration-300 py-7 px-3"
              >
                <div className="relative z-10">
                  <h3 className="text-[1.5rem] font-medium mb-2">
                    Spot a STOVE truck?
                    <span className="text-pink-300"> Ask, stop, refill</span>
                  </h3>
                  <p>
                    If you spot a STOVE truck parked just ask them for a refill
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
    );
}