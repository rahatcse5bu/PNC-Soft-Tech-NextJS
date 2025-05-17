import MainLayout from "../../Layout/MainLayout";
import ContactPage from "./index";

const Contact = () => {
  return <ContactPage />;
};

Contact.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Contact;
