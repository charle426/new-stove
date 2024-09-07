import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import fleetImg from "../assets/home-b2b-laptop_export.png"
export default function BusinessStove() {
    return (
        <section className="py-10 relative w-vw overflow-hidden lg:overflow-visible">
            <img src="/blob-blur-yellow.svg" alt="" className="absolute max-w-[200px] md:max-w-[800px] lg:left-[400px] -z-10 top-[100px] "/>
        <div className="flex flex-col md:flex-row gap-7">
          <div>
            <h1 className="text-[2rem] md:text-[4rem] font-semibold fleet-heading">
              The STOVE you know but for business
            </h1>
            <div className="flex items-center gap-3">
              <Link to="fleet">
                <Button className="font-medium rounded-xl" variant={"outline"}>Invest with Us</Button>
              </Link>
              <Link to="partnership">
                <Button className="font-medium rounded-xl" variant={"outline"}>Become a Partner</Button>
              </Link>
            </div>
            
                </div>
                <div>
                    <img src={fleetImg} alt="" loading="lazy"  className="max-w-[350px] w-full"/>
                </div>
        </div>
      </section>
    );
}