import AboutAreaOne from "@/components/AboutAreaOne";
import BannerOne from "@/components/BannerOne";
import BlogAreaOne from "@/components/BlogAreaOne";
import CaseStudyAreaOne from "@/components/CaseStudyAreaOne";
import ContactAreaOne from "@/components/ContactAreaOne";
import CounterAreaOne from "@/components/CounterAreaOne";
import Disclaimer from "@/components/Disclaimer";
import FaqAreaOne from "@/components/FaqAreaOne";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import PricingAreaOne from "@/components/PricingAreaOne";
import ProviderCard from "@/components/Providrcards";
import ServiceAreaOne from "@/components/ServiceAreaOne";
import TeamAreaOne from "@/components/TeamAreaOne";
import WorkProcessOne from "@/components/WorkProcessOne";


export const metadata = {
  title: "Home ||  broadinternetdeals.com",
  description:
    " broadinternetdeals.com provides top-quality internet services to help you build the best agency, app, business, or digital solution.",
  verification: {
    google: "qpl1HeP8DG536nsy7RModsK6mwzKY56LzX16GWltJWU",
  },
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Banner One */}
      <BannerOne />

      <ProviderCard/>

      {/* About Area One */}
      <AboutAreaOne />

      {/* Service Area One */}
      <ServiceAreaOne />

      {/* FAQ Area One */}
      <FaqAreaOne />

      {/* Case Study Area One */}
      <CaseStudyAreaOne />

      {/* Team Area One */}
      {/* <TeamAreaOne /> */}

      {/* Counter Area One */}
      <CounterAreaOne />

      {/* Contact Area One */}
      <ContactAreaOne />

      {/* Work Process One */}
      <WorkProcessOne />

      {/* Pricing Area One */}
      <PricingAreaOne />

      {/* Blog Area One */}
      {/* <BlogAreaOne /> */}
< Disclaimer/>
      {/* Footer One */}
      <FooterOne />


    </>
  );
};

export default page;
