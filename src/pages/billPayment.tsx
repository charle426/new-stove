import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import ScanToDownload from "@/stove components/scantodownload"
import { useEffect, useState } from "react"
import TextTransition, {presets } from "react-text-transition"
import bizWomen from "../assets/bizwomen.png"
import Faq from "@/stove components/faq"
export default function BillPayment() {
    const [count, setCount] = useState(1)
   const TEXTS : string[] = ["Make transfers", "Pay bills", "Get data", "Buy airtime"]
    
    useEffect(() => {
         const inter = setInterval(() => {
        setCount(prev => prev + 1)
        if (count > 3)
        {
            setCount(1)
            
        }
    }, 3000)
        return () => clearInterval(inter)
    }, [count])
  
  return (
    <main>
      <section className="px-3 md:px-7 lg:px-16 overflow-hidden w-full">
        <section className="Bill-payment relative min-h-[100vh] w-[100%] flex items-center justify-center">
          <img
            src="/blob-blur-yellow.svg"
            alt=""
            className="opacity-70 absolute left-0 top-0 w-full"
          />
          <div className="">
            <div className="w-full relative text-center flex flex-col justify-center items-center *:md:text-7xl *:text-5xl *:scroll-m-20 *:tracking-tight *:font-semibold gap-7">
              <div className="w-full flex items-center gap-5 pt-20 flex-col">
                <h1 className="hero-heading">Make Seamless Transactions</h1>

                <TextTransition
                  className="text-center md:my-5"
                  springConfig={presets.default}
                >
                  <h1 className="hero-heading">
                    {" "}
                    {TEXTS[count % TEXTS.length]}
                  </h1>
                </TextTransition>
                <h1 className="hero-heading md:mt-7">We got you.</h1>
              </div>

              <div className="flex items-center justify-center mt-4 md:mt-10">
                <ScanToDownload />
              </div>
            </div>
          </div>
        </section>
        <div
          id="petrol-services"
          className="py-16 relative z-20 text-center flex flex-col gap-10 justify-center items-center"
        >
          <h3 className="font-medium text-[1.4rem]">
            Make easy fast transactions
          </h3>
          <div className="flex flex-wrap basis-[80px] grow-0 items-center justify-center gap-8">
            <div className="flex md:flex-row flex-col items-center gap-3">
              <div className="fuel-service rounded-xl w-[50px] h-[50px] flex justify-center items-center font-semibold text-[1.5rem] text-accent">
                E
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium">Electric Bills</p>
                <p className="text-blue-500 text-[0.8rem]"></p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-3">
              <div className="lpg-service rounded-xl w-[50px] h-[50px] flex justify-center items-center font-semibold text-[1.5rem] text-accent">
                A
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium">Airtime</p>
                <p className="text-green-500 text-[0.8rem]"></p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-3">
              <div className="diesel-service rounded-xl w-[50px] h-[50px] flex justify-center items-center font-semibold text-[1.5rem] text-accent">
                T
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium">Transfers</p>
                <p className="text-yellow-500 text-[0.8rem]"></p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-3">
              <div className="kero-service rounded-xl w-[50px] h-[50px] flex justify-center items-center font-semibold text-[1.5rem] text-accent">
                C
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium">Cable TV</p>
                <p className="text-[#91e916] text-[0.8rem]"></p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-3">
              <div className="engine-service rounded-xl w-[50px] h-[50px] flex justify-center items-center font-semibold text-[1.5rem] text-accent">
                B
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium">Betting</p>
                <p className="text-[#576247] text-[0.8rem]"></p>
              </div>
            </div>
          </div>
        </div>
        <section className="relative py-7">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="pb-3 text-deep text-4xl font-medium">
              Get started with seamless transactions anytime
              <div className="mt-3">
                <a href="https://www.stv.afrimol.com.ng/register.php">
                  <Button className="dark:text-accent-foreground">
                    Get Started
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-5 flex-grow">
              <Card className="py-5 px-3 rounded-3xl">
                <CardTitle className="pb-3 text-deep text-3xl font-medium">
                  Pay bills, Buy airtime and data
                </CardTitle>
                <CardContent>
                  We can’t stop the bills from coming, but we can make paying
                  them as easy as possible.
                </CardContent>
              </Card>
              <Card className="py-5 px-3 rounded-3xl">
                <CardTitle className="pb-3 text-deep text-3xl font-medium">
                  {" "}
                  Easy refunds and reversals
                </CardTitle>
                <CardContent>
                  Say goodbye to failed transactions and unreversed debits.
                  Manage and monitor refunds within the app.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <div className="py-8">
          <h3 className="text-[2.5rem] font-semibold mb-8">
            No app? No problem.
          </h3>
          <div className="flex gap-6 flex-col items-start">
            <div className="flex items-center justify-center gap-3">
              <p className="bg-secondary w-7 h-7 flex justify-center items-center rounded-full">
                1
              </p>
              <p className="font-medium text-[1.2rem]">
                Download the STOVE app or continue on{" "}
                <span>
                  <a
                    href="https://www.stv.afrimol.com.ng/register.php"
                    className="underline visited:text-slate-700 visited:dark:text-accent text-primary"
                  >
                    web
                  </a>
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <p className="bg-secondary w-7 h-7 flex justify-center items-center rounded-full">
                2
              </p>
              <p className="font-medium text-[1.2rem]">Tap bill payment</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <p className="bg-secondary w-7 h-7 flex justify-center items-center rounded-full">
                3
              </p>
              <p className="font-medium text-[1.2rem]">
                And proceed with your transaction
              </p>
            </div>
          </div>
        </div>
              <Faq/>
      </section>
      <div className="py-8">
        <div className="py-5 bg-deep dark:bg-primary px-2 flex flex-col md:flex-row justify-between">
          <div className="flex-grow w-full max-w-[400px]">
            <img src={bizWomen} alt="business women using stove" />
          </div>
          <div className="flex flex-col gap-4 w-full items-center justify-center">
            <h3 className="pb-3 text-slate-300 md:text-5xl font-medium">
              No Hidden Fees
            </h3>
            <div>
              <a href="https://www.stv.afrimol.com.ng/register.php">
                <Button
                  className="dark:text-accent-foreground rounded-xl"
                  variant={"secondary"}
                >
                  Join Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
