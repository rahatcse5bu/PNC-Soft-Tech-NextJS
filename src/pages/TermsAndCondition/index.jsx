import MainLayout from "../../Layout/MainLayout";
import TermsAndConditions from "./TermsAndConditions";
import Banner from "../../Shared/Banner/Banner";
import { ScrollToTop } from "../../constant/ScrollToTop";

const TermsPage = () => {
  return (
    <div>
      <ScrollToTop />
      <Banner title="Terms & Conditions" linkText="Terms" />
      <TermsAndConditions />
    </div>
  );
};

TermsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default TermsPage;
