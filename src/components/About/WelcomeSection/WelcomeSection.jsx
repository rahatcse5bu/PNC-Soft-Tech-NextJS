import { Colors } from "../../../constant/colors";
import img1 from "../../../assets/about/img/about-welcome-1.jpg";
import img2 from "../../../assets/about/img/about-welcome-2.jpg";
import { FaPhone } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Image from "next/image";
const Card = ({ type, text, subText }) => {
	const faPhoneStyle = {
		backgroundColor: "#02FAAD",
		borderColor: Colors.secondary,
	};
	return (
		<div className="relative mt-5  lg:w-[46%] w-[95%]">
			<div
				className="mt-3 top-1 -left-4  absolute mr-4 border-4 rounded-full  w-12 h-12 flex items-center justify-center"
				style={faPhoneStyle}
			>
				{type === "phone" ? (
					<FaPhone className="text-white"></FaPhone>
				) : (
					<AiTwotoneMail className="text-white"></AiTwotoneMail>
				)}
			</div>
			<div className="border-2 w-full ml-2 px-5 py-4 rounded-md shadow-sm">
				<h2 className="ml-2 font-semibold text-gray-400">{text}</h2>
				<h3 className="ml-2 text-sm mt-2">{subText}</h3>
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
				<span className="inline-block px-4 py-2 bg-[#00FAA8]/10 text-[#00FAA8] font-medium rounded-full text-sm mb-4">ABOUT PNC SOFT TECH</span>
				<h1 className="text-3xl md:text-4xl font-bold text-[#041436] mb-6">
					Your Reliable Partner For 
					<span style={spanHederElement} className="ml-2">Digital Solutions</span>
				</h1>
				<p className="mb-6 text-gray-600 leading-relaxed">
					PNC Soft Tech is a leading software development company specializing in web and mobile app development. 
					We combine innovative technologies with industry best practices to deliver exceptional digital solutions.
				</p>				<p className="mb-6 text-gray-600 leading-relaxed">
					Our team of skilled developers, designers, and project managers work collaboratively to transform your ideas 
					into high-quality, scalable, and user-friendly applications that drive business growth.
				</p>
			</div>
			<div className="flex lg:flex-row flex-col justify-between gap-4"><Card type="phone" text="Phone:" subText="+8801793278360" />
				<Card type="email" text="Email:" subText="pncsoft.tech@gmail.com" />
			</div>
		</div>
	);
};

const Right = () => {
	return (
		<div className="md:w-[45%] sm:w-[50%] md:mt-0 mt-10 w-[95%] mx-auto relative">
			<div className="border-4 border-[#00FAA8] rounded-lg sm:w-[400px] w-[250px] sm:h-[400px] h-[300px] shadow-xl overflow-hidden">
				<Image 
					className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
					src={img2} 
					alt="PNC Team at work" 
					height={400} 
					width={400}
				/>
			</div>
			<div className="border-4 border-[#041436] rounded-lg sm:w-[400px] w-[250px] sm:h-[400px] h-[300px] absolute sm:left-28 sm:top-28 left-10 top-10 shadow-xl overflow-hidden z-10 hover:z-20 transition-all duration-300">
				<Image 
					alt="PNC Office" 
					className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
					src={img1} 
					height={400} 
					width={400}
				/>
			</div>
		</div>
	);
};

const WelcomeSection = () => {
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
	}, []);	return (
		<div className="flex md:flex-row flex-col my-20 py-20 justify-between md:px-16 sm:px-10 px-5 bg-gray-50">
			<Left />
			{isScreenLarge && <Right />}
		</div>
	);
};

export default WelcomeSection;
