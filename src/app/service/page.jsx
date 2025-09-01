import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import PricingAreaOne from "@/components/PricingAreaOne";
import ServiceAreaGroup from "@/components/ServiceAreaGroup";





export const metadata = {
  title: "Service ||  broadinternetdeals.com",
  description:
    " broadinternetdeals.com provides top-quality internet services to help you build the best agency, app, business, or digital solution.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'Service'} />

      {/* Service Area One */}
      <ServiceAreaGroup />

      {/* Pricing Area One */}
      <PricingAreaOne />

      {/* Footer One */}
      <FooterOne />

    </>
  );
};

export default page;
