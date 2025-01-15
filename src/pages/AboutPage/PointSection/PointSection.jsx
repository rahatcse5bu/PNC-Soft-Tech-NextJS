import { Colors } from "../../../constant/colors";
import PropTypes from "prop-types"; // Import prop-types package


const Point = ({ text, subText }) => {
	return (
		<div className="text-center">
			<h2 className="text-xl mb-3 font-semibold">{text}</h2>
			<h4 className="text-base font-thin break-words text-center break-word ">
				{subText}
			</h4>
		</div>
	);
};

// Define the prop types for Point
Point.propTypes = {
	text: PropTypes.string.isRequired, // 'text' prop is required and must be a string
	subText: PropTypes.string.isRequired, // 'subText' prop is required and must be a string
};

const PointSection = () => {
	const lineStyle = {
		backgroundColor: Colors.secondary,
	};
	return (
		<div className="my-20 mx-20">
			<h4 className="text-center mb-5 text-gray-400 font-semibold">
				HOW WE WORK
			</h4>
			<h2 className="mb-16 text-center text-2xl font-semibold">
				HOW DO WE WORK FOR YOU
			</h2>
			<div
				className="w-[85%]  mx-auto   items-center justify-between h-[2px] flex rounded-md"
				style={lineStyle}
			>
				<div className="h-10 z-10 bg-slate-100 w-10 border-2 flex justify-center items-center overflow-hidden border-[#08F2C1] rounded-full">
					<span>1</span>
				</div>
				<div className="h-10 z-10 bg-slate-100 w-10 border-2 flex justify-center items-center overflow-hidden border-[#08F2C1] rounded-full">
					<span>2</span>
				</div>
				<div className="h-10 z-10 bg-slate-100 w-10 border-2 flex justify-center items-center overflow-hidden border-[#08F2C1] rounded-full">
					<span>3</span>
				</div>
				<div className="h-10 z-10 bg-slate-100 w-10 border-2 flex justify-center items-center overflow-hidden border-[#08F2C1] rounded-full">
					<span>4</span>
				</div>
				<div className="h-10 z-10 bg-slate-100 w-10 border-2 flex justify-center items-center overflow-hidden border-[#08F2C1] rounded-full">
					<span>5</span>
				</div>
			</div>
			<div className="grid grid-cols-5 gap-5 mt-16 justify-center">
				<Point
					text="Requirement Analysis"
					subText="the project's requirements are collected and analyzed thoroughly. The team identifies the project's scope, objectives, functionalities, and constraints."
				/>
				<Point
					text="Design"
					subText="The requirements gathered in the previous phase are transformed into a detailed system design. The architecture of the software system is planned, and technical specifications are created"
				/>
				<Point
					text="Implementation"
					subText="The actual coding and programming take place in this phase. The software is developed based on the design specifications."
				/>
				<Point
					text="Testing"
					subText="The software is tested to identify and fix any defects or bugs. Various testing approaches are used, such as unit testing, integration testing, system testing, and user acceptance testing (UAT)."
				/>
				<Point
					text="Production"
					subText="Once the software passes all testing phases and meets the specified requirements, it is deployed to the production environment or made available to end-users"
				/>
			</div>
		</div>
	);
};

export default PointSection;
