import BlogDetailsArea from "@/components/BlogDetailsArea";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";





export const metadata = {
  title: "Blog Details ||  broadinternetdeals.com",
  description:
    " broadinternetdeals.com provides top-quality internet services to help you build the best agency, app, business, or digital solution.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Blog Details"} />

      {/* Blog Details Area */}
      <BlogDetailsArea />

      {/* Footer One */}
      <FooterOne />

    </>
  );
};

export default page;
