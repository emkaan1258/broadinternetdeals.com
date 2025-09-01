import Breadcrumb from "@/components/Breadcrumb";
import ContactAreaOne from "@/components/ContactAreaOne";
import CounterAreaOne from "@/components/CounterAreaOne";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import ProjectAreaGroup from "@/components/ProjectAreaGroup";
import TeamAreaOne from "@/components/TeamAreaOne";



export const metadata = {
  title: "Project ||  broadinternetdeals.com",
  description:
    " broadinternetdeals.com provides top-quality internet services to help you build the best agency, app, business, or digital solution.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={'Project 01'} />

      {/* ProjectAreaGroup */}
      <ProjectAreaGroup />

      {/* TeamAreaOne */}
      <TeamAreaOne />

      {/* Counter Area One */}
      <CounterAreaOne />

      {/* Contact Area One */}
      <div className="pd-bottom-120">
        <ContactAreaOne />
      </div>

      {/* Footer One */}
      <FooterOne />

    </>
  );
};

export default page;
