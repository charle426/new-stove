import AnAppForYou from "@/stove components/anAppForYou";
import BusinessStove from "@/stove components/busineesStove";
import Discover from "@/stove components/discover-stove";
import Faq from "@/stove components/faq";
import GetTheApp from "@/stove components/getTheApp";
import Buzz from "@/stove components/reviews";
import Hero from "@/stove components/hero";
import { Services } from "@/stove components/services-section";
export function Homepage() {

  return (
    <>
      <Hero />
      <Services />
      <main className="px-3 md:px-7 lg:px-16 overflow-hidden w-full">
        <Discover />
        <AnAppForYou />
        <Buzz />
        <BusinessStove />
        <Faq />
        <GetTheApp />
      </main>
    </>
  );
}
