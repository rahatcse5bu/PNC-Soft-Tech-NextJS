import { Outlet } from "react-router-dom";
import ProjectTab from "../components/ProjectTab/ProjectTab";

const ProjectLayout = ({ children }) => {
	return (
		<div>
			<ProjectTab />
			<main>{children}</main>
		</div>
	);
};

export default ProjectLayout;
