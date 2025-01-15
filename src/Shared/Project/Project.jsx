/* eslint-disable react/prop-types */

const Project = ({ project }) => {
	const {
		project_name,
		project_image_url,
		project_description,
		project_type,
		category,
	} = project;

	return (
		<div className="project-card border mt-10 rounded-lg shadow-md p-4 bg-white max-w-lg mx-auto">
			<img
				src={project_image_url}
				className="w-full h-[300px] rounded-lg"
				alt={project_name}
			/>
			<div className="mt-4">
				<h2 className="text-xl font-bold">
					{" "}
					{project_name.length > 30
						? project_name.substring(0, 30) + "...."
						: project_name}
				</h2>
				<p className="text-gray-600 break-word break-words mt-2">
					{project_description.length > 80
						? project_description.substring(0, 80) + "...."
						: project_description}
				</p>
				<div className="flex mt-4">
					<span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">
						{project_type}
					</span>
					<span className="bg-green-500 text-white px-2 py-1 rounded-md">
						{category}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Project;
