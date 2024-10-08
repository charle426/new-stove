import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "./assets/stovelogo.png"
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Button } from "./components/ui/button";
import { ChevronDown, MenuIcon, XCircleIcon } from "lucide-react";
import qr from "./assets/qr-code.svg"
import google from "./assets/icon_google-play_16px.svg"
import apple from "./assets/apple_logo.svg"
export default function Navbar() {
  const path = useLocation()
  const ref = useRef<HTMLElement>(null)

  const [navToggle, setToggle] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setToggle(false)
  }, [path])

  function handleToggle() {
    setToggle(prev => !prev)
  }

  window.addEventListener("resize", () => {
    setToggle(false)
  })
  window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY

    if (currentScrollPosition > 300)
    {
      ref.current?.classList.add("stickyNav")
    } else ref.current?.classList.remove("stickyNav")
    
  })
  return (
    <nav
      ref={ref}
      className="w-full flex justify-center items-center px-5 lg:px-10 py-5 absolute top-0 z-[1000] left-0 "
    >
      <NavigationMenu className="bg-accent shadow-lg z-[1000] rounded-[50px] px-4 lg:w-[90%] md:w-[95%] py-2 w-full flex justify-between items-center max-w-[1000px]">
        <div className="md:mr-5 lg:mr-10">
          <Link to="/">
            <img
              src={logo}
              alt="stove logo"
              className="w-[35px] min-w-[30px]"
            />
          </Link>
        </div>

        <div
          className={
            !navToggle
              ? "-top-[1000%] opacity-0 md:opacity-100  duration-500 absolute md:relative w-full md:flex justify-between items-center rounded-lg md:p-0 p-5 block"
              : "opacity-100 duration-500 md:flex justify-center bg-accent items-center rounded-lg md:p-0 p-5 block *:mb-4 *:md:mb-0 absolute md:relative h-[100vh] w-full top-[105%] z-[2000] left-0"
          }
        >
          <NavigationMenuList className="md:flex block justify-self-center *:mb-4 *:md:mb-0">
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                Services
                <ChevronDown
                  className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[200px] relative md:absolute py-3 flex flex-col gap-3">
                <NavLink
                  to="petroleum-delivery"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-medium text-[0.9rem]"
                      : "hover:text-primary font-medium text-[0.9rem]"
                  }
                >
                  Petroleum Delivery
                </NavLink>
                <NavLink
                  to="waste-disposal"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-medium text-[0.9rem]"
                      : "hover:text-primary font-medium text-[0.9rem]"
                  }
                >
                  Waste Disposal
                </NavLink>
                <NavLink
                  to="shipping"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-medium text-[0.9rem]"
                      : "hover:text-primary font-medium text-[0.9rem]"
                  }
                >
                  Shipping
                </NavLink>
                <NavLink
                  to="bill-payments"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-medium text-[0.9rem]"
                      : "hover:text-primary font-medium text-[0.9rem]"
                  }
                >
                  Bill Payments
                </NavLink>
                <NavLink
                  to="emergence-services"
                  className={({ isActive }) =>
                    !isActive
                      ? "text-destructive duration-300 hover:opacity-75 font-medium text-[0.9rem]"
                      : "text-primary duration-300 hover:opacity-75  font-medium text-[0.9rem]"
                  }
                >
                  Rescue me
                </NavLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                Business
                <ChevronDown
                  className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[200px] py-2 flex flex-col gap-3 relative md:absolute ">
                <NavLink
                  to="fleet-delivery"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-medium text-[0.9rem]"
                      : "hover:text-primary font-medium text-[0.9rem]"
                  }
                >
                  Fleet Delivery
                </NavLink>
                <NavLink
                  to="investment"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-medium text-[0.9rem]"
                      : "hover:text-primary font-medium text-[0.9rem]"
                  }
                >
                  Investment
                </NavLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="careers"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-medium text-[0.9rem] lg:px-4 px-[6px]"
                    : "hover:text-primary font-medium text-[0.9rem] lg:px-4 px-[6px]"
                }
              >
                Careers
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="community"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-medium text-[0.9rem] lg:px-4 px-[6px]"
                    : "hover:text-primary font-medium text-[0.9rem] lg:px-4 px-[6px]"
                }
              >
                Community
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="about-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-medium text-[0.9rem] lg:px-4 px-[6px]"
                    : "hover:text-primary font-medium text-[0.9rem] lg:px-4 px-[6px]"
                }
              >
                About Us
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to="faqs"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-medium text-[0.9rem] lg:px-4 px-[6px]"
                    : "hover:text-primary font-medium text-[0.9rem] lg:px-4 px-[6px]"
                }
              >
                FAQs
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList className="lg:ml-12 ml-4 gap-2 md:gap-0 flex justify-start md:justify-end">
            <NavigationMenuItem>
                <a href="https://stove.com.ng/register.php"
                className="duration-300 hover:opacity-75 font-medium text-[0.9rem]"
                
              >
                Create Account
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent md:translate-x-6 data-[active]:bg-transparent data-[state=open]:bg-transparent p-0 w-fit h-fit">
                <Button className="dark:text-accent-foreground rounded-[40px] hover:bg-secondary hover:text-primary py-7 duration-200 bg-primary text-accent px-4">
                  Download App
                </Button>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[250px] py-2">
                <div className="flex gap-2 font-medium text-[0.8rem]">
                  <div className="dark:bg-white rounded-md">
                    <img
                      src={qr}
                      alt="stove qr code scan to download"
                      className="max-w-[100px]"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p>
                      Scan to download stove App in your phone.
                      <span className="text-[#d3d3d3]"> or get it here</span>
                    </p>
                    <div className="flex gap-2 items-center justify-center">
                      <Button
                        className="flex gap-1 rounded-xl"
                        variant={"secondary"}
                      >
                        <img src={apple} alt="appleIcon" />
                        Apple Store
                      </Button>
                      <Button
                        className="flex gap-1 rounded-xl"
                        variant={"secondary"}
                      >
                        <img src={google} alt="googleIcon" />
                        Google Play
                      </Button>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
        {!navToggle ? (
          <MenuIcon className="md:hidden block " onClick={handleToggle} />
        ) : (
          <XCircleIcon className="md:hidden block " onClick={handleToggle} />
        )}
      </NavigationMenu>
    </nav>
  );
}