import logo from "../assets/stovelogo.png";
import { Link, NavLink,} from "react-router-dom";
import google from "../assets/icon_google-play_16px.svg";
import apple from "../assets/apple_logo.svg";
import { Button } from "@/components/ui/button";
export function Footer() {
  return (
    <footer className="bg-accent py-16 px-5 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row w-full gap-8 justify-between items-start">
        <div className="flex flex-col gap-4 w-full">
          <div className="md:mr-5 lg:mr-10">
            <Link to="/">
              <img
                src={logo}
                alt="stove logo"
                className="w-[55px] min-w-[30px]"
              />
            </Link>
          </div>
          <div className="flex gap-2 font-medium text-[0.8rem]">
            <div className="flex gap-2 items-center justify-center">
              <Button className="flex gap-1 rounded-xl" variant={"outline"}>
                <img src={apple} alt="appleIcon" />
                Apple Store
              </Button>
              <Button className="flex gap-1 rounded-xl" variant={"outline"}>
                <img src={google} alt="googleIcon" />
                Google Play
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 *:flex *:flex-col *:gap-2 *:w-full w-full">
          <ul>
            <li>
              <NavLink to="about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="investment">Investment</NavLink>
            </li>
            <li>
              <NavLink to="fleet-delivery">Partnership</NavLink>
            </li>
            <li>
              <NavLink to="community">Community</NavLink>
            </li>
            <li>
              <NavLink to="careers">Careers</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="petroleum-delivery">Gasoline Delivery</NavLink>
            </li>
            {/* <li>
              <NavLink to="partnership">Engine Oil Change</NavLink>
            </li>
            <li>
              <NavLink to="community">E-commerce</NavLink>
            </li> */}
            <li>
              <NavLink to="shipping">Shipping</NavLink>
            </li>
            <li>
              <NavLink to="bill-payments">Bill Payment</NavLink>
            </li>
            {/* <li>
              <NavLink to="flights-and-hotels">Flights and Hotel</NavLink>
            </li> */}
            <li>
              <NavLink to="waste-disposal">Waste Disposal</NavLink>
            </li>
            <li className="text-destructive hover:opacity-75 font-medium text-[0.9rem]">
              <NavLink to="careers">Rescue Me</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="faqs">FAQs</NavLink>
            </li>
            <li>
              <a href="#">Whatsapp</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-accent-foreground h-[0.8px] w-full"></div>
      <p className="text-stone-500 text-[0.9rem]">© 2024 STOVE. All Rights Reserved</p>
    </footer>
  );
}
