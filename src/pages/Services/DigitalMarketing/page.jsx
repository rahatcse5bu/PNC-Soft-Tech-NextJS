import MainLayout from "../../../Layout/MainLayout";
import DigitalMarketing from "./index";

const DigitalMarketingPage = () => {
  return <DigitalMarketing />;
};

DigitalMarketingPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default DigitalMarketingPage;
