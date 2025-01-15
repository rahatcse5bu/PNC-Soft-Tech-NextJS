import { Colors } from "../../../constant/colors";
import img1 from "../../../assets/about/img/about-choose-1.jpg";
import img2 from "../../../assets/about/img/about-choose-2.jpg";
import { FaPhone } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Image from "next/image";
const Card = ({ type, text, subText }) => {
	const faPhoneStyle = {
		backgroundColor: "rgba(255, 94, 20,0.6)",
		borderColor: Colors.secondary,
	};
	return (
		<div className="relative mt-5  lg:w-[46%] w-[95%]">
			<div
				className="absolute flex items-center justify-center w-12 h-12 mt-3 mr-4 border-4 rounded-full top-1 -left-4"
				style={faPhoneStyle}
			>
				{type === "phone" ? (
					<FaPhone className="text-white"></FaPhone>
				) : (
					<AiTwotoneMail className="text-white"></AiTwotoneMail>
				)}
			</div>
			<div className="w-full px-5 py-4 ml-2 border-2 rounded-md shadow-sm">
				<h2 className="ml-2 font-semibold text-gray-400">{text}</h2>
				<h3 className="mt-2 ml-2 text-sm">{subText}</h3>
			</div>
		</div>
	);
};

Card.propTypes = {
	type: PropTypes.oneOf(["phone", "mail"]).isRequired,
	text: PropTypes.string.isRequired,
	subText: PropTypes.string.isRequired,
};

const Left = () => {
	const spanHederElement = {
		color: Colors.secondary,
	};
	return (
		<div className="md:w-[45%] sm:[50%] w-[90%] mx-auto mt-10 md:mx-10 sm:mx-5">
			<div>
				<h3 className="mb-4 text-xl font-semibold text-gray-300">
					WHY CHOOSE US
				</h3>
				<h1 className="mb-4 text-xl font-bold text-gray-500 sm:text-2xl">
					<span style={spanHederElement} className="">
						We Ensure The Quality{" "}
					</span>
					Of Your Dream Construction
				</h1>
				<p className="mb-4 font-medium text-gray-600">
					Rorem Ipsum is simply dummy text of the printin and type setting
					industry. Lorem Ipsum has been the industry&apos;s standard dummy text
					ever since the 1500s, when an unknown
				</p>

				<p className="mb-4 font-medium text-gray-600">
					Printer took a galley of type and scrambled it to make a type speci
					menu book. It has survived not only five centuries, but also the leap
					intoelectronic typesetting, remaining essentially unchanget was
					popularised.
				</p>
			</div>
			<div className="flex items-center">
				<Image src={img1} className="w-12 h-12 mr-4 rounded-full" alt="" height={300} width={300} />
				<div>
					<h2 className="text-xl">Md. Rahat</h2>
					<h3 className="text-base text-gray-500">Project Manager</h3>
				</div>
			</div>
		</div>
	);
};

const Right = () => {
	const element1 = {
		borderColor: Colors.secondary,
	};
	const element2 = {
		borderColor: Colors.primary,
	};
	return (
		<div className="md:w-[45%] sm:w-[50%] md:mt-0 mt-10 w-[95%] mx-auto  relative">
			<div
				style={element1}
				className={`border-4 sm:w-[400px] w-[250px] sm:h-[400px] h-[300px] rounded-md  border-[${Colors.secondary}]`}
			>
				<Image className="w-full h-full rounded-sm" src={img1} alt="" height={300} width={300} />
			</div>
			<div
				style={element2}
				className=" sm:w-[400px] w-[250px] sm:h-[400px] h-[300px] border-4 rounded-md absolute sm:left-28 sm:top-28 left-10 top-10"
			>
				<Image alt="" className="w-full h-full rounded-sm " src={img2} height={300} width={300} />
			</div>
		</div>
	);
};

const ChooseSection = () => {
	const [isScreenLarge, setIsScreenLarge] = useState(true);

	const checkScreenSize = () => {
		const mdWidth = 768; // Width at which the screen is considered as 'md'
		setIsScreenLarge(window.innerWidth >= mdWidth);
	};

	useEffect(() => {
		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);
		return () => {
			window.removeEventListener("resize", checkScreenSize);
		};
	}, []);
	return (
		<div className="flex flex-col justify-between pb-[100px] md:flex-row-reverse md:px-16 sm:px-10">
			<Left />
			{isScreenLarge && <Right />}
		</div>
	);
};

export default ChooseSection;
