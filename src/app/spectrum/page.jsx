import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import Spectrum from "@/components/Spectrum";

export const metadata = {
  title: "About ||  telecompaybill.us",
  description:
    " Telecompaybill.us provides top-quality internet services to help you build the best agency, app, business, or digital solution.",
};

const page = () => {
  return (
    <>
      <NavBar />
      <Spectrum />
      <FooterOne />
    </>
  );
};

export default page;
