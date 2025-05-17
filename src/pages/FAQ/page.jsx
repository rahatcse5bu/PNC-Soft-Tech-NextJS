import MainLayout from "../../Layout/MainLayout";
import FAQPage from "./index";

const FAQ = () => {
  return <FAQPage />;
};

FAQ.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default FAQ;
