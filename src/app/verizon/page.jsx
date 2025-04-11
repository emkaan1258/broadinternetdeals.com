
import Breadcrumb from "@/components/Breadcrumb";
import Disclaimer from "@/components/Disclaimer";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import Verizon from "@/components/Verizon"



export const metadata = {
  title: "About ||  telecompaybill.us",
  description:
    " Telecompaybill.us provides top-quality internet services to help you build the best agency, app, business, or digital solution.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'Verizon'} />

     <Verizon/>
<Disclaimer/>
      {/* Footer One */}
      <FooterOne />

    </>
  );
};

export default page;
