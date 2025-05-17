import MainLayout from "../../Layout/MainLayout";
import CareersPage from "./index";

const Careers = () => {
  return <CareersPage />;
};

Careers.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Careers;
