import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { employees } from "../../../constant/employees";
import tarikul from "../../../assets/about/person/img/tarikul.jpg";
import sujan from "../../../assets/about/person/img/sujan.jpg";
import anis from "../../../assets/about/person/img/anis.jpg";
import rahat from "../../../assets/about/person/img/rahat.jpg";
import sabuj from "../../../assets/about/person/img/sabuj.jpg";

import PropTypes from "prop-types";
import { Colors } from "../../../constant/colors";
import { FaGithub, FaLinkedinIn, FaSquareFacebook } from "react-icons/fa6";
import Image from "next/image";

const EmployeeCard = ({ employee }) => {
	const { name, username, position } = employee;
	return (
		<div className="px-4">
			<div
				style={{ backgroundColor: Colors.primary }}
				className="flex items-center  justify-between  bg-gray-100 rounded-lg shadow-md"
			>
				<Image
					src={
						username === "tarikul"
							? tarikul
							: username === "sujan"
							? sujan
							: username === "anis"
							? anis
							: username === "rahat"
							? rahat
							: sabuj
					}
					className="w-[60%] h-[350px]  rounded-l-md"
					alt="" width={300} height={300}
				/>
				<div className=" pl-3 text-left w-[40%] flex-1">
					<h4 className="text-xl text-white font-semibold">{name}</h4>
					<h4 className="text-sm mt-2 font-medium text-gray-300 ml-4">
						-{position}
					</h4>
					<div className="flex mt-4  justify-between items-start text-white mr-2">
						<div className="w-10 h-10 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover: border-[#00FAA8] border-2 flex justify-center items-center  bg-[#00FAA8]">
							<FaLinkedinIn className="hover:text-white" />
						</div>
						<div className="w-10 h-10 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover: border-[#00FAA8] border-2 flex justify-center items-center  bg-[#00FAA8] ">
							<FaSquareFacebook className="hover:text-white" />
						</div>
						<div className="w-10 h-10 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover: border-[#00FAA8] border-2 flex justify-center items-center  bg-[#00FAA8]">
							<FaGithub className="hover:text-white" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

EmployeeCard.propTypes = {
	employee: PropTypes.shape({
		name: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
		position: PropTypes.string.isRequired,
	}).isRequired,
};

const TeamMembers = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		speed: 4000,
		autoplaySpeed: 2000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	};

	return (
		<div className="mx-20 py-10">
			<h3 className="font-semibold text-center text-xl text-gray-300 mb-4">
				TEAM MEMBERS
			</h3>
			<h1 className="sm:text-3xl text-center text-xl font-bold  mb-5 pb-4">
				Meet With Our Leaders
			</h1>
			<Slider {...settings}>
				{employees.map((employee, index) => {
					return <EmployeeCard key={index} employee={employee} />;
				})}
			</Slider>
		</div>
	);
};

export default TeamMembers;
