import { Button } from "@/components/ui/button";
import qr from "../assets/qr-code.svg"
import mobileApp from "../assets/mobile_app.webp"
export default function GetTheApp() {
    return (
      <section className="py-7">
        <div className="flex flex-col md:flex-row bg-primary px-5 rounded-[30px] w-full justify-between">
          <div className="w-full">
            <h1 className="text-secondary dark:text-accent-foreground font-bold md:text-[3.5rem] lg:text-[5.5rem] text-[2rem]">
              Get Started
            </h1>
            <div className="w-fit mt-5 md:mt-10">
              <div className="bg-secondary py-2 px-3 text-[0.8rem] font-medium rounded-xl flex gap-3 items-center flex-wrap md:flex-nowrap">
                <img src={qr} className="max-w-[80px]" />
                <div className="flex flex-col gap-1 items-center *:dark:text-accent-foreground">
                  <p className="text-[1rem]">Scan to download app</p>
                  <p>Or start on the web</p>
                  <div className="flex gap-2 items-center">
                    <a href="https://stove.com.ng/register.php" target="_blank" rel="noopener noreferrer">
                      <Button className="dark:text-accent-foreground hover:bg-slate-500" variant={"default"}>
                        Register
                      </Button>
                    </a>
                    <a href="https://stove.com.ng/register.php" target="_blank" rel="noopener noreferrer">
                      <Button className="dark:text-accent-foreground hover:bg-slate-500" variant={"default"}>
                        Login
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-end w-full">
            <img
              src={mobileApp}
              alt="an image instance of the mobile app"
              className=""
            />
          </div>
        </div>
      </section>
    );
}