import project2 from "../../../assets/about/img/project-2.jpg"; // Import the image
import PropTypes from "prop-types";
import { Colors } from "../../../constant/colors";
import { FaDesktop } from "react-icons/fa";
import { FaAndroid, FaGlobe, FaPen } from "react-icons/fa6";

const ProjectCard = ({ count, text, type }) => {
	const projectContainerStyle = {
		backgroundColor: Colors.primary,
	};

	const iconStyle = {
		color: Colors.secondary,
		fontSize: "45px",
		marginBottom: "15px",
	};
	return (
		<div
			style={projectContainerStyle}
			className="text-white flex flex-col justify-center rounded-md items-center h-[200px]"
		>
			{type === "desktop" ? (
				<FaDesktop style={iconStyle} />
			) : type == "app" ? (
				<FaAndroid style={iconStyle} />
			) : type === "webapp" ? (
				<FaGlobe style={iconStyle} />
			) : (
				<FaPen style={iconStyle} />
			)}
			<h2 className="font-semibold text-xl">{count}+</h2>
			<h5 className="uppercase font-bold text-2xl mt-2">{text}</h5>
		</div>
	);
};

// Define the prop types for ProjectCard
ProjectCard.propTypes = {
	count: PropTypes.number.isRequired, // 'count' prop is required and must be a number
	text: PropTypes.string.isRequired, // 'text' prop is required and must be a string
	type: PropTypes.string, // 'type' prop is optional and must be a string if provided
};

const ProjectSection = () => {
	const containerStyle = {
		position: "relative",
		backgroundImage: `url(${project2})`, // Use the imported image
		backgroundAttachment: "fixed",
		backgroundSize: "cover",
		height: "500px",
		marginTop: "50px",
	};

	const overlayStyle = {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(4,20,54,0.6)", // Change the color and opacity for the overlay
		zIndex: 2, // Make sure the overlay is above the background image
	};

	return (
		<div style={containerStyle}>
			{/* Background Image */}
			<div style={overlayStyle}>
				<div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 h-full items-center mx-10 gap-5">
					<ProjectCard count="200" text="UI/UX" type="ui/ux" />
					<ProjectCard count="120" text="IOS/Android" type="app" />
					<ProjectCard count="150" text="WEB APP" type="webapp" />
					<ProjectCard count="230" text="Desktop App" type="desktop" />
				</div>
			</div>
		</div>
	);
};

export default ProjectSection;
