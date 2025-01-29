import qr from "../assets/qr-code.svg";
import { Button } from "@/components/ui/button";

export default function ScanToDownload() {
  return (
    <div>
      <div className=" hidden bg-secondary hover:scale-110 duration-200 py-2 px-3 text-[0.8rem] font-medium rounded-xl md:flex gap-3 items-center flex-wrap md:flex-nowrap">
        <div className=" dark:bg-accent-foreground rounded-lg">
          <img src={qr} className="max-w-[80px]" />
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p>Scan to download app</p>
          <p className="text-[1rem]">Or</p>
          <a href="https://stove.com.ng/register.php" target="_blank" rel="noopener noreferrer">
            <Button className="dark:text-accent-foreground">Get Started</Button>
          </a>
        </div>
      </div>
      <div className="md:hidden ">
        <a href="https://stove.com.ng/register.php" target="_blank" rel="noopener noreferrer">
          <Button className="p-6 rounded-xl hover:bg-secondary text-white">Get Started</Button>
        </a>
      </div>
    </div>
  );
}
