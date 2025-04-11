import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import PriceAreaOne from "@/components/PriceAreaOne";



export const metadata = {
  title: "Price ||  telecompaybill.us",
  description:
    " Telecompaybill.us provides top-quality internet services to help you build the best agency, app, business, or digital solution.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={'Price 01'} />

      {/* PriceAreaOne */}
      <PriceAreaOne />

      {/* Footer One */}
      <FooterOne />

    </>
  );
};

export default page;
