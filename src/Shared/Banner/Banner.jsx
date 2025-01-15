import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Colors } from "../../constant/colors";
import banner from "../../assets/img/banner.jpg";
const Banner = ({ title, linkText }) => {
	const elementStyle = {
		color: Colors.textColor,
		backgroundImage: "url(" + banner + ")",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		position: "relative",
	};

	const overlayStyle = {
		content: '""',
		position: "absolute",
		zIndex: 1,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(4, 20, 54,0.95)", // Adjust the opacity as needed
	};

	const spanElement = {
		color: Colors.secondary,
	};

	return (
		<div style={elementStyle} className="w-auto h-[70vh] m-4 ">
			<div style={overlayStyle}>
				<div
					style={{ zIndex: 100 }}
					className="z-50 flex flex-col items-center justify-center h-full"
				>
					<h2 className="mb-3 text-3xl font-semibold text-center sm:text-6xl">
						{title}
					</h2>

					<h5>
						<Link className="ml-2" to="/">
							HOME .{" "}
						</Link>{" "}
						<span style={spanElement}>{linkText}</span>
					</h5>
				</div>
			</div>
		</div>
	);
};

Banner.propTypes = {
	title: PropTypes.string.isRequired,
	linkText: PropTypes.string.isRequired,
};

export default Banner;
