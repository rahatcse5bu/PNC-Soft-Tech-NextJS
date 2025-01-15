import { Outlet } from "react-router-dom";
import ProjectTab from "../components/ProjectTab/ProjectTab";

const ProjectLayout = () => {
	return (
		<div>
			<ProjectTab />
			<Outlet />
		</div>
	);
};

export default ProjectLayout;
