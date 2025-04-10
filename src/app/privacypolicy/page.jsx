
import Breadcrumb from "@/components/Breadcrumb";
import Disclaimer from "@/components/Disclaimer";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import PrivacyPolicy from "@/components/PrivacyPolicy";




export const metadata = {
  title: "About || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
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
