import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

const MainLayout = ({ children }) => {
	// Smooth scrolling effect
	useEffect(() => {
		// Add smooth scrolling to all internal links
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				
				const targetId = this.getAttribute('href').substring(1);
				if (targetId) {
					const targetElement = document.getElementById(targetId);
					if (targetElement) {
						targetElement.scrollIntoView({
							behavior: 'smooth'
						});
					}
				}
			});
		});
		
		return () => {
			// Cleanup event listeners on unmount
			document.querySelectorAll('a[href^="#"]').forEach(anchor => {
				anchor.removeEventListener('click', function() {});
			});
		};
	}, []);
	
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
