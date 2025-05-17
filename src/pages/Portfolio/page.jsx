import MainLayout from "../../Layout/MainLayout";
import PortfolioPage from "./index";

const Portfolio = () => {
  return <PortfolioPage />;
};

Portfolio.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Portfolio;
