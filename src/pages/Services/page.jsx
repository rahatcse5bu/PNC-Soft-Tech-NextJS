import MainLayout from "../../Layout/MainLayout";
import ServicesPage from "./index";

const Services = () => {
  return <ServicesPage />;
};

Services.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Services;
