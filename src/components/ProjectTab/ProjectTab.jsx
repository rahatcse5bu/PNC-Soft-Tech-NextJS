import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "../../Shared/Projects/Projects";

const ProjectTab = () => {
	const [activeTab, setActiveTab] = useState("all");
	const categories = [
		{ id: "all", label: "All Projects" },
		{ id: "website", label: "Websites" },
		{ id: "app", label: "Mobile Apps" },
		{ id: "ecommerce", label: "E-commerce" },
	];

	return (
		<div className="py-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-6 md:px-10">
				<div className="text-center mb-16">
					<span className="inline-block px-4 py-2 bg-[#00FAA8]/10 text-[#00FAA8] font-medium rounded-full text-sm mb-4">OUR PORTFOLIO</span>
					<h2 className="text-[#041436] text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
					<p className="text-gray-600 max-w-3xl mx-auto">
						Explore our showcase of successful projects across various industries and technologies.
						Each project represents our commitment to quality, innovation, and client satisfaction.
					</p>
				</div>

				{/* Filtering Tabs */}
				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{categories.map((category) => (
						<motion.button
							key={category.id}
							onClick={() => setActiveTab(category.id)}
							className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
								activeTab === category.id
									? "bg-[#041436] text-white"
									: "bg-white text-[#041436] hover:bg-gray-100"
							}`}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{category.label}
						</motion.button>
					))}
				</div>

				{/* Projects Grid */}
				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5 }}
					>
						<Projects project_type={activeTab} />
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default ProjectTab;
