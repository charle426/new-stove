import { Footer } from "@/stove components/footer";
import Navbar from "../navbar";
import ModeToggle from "@/components/ui/ModeToggle"
import { Outlet } from "react-router-dom";
export function Layout() {
  return (
    <>
      <Navbar />
          <Outlet />
       <Footer/>  
       <div className="fixed right-5 bottom-10 z-50">
          <ModeToggle/>  
      </div> 
    </>
  );
}
