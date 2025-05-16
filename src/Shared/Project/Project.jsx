/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendar, FaGlobe, FaListUl } from 'react-icons/fa';
import { useLazyLoading, getOptimizedImageUrl } from '../../utils/imageOptimization';

const Project = ({ project }) => {
	const {
		id,
		project_name,
		project_image_url,
		project_description,
		project_type,
		category,
		completion_date,
		technologies,
		client
	} = project;

	const [isHovered, setIsHovered] = useState(false);
	const projectRef = useRef(null);
	const isVisible = useLazyLoading(projectRef);
	
	// Optimize image URL
	const optimizedImageUrl = getOptimizedImageUrl(project_image_url);

	return (
		<motion.div
			ref={projectRef}
			className="h-full overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
		>
			<div className="relative h-64 w-full overflow-hidden">
				{isVisible && (
					<Image
						src={optimizedImageUrl}
						alt={project_name}
						width={500}
						height={300}
						loading="lazy"
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
						className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
					/>
				)}
				<div className="absolute inset-0 bg-gradient-to-t from-[#041436]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
					<div className="p-6 w-full">
						<div className="flex flex-wrap gap-2 mb-3">
							<span className="px-3 py-1 bg-[#00FAA8]/80 text-[#041436] text-xs font-medium rounded-full">
								{project_type}
							</span>
							<span className="px-3 py-1 bg-white/80 text-[#041436] text-xs font-medium rounded-full">
								{category}
							</span>
						</div>
						<h3 className="text-xl font-bold text-white mb-2">{project_name}</h3>
						<div className="flex items-center text-white/80 text-sm">
							<FaCalendar className="mr-2" />
							<span>{completion_date}</span>
						</div>
					</div>
				</div>
			</div>

			<div className="p-6">
				<h3 className="text-xl font-bold text-[#041436] mb-3">{project_name}</h3>
				<p className="text-gray-600 mb-4">
					{project_description.length > 120
						? project_description.substring(0, 120) + "..."
						: project_description}
				</p>

				<div className="flex flex-wrap gap-2 mb-4">
					{technologies && technologies.slice(0, 3).map((tech, index) => (
						<span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
							{tech}
						</span>
					))}
					{technologies && technologies.length > 3 && (
						<span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
							+{technologies.length - 3} more
						</span>
					)}
				</div>
				
				<div className="flex justify-between items-center">
					<div className="text-sm text-gray-500">
						<span className="block">Client: {client}</span>
					</div>
					<Link href={`/ProjectDetails/${id}`} prefetch={false}>
						<motion.div
							className="flex items-center text-[#00FAA8] font-medium hover:text-[#041436] transition-colors duration-300"
							whileHover={{ x: 5 }}
						>
							View Details <FaArrowRight className="ml-2" />
						</motion.div>
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default Project;
