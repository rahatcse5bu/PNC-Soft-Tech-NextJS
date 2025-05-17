import MainLayout from "../../../Layout/MainLayout";
import MobileAppDevelopment from "./index";

const MobileAppPage = () => {
  return <MobileAppDevelopment />;
};

MobileAppPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default MobileAppPage;
