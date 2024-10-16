// import AnAppForYou from "@/stove components/anAppForYou";
// import BusinessStove from "@/stove components/busineesStove";
// import Discover from "@/stove components/discover-stove";
// import Faq from "@/stove components/faq";
// import GetTheApp from "@/stove components/getTheApp";
// import Buzz from "@/stove components/reviews";
import Hero from "@/stove components/hero";
import { Services } from "@/stove components/services-section";
import {lazy} from "react";
import { Helmet } from "react-helmet";
const LazyApp = lazy(() => import("@/stove components/anAppForYou"));
const LazyDiscover = lazy(() => import("@/stove components/discover-stove"));
const LazyFaq = lazy(() => import("@/stove components/faq"));
const LazyBuzz = lazy(() => import("@/stove components/reviews"));
const LazyGetApp = lazy(() => import("@/stove components/getTheApp"));
const LazyBusn = lazy(() => import("@/stove components/busineesStove"));
export function Homepage() {
    const ogData = {
      title: "About",
      description: "STOVE we are here for convenience",
      url: "https://www.nstve.netlify.app",
      image: "../assets/stovelogo.png",
      siteName: "Stove",
    };
    const canonicalUrl = "https://www.nstve.netlify.app";
    
    return (
        <><Helmet>
      <title>Stove</title>
      <meta name="About Us" content="Learn more about our company STOVE" />
      <meta property="og:title" content={ogData.title} />
      <meta property="og:description" content={ogData.description} />
      <meta property="og:url" content={ogData.url} />
      <meta property="og:image" content={ogData.image} />
      <meta property="og:site_name" content={ogData.siteName} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>;
        <Hero />
            <Services />
        <main className="px-3 md:px-7 lg:px-16 overflow-hidden w-full">
                <LazyDiscover />
                <LazyApp />
                <LazyBuzz />
                <LazyBusn/>
                <LazyFaq/>
                <LazyGetApp />
        </main>
        </>
       
       
    )
}