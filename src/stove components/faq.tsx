import { Button } from "@/components/ui/button";
import { SyntheticEvent } from "react";

export default function Faq() {
    function handleOpen(e: SyntheticEvent) {
        const currentFaq = e.currentTarget.querySelector("#faqs")
         document.querySelectorAll("#faqs").forEach((el) => {
           if (currentFaq !== el) {
             el.classList.remove("faqActive");
           } else {
             currentFaq.classList.toggle("faqActive");
           }
         });
    }
    return (
      <section className="py-10">
        <h1 className="font-medium text-[3rem] py-8">Questions? Answered.</h1>
        <div className="divide-y-2 divide-secondary">
          <div className="py-5" onClick={handleOpen}>
            <label className="font-medium text-[1.2rem] ">
              What are STOVE's operating hours
            </label>
            <div
              id="faqs"
              className="h-0 opacity-80 overflow-hidden duration-300"
            >
              <div className="flex flex-col gap-3 py-5">
                {" "}
                <div className="">
                  <p className="font-medium text-[1.2rem]">Fuel Delivery</p>{" "}
                  <p>24 hours a day, seven days a week.</p>
                </div>
                <div>
                  <p className="font-medium text-[1.2rem]">Car Wash</p>{" "}
                  <p>From 6am to 3am, seven days a week.</p>
                </div>
                <div>
                  <p className="font-medium text-[1.2rem]">Battery Service</p>{" "}
                  <p>From 7am to 12am, seven days a week.</p>
                </div>
                <div>
                  <p className="font-medium text-[1.2rem]">Engine Oil Change</p>{" "}
                  <p>From 10am to 8pm, seven days a week.</p>
                </div>
                <div>
                  <p className="font-medium text-[1.2rem]">Tyre Change</p>{" "}
                  <p>From 9am to 10pm, seven days a week.</p>
                </div>
                <div>
                  <p className="font-medium text-[1.2rem]">
                    Customer Care – 80 overflow-hidden0-MYCAFU
                  </p>{" "}
                  <p>From 8am to midnight, seven days a week.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 flex flex-col gap-5" onClick={handleOpen}>
            <label className="font-medium text-[1.2rem]">
              Where does STOVE deliver to
            </label>
            <div
              id="faqs"
              className="h-0 opacity-80 overflow-hidden duration-300"
            >
              <div className="flex flex-col gap-4">
                <p>
                  Fuel can be delivered to vehicles parked outdoors in Nigeria
                  and Ghana. Boats and personal watercraft can be fuelled at
                  selected Marinas in Nigeria.
                </p>
                <p>
                  Car Wash services can be ordered to most locations in Nigeria.
                  Steam Sanitisation is available in most of Nigeria only.
                </p>
                <p>
                  Engine Oil Change services can be ordered to most locations
                  within Abia and Owerri.
                </p>
                <p>
                  Battery Service can be ordered to most locations within
                  Nigeria.
                </p>
                <p>
                  Tyre Change service can be ordered to most locations within
                  Nigeria.
                </p>
                <p>
                  Tip: A service will only show up on the app if it is available
                  at the pinned location.
                </p>
              </div>
            </div>
          </div>
          <div className="py-5 flex flex-col gap-5" onClick={handleOpen}>
            <label className="font-medium text-[1.2rem]">
              How do I manage my vehicles in STOVE app?
            </label>
            <div
              id="faqs"
              className="h-0 opacity-80 overflow-hidden duration-300"
            >
              <div className="flex flex-col gap-4">
                <p>
                  You can add or remove vehicles through the vehicle selection
                  screen on the main page.
                </p>
                <div>
                  <p className="mb-2">To add a vehicle:</p>
                  <ul className="list-disc list-outside">
                    <li>Go to the main menu on the application home screen.</li>
                    <li>Select “My Vehicles”.</li>
                    <li>Select “Add Vehicle” at the bottom of the page.</li>
                    <li>Add your vehicle’s details and tap “Save”.</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2">To delete a vehicle:</p>
                  <ul className="list-disc list-outside">
                    <li>Go to the main menu on the application home screen.</li>
                    <li>Select “My Vehicles”.</li>
                    <li>Choose the vehicle you want to delete.</li>
                    <li>select “delete Vehicle” at the bottom of the page.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 flex flex-col gap-5" onClick={handleOpen}>
            <label className="font-medium text-[1.2rem]">
              We payment method do you support
            </label>
            <div
              id="faqs"
              className="h-0 opacity-80 overflow-hidden duration-300"
            >
              <div className="flex flex-col gap-4">
                <p>
                  You can use any Visa, MasterCard or Verve debit or credit
                  cards to pay for your orders on the app.{" "}
                </p>
                <p>
                  We do not currently accept cash or non-Nigerian credit/debit
                  cards.
                </p>
              </div>
            </div>
          </div>
          <div className="py-5 flex flex-col gap-5" onClick={handleOpen}>
            <label className="font-medium text-[1.2rem]">
              How can I get the most from STOVE
            </label>
            <div
              id="faqs"
              className="h-0 opacity-80 overflow-hidden duration-300"
            >
              <div className="flex flex-col gap-4">
                <p>
                  To make the most of STOVE, keep an eye out for our latest
                  promotions via the following channels:
                </p>
                <div>
                  <ul className="list-disc list-outside">
                    <li>
                      Turn on your app notifications for the latest offers and
                      order status updates.
                    </li>
                    <li>Check your email for deals and promotions.</li>
                    <li>
                      Check your SMS messages for occasional promos from us.
                    </li>
                    <li>
                      Follow us on social media for regular updates and special
                      offers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-10">
          <Button variant={"outline"} className="font-medium rounded-xl">
            {" "}
            Go To FAQs
          </Button>
        </div>
      </section>
    );
}