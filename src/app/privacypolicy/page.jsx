
import Breadcrumb from "@/components/Breadcrumb";
import Disclaimer from "@/components/Disclaimer";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import PrivacyPolicy from "@/components/PrivacyPolicy";




export const metadata = {
  title: "About ||  broadinternetdeals.com",
  description:
    " broadinternetdeals.com provides top-quality internet services to help you build the best agency, app, business, or digital solution.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'Privacy Policy'} />

     
<PrivacyPolicy/>
<Disclaimer/>
      {/* Footer One */}
      <FooterOne />

    </>
  );
};

export default page;
