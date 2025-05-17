import MainLayout from "../../Layout/MainLayout";
import TeamPage from "./index";

const Team = () => {
  return <TeamPage />;
};

Team.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Team;
