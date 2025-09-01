import Breadcrumb from "@/components/Breadcrumb";
import ContactMain from "@/components/ContactMain";
import Disclaimer from "@/components/Disclaimer";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";





export const metadata = {
  title: "Contact ||  broadinternetdeals.com",
  description:
    " broadinternetdeals.com provides top-quality internet services to help you build the best agency, app, business, or digital solution.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Contact"} />

      {/* Contact Main */}
      <ContactMain />
<Disclaimer/>
      {/* Footer One */}
      <FooterOne />

    </>
  );
};

export default page;
