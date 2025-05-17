import MainLayout from "../../../Layout/MainLayout";
import UIUXDesign from "./index";

const UIUXDesignPage = () => {
  return <UIUXDesign />;
};

UIUXDesignPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default UIUXDesignPage;
