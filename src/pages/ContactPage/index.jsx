import MainLayout from "../../Layout/MainLayout";
import Contact from "./Contact/index";

const ContactPage = () => {
  return <Contact />;
};

ContactPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ContactPage;
