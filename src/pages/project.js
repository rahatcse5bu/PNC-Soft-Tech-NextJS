import ProjectLayout from "../Layout/ProjectLayout";

const ProjectPage = () => {
	return (
		<div>
			<h1>Project Page</h1>
			<p>This is the project content.</p>
		</div>
	);
};

ProjectPage.getLayout = (page) => <ProjectLayout>{page}</ProjectLayout>;

export default ProjectPage;
