import MainLayout from "../../Layout/MainLayout";
import About from "./About/index";

const AboutPage = () => {
  return <About />;
};

AboutPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default AboutPage;
