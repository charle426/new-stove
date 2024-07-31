import { Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext, } from "@/components/ui/carousel";
    import author1 from "../assets/comment-author-1.jpg"
    import author2 from "../assets/comment-author-2.jpg"
    import author3 from "../assets/review-author-6.jpg"
    import author4 from "../assets/team-13.jpg"
    import author5 from "../assets/team-2.jpg"
    import author6 from "../assets/team-3.jpg"
    import author7 from "../assets/team-5.jpg"
  import quote from "../assets/quote-icon.svg"
export default function Buzz() {
    return (
      <section className="my-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className=""
        >
          <div className="flex justify-between md:flex-row flex-col mb-5">
            <h1 className="text-[2rem] mb-2 font-medium">All The Buzz</h1>
            <div className="relative flex gap-1 md:right-12">
              <CarouselPrevious className="p-5 rounded-full bg-secondary md:visible invisible" />
              <CarouselNext className="p-5 rounded-full bg-secondary md:visible invisible" />
            </div>
          </div>
          <CarouselContent className="ml-2 md:ml-4">
            <CarouselItem className="min-h-[500px] md:basis-1/2 lg:basis-[30%] ml-2 md:ml-4 pl-2 md:pl:4 py-7 px-7 shadow-md rounded-[30px] bg-secondary flex flex-col justify-between">
              <div>
                <img src={quote} alt="qu" className="max-w-[50px]" />
                <p className="text-[1.3rem] font-medium">
                  Very good service. It is to our advantage to not have to go to
                  a filling or call a service person while fueling very
                  convenient with the same price of petrol station
                </p>
              </div>
              <div>
                <img
                  src={author1}
                  alt="author"
                  className="rounded-full max-w-[80px]"
                />
                <p className="opacity-80">Bennedict from play store</p>
              </div>
            </CarouselItem>
            <CarouselItem className="min-h-[500px] md:basis-1/2 lg:basis-[30%] ml-2 md:ml-4 pl-2 md:pl:4 py-7 px-7 shadow-md rounded-[30px] bg-secondary flex flex-col justify-between">
              <div>
                <img src={quote} alt="qu" className="max-w-[50px]" />
                <p className="text-[1.3rem] font-medium">
                  If you ever find yourself too busy or impatient to wait in
                  line for fuel at a gas station, join the world of on demand
                  services with STOVE which offers all kinds petroleum product
                  deliveries including LPG cooking gas WOW!
                </p>
              </div>
              <div>
                <img
                  src={author2}
                  alt="author"
                  className="rounded-full max-w-[80px]"
                />
                <p className="opacity-80">Eugene from play store</p>
              </div>
            </CarouselItem>
            <CarouselItem className="min-h-[500px] md:basis-1/2 lg:basis-[30%] ml-2 md:ml-4 pl-2 md:pl:4 py-7 px-7 shadow-md rounded-[30px] bg-secondary flex flex-col justify-between">
              <div>
                <img src={quote} alt="qu" className="max-w-[50px]" />
                <p className="text-[1.3rem] font-medium">
                  Easy. even though its the same cost with the station, you can
                  save a trip to the gas station which itself saves fuel cost
                </p>
              </div>
              <div>
                <img
                  src={author2}
                  alt="author"
                  className="rounded-full max-w-[80px]"
                />
                <p className="opacity-80">Kennis from play store</p>
              </div>
            </CarouselItem>
            <CarouselItem className="min-h-[500px] md:basis-1/2 lg:basis-[30%] ml-2 md:ml-4 pl-2 md:pl:4 py-7 px-7 shadow-md rounded-[30px] bg-secondary flex flex-col justify-between">
              <div>
                <img src={quote} alt="qu" className="max-w-[50px]" />
                <p className="text-[1.3rem] font-medium">
                  Easy. even though its the same cost with the station, you can
                  save a trip to the gas station which itself saves fuel cost
                </p>
              </div>
              <div>
                <img
                  src={author3}
                  alt="author"
                  className="rounded-full max-w-[80px]"
                />
                <p className="opacity-80">Chukwudi from play store</p>
              </div>
            </CarouselItem>
            <CarouselItem className="min-h-[500px] md:basis-1/2 lg:basis-[30%] ml-2 md:ml-4 pl-2 md:pl:4 py-7 px-7 shadow-md rounded-[30px] bg-secondary flex flex-col justify-between">
              <div>
                <img src={quote} alt="qu" className="max-w-[50px]" />
                <p className="text-[1.3rem] font-medium">
                  Great service as alway, my car always looks brand new after a
                  car wash
                </p>
              </div>
              <div>
                <img
                  src={author4}
                  alt="author"
                  className="rounded-full max-w-[80px]"
                />
                <p className="opacity-80">Abasidoh from play store</p>
              </div>
            </CarouselItem>
            <CarouselItem className="min-h-[500px] md:basis-1/2 lg:basis-[30%] ml-2 md:ml-4 pl-2 md:pl:4 py-7 px-7 shadow-md rounded-[30px] bg-secondary flex flex-col justify-between">
              <div>
                <img src={quote} alt="qu" className="max-w-[50px]" />
                <p className="text-[1.3rem] font-medium">
                  I order for a car wash internally and externally am so
                  impressed all the stains in my car is gone
                </p>
              </div>
              <div>
                <img
                  src={author5}
                  alt="author"
                  className="rounded-full max-w-[80px]"
                />
                <p className="opacity-80">Abasidoh from play store</p>
              </div>
            </CarouselItem>
            <CarouselItem className="min-h-[500px] md:basis-1/2 lg:basis-[30%] ml-2 md:ml-4 pl-2 md:pl:4 py-7 px-7 shadow-md rounded-[30px] bg-secondary flex flex-col justify-between">
              <div>
                <img src={quote} alt="qu" className="max-w-[50px]" />
                <p className="text-[1.3rem] font-medium">
                  We have been using STOVE for sometime now and its really a
                  blessing helping us fuel our cars when needed, they offer
                  amazing services.
                </p>
              </div>
              <div>
                <img
                  src={author6}
                  alt="author"
                  className="rounded-full max-w-[80px]"
                />
                <p className="opacity-80">Alex from play store</p>
              </div>
            </CarouselItem>
            <CarouselItem className="min-h-[500px] md:basis-1/2 lg:basis-[30%] ml-2 md:ml-4 pl-2 md:pl:4 py-7 px-7 shadow-md rounded-[30px] bg-secondary flex flex-col justify-between">
              <div>
                <img src={quote} alt="qu" className="max-w-[50px]" />
                <p className="text-[1.3rem] font-medium">
                  Very convenient awesome and innovative service, saves time
                  that would have been wasted queuing in gas stations while we
                  can simply have our car refueled at home
                </p>
              </div>
              <div>
                <img
                  src={author7}
                  alt="author"
                  className="rounded-full max-w-[80px]"
                />
                <p className="opacity-80">Alex from play store</p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
    );
}