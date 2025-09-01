import Breadcrumb from "@/components/Breadcrumb";
import CaseStudyArea from "@/components/CaseStudyArea";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";



export const metadata = {
  title: "Project Details ||  broadinternetdeals.com",
  description:
    " broadinternetdeals.com provides top-quality internet services to help you build the best agency, app, business, or digital solution.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'Project Details'} />

      {/* Case Study Area */}
      <CaseStudyArea />

      {/* Footer One */}
      <FooterOne />

    </>
  );
};

export default page;
