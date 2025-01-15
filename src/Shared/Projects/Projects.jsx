import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Project from "../Project/Project";
import Loading from "../Loading/Loading";

const Projects = ({ project_type }) => {
	const [projects, setProjects] = useState([]);
	console.log(project_type);
	useEffect(() => {
		const fetchProjects = async () => {
			const response = await fetch("/db.json");
			const data = await response.json();
			// console.log(data);
			if (project_type !== "all") {
				const filteredProjects = data.filter(
					(project) => project.project_type === project_type
				);
				setProjects(filteredProjects);
			} else {
				setProjects(data);
			}
		};
		fetchProjects();
	}, [project_type]);
	// console.log(category);

	useEffect(() => {
		window.scrollTo(450, 450);
	}, [projects]);

	if (projects.length === 0) {
		return <Loading />;
	}

	return (
		<div className="grid grid-cols-1 gap-5 mb-10 lg:grid-cols-3 md:grid-cols-2">
			{projects.map((project, index) => {
				return <Project key={index} project={project} />;
			})}
		</div>
	);
};

Projects.propTypes = {
	project_type: PropTypes.string.isRequired,
};

export default Projects;
