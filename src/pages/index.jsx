import MainLayout from "../Layout/MainLayout";
import HomePage from "./HomePage/index";

const Home = () => {
  return <HomePage />;
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
