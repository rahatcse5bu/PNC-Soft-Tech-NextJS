import MainLayout from "../../Layout/MainLayout";
import Projects from "./Projects/index";

const ProjectsPage = () => {
  return <Projects />;
};

ProjectsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ProjectsPage;
