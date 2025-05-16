import MainLayout from "../../../Layout/MainLayout";
import WebDevelopment from "./index";

const WebDevPage = () => {
  return <WebDevelopment />;
};

WebDevPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default WebDevPage;
