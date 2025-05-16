import PropTypes from "prop-types";
import { useEffect, useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Loading from "../Loading/Loading";

// Dynamically import Project component for better performance
const Project = dynamic(() => import("../Project/Project"), {
	ssr: true,
	loading: () => (
		<div className="h-96 w-full rounded-xl bg-gray-100 animate-pulse"></div>
	),
});

const Projects = ({ project_type }) => {
	const [projects, setProjects] = useState([]);
	const [visibleProjects, setVisibleProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const projectsPerPage = 6;

	// Memoize the fetch function to prevent unnecessary recreations
	const fetchProjects = useCallback(async () => {
		try {
			setLoading(true);
			// Add cache control headers for better performance
			const response = await fetch("/db.json", {
				cache: "force-cache",
				headers: {
					'Cache-Control': 'max-age=3600',
				}
			});
			
			if (!response.ok) {
				throw new Error(`Failed to fetch projects: ${response.status}`);
			}
			
			const data = await response.json();
			
			let filteredData;
			if (project_type !== "all" && project_type !== "ecommerce") {
				filteredData = data.filter(
					(project) => project.project_type === project_type
				);
			} else if (project_type === "ecommerce") {
				filteredData = data.filter(
					(project) => project.category === "E-commerce"
				);
			} else {
				filteredData = data;
			}
			
			setProjects(filteredData);
			setVisibleProjects(filteredData.slice(0, projectsPerPage));
			setLoading(false);
		} catch (error) {
			console.error("Error fetching projects:", error);
			setError(error.message);
			setLoading(false);
		}
	}, [project_type]);
	
	useEffect(() => {
		fetchProjects();
		// Reset to page 1 when project_type changes
		setCurrentPage(1);
	}, [fetchProjects, project_type]);

	// Handle load more button click
	const handleLoadMore = useCallback(() => {
		const nextPage = currentPage + 1;
		const nextProjects = projects.slice(0, nextPage * projectsPerPage);
		setVisibleProjects(nextProjects);
		setCurrentPage(nextPage);
	}, [currentPage, projects, projectsPerPage]);

	// Memoize whether there are more projects to load
	const hasMore = useMemo(() => {
		return visibleProjects.length < projects.length;
	}, [visibleProjects, projects]);

	if (loading) {
		return (
			<div className="flex justify-center items-center py-20">
				<Loading />
			</div>
		);
	}

	if (error) {
		return (
			<div className="text-center py-20">
				<p className="text-red-500 text-xl">Error: {error}</p>
				<button
					onClick={() => fetchProjects()}
					className="mt-4 px-6 py-2 bg-[#041436] text-white rounded-lg hover:bg-[#041436]/90"
				>
					Try Again
				</button>
			</div>
		);
	}

	if (projects.length === 0) {
		return (
			<div className="text-center py-20">
				<p className="text-gray-500 text-xl">No projects found in this category.</p>
			</div>
		);
	}

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{visibleProjects.map((project, index) => (
					<motion.div
						key={project.id || index}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<Project project={project} />
					</motion.div>
				))}
			</div>
			
			{hasMore && (
				<div className="mt-16 text-center">
					<motion.button
						onClick={handleLoadMore}
						className="px-8 py-3 bg-[#041436] text-white font-medium rounded-lg hover:bg-[#041436]/90 transition-all duration-300"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Load More Projects
					</motion.button>
				</div>
			)}
		</div>
	);
};

Projects.propTypes = {
	project_type: PropTypes.string.isRequired,
};

export default Projects;
