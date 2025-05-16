import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaSearch, FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
	const [mounted, setMounted] = useState(false);
	
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className="min-h-screen bg-gradient-to-br from-[#041436] to-[#071952] flex flex-col items-center justify-center px-6 py-20">
			<div className="w-full max-w-4xl flex flex-col items-center">
				<motion.div 
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="relative mb-8"
				>
					<div className="text-[150px] md:text-[220px] font-bold text-white opacity-10 select-none">404</div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center">						<div className="w-28 h-28 md:w-40 md:h-40 relative flex items-center justify-center">
							<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#00FAA8"/>
							</svg>
						</div>
					</div>
				</motion.div>

				<motion.div 
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-center"
				>
					<h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Page Not Found</h1>
					<p className="text-lg text-gray-300 max-w-xl mb-8">
						Oops! It seems like the page you're looking for has been moved, deleted, or never existed.
					</p>

					<div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
						<Link href="/" className="w-full md:w-auto">
							<motion.button 
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#00FAA8] text-[#041436] font-medium rounded-lg hover:bg-[#00FAA8]/90 transition-all duration-300"
							>
								<FaHome /> Back to Homepage
							</motion.button>
						</Link>
						<Link href="/ContactPage" className="w-full md:w-auto">
							<motion.button 
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
							>
								<FaSearch /> Contact Support
							</motion.button>
						</Link>
					</div>
				</motion.div>

				<motion.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-16 md:mt-20 w-full"
				>
					<div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
						<h3 className="text-xl font-medium text-white mb-4">Looking for something specific?</h3>
						<p className="text-gray-300 mb-6">Check out these popular pages:</p>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							{[
								{ title: "Services", path: "/Services" },
								{ title: "About Us", path: "/AboutPage" },
								{ title: "Projects", path: "/ProjectsPage" },
								{ title: "Contact", path: "/ContactPage" }
							].map((item, index) => (
								<Link href={item.path} key={index}>
									<div className="p-3 bg-white/10 hover:bg-[#00FAA8]/20 rounded-lg transition-all duration-300 text-white">
										{item.title}
									</div>
								</Link>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default NotFound;
