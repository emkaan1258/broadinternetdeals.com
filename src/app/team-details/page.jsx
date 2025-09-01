import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import TeamDetailsGroup from "@/components/TeamDetailsGroup";



export const metadata = {
  title: "Team Details ||  broadinternetdeals.com",
  description:
    " broadinternetdeals.com provides top-quality internet services to help you build the best agency, app, business, or digital solution.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={"Team Details"} />

      {/* Team Details Group */}
      <TeamDetailsGroup />

      {/* Footer One */}
      <FooterOne />

    </>
  );
};

export default page;
