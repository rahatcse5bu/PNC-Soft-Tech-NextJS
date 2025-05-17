import MainLayout from "../../../Layout/MainLayout";
import CloudServices from "./index";

const CloudServicesPage = () => {
  return <CloudServices />;
};

CloudServicesPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default CloudServicesPage;
