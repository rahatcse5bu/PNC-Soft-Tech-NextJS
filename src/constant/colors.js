/* eslint-disable no-unused-vars */
// import img from "../../public/profile/pnc.jpg"; 
import img from "../../public/profile/pnc.jpg"; 
// import sabuj from "../assets/profile/img/sabuj.jpg";
// import anis from "../assets/profile/img/anis.jpg";
// import rahat from "../assets/profile/img/rahat.JPG";
// import subal from "../assets/profile/img/subal.jpg";
// import sujan from "../assets/profile/img/sujan.jpg";
// import tarikul from "../assets/profile/img/tarikul.jpg";
import sabuj from "../../public/profile/img/sabuj.jpg";
import anis from "../../public/profile/img/anis.jpg";
import rahat from "../../public/profile/img/rahat.JPG";
import subal from "../../public/profile/img/subal.jpg";
import sujan from "../../public/profile/img/sujan.jpg";
import tarikul from "../../public/profile/img/tarikul.jpg";

export const Colors = {
	primary: "#041436",
	secondary: "#00FAA8",
	textColor: "#ffff",
	secondaryBgColor: '#f4f7fb',
	secondaryTextColor: '#041436',
	primaryTextColor: '#fff',
	primaryBgColor: '#071952',
	excitetedColor: '#00FAA8'
};

const questions = [
	{
		title: "Which types of works does Induzin manufacture? ",
		details:
			"There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of industry.",
	},
	{
		title: "Which types of works does Induzin manufacture? ",
		details:
			"There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of industry.",
	},
	{
		title: "Which types of works does Induzin manufacture? ",
		details:
			"There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of industry.",
	},
	{
		title: "Which types of works does Induzin manufacture? ",
		details:
			"There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of industry.",
	},
	{
		title: "Which types of works does Induzin manufacture?",
		details:
			"There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of industry.",
	},
];

const questionType = [
	{
		title: "Generals",
	},
	{
		title: "Payments",
	},
	{
		title: "Industry",
	},
	{
		title: "Factory",
	},
	{
		title: "Construction",
	},
	{
		title: "Pricing",
	},
	{
		title: "Materials",
	},
];

const serviceDetails = [
	{
		image: img,
		title: "Mobile App Development",
		details:
			"Create stunning cross-platform mobile applications for iOS and Android using Flutter and React Native. Our apps offer native-like performance with beautiful UIs.",
	},
	{
		image: img,
		title: "Web Development",
		details:
			"Build modern, responsive websites and web applications using React.js, Next.js, and other cutting-edge frameworks. From landing pages to complex web apps.",
	},
	{
		image: img,
		title: "PHP Development",
		details:
			"Powerful backend solutions using PHP and Laravel. We create secure, scalable web applications with efficient database management and API integrations.",
	},
	{
		image: img,
		title: "API Integration",
		details:
			"Seamless API integration services connecting your applications with third-party services and platforms. REST API design, implementation, and optimization.",
	},
	{
		image: img,
		title: "MERN Stack Development",
		details:
			"Full-stack web development using MongoDB, Express.js, React.js, and Node.js. Create dynamic, data-driven applications with modern JavaScript technologies.",
	},
	{
		image: img,
		title: "UI/UX Design",
		details:
			"User-centered design that delights your customers. We create intuitive, accessible, and visually appealing interfaces that enhance the user experience.",
	},
	{
		image: img,
		title: "E-commerce Solutions",
		details:
			"Custom e-commerce platforms with secure payment gateways, inventory management, and user-friendly shopping experiences that drive conversions and sales.",
	},
];

const teamDetails = [
	{
		src: rahat,
		name: "Md Rahat",
		designation: "Web and App Developer & Project Manager",
	},
	{
		src: sabuj,
		name: "Sabuj Das",
		designation: "Frontend Developer",
	},
	{
		src: sujan,
		name: "Sujan Mridha",
		designation: "MERN Stack Developer",
	},
	{
		src: tarikul,
		name: "Md Tarikul Islam",
		designation: "MERN Stack Developer",
	},
	{
		src: anis,
		name: "Md Anis Molla",
		designation: "MERN Stack Developer",
	},
	{
		src: subal,
		name: "Subal Karmakar",
		designation: "Flutter Developer",
	},
];

const qualites =[
	{
		title: 'Knowledge & Experience',
		details: 'Porem Ipsum is simply dummy text of the printing and typesetting industry. Rosh has been the industry standard.'
	},
	{
		title: 'Customer Focused',
		details: 'Porem Ipsum is simply dummy text of the printing and typesetting industry. Rosh has been the industry standard.'
	},
	{
		title: 'Build Guarantee',
		details: 'Porem Ipsum is simply dummy text of the printing and typesetting industry. Rosh has been the industry standard.'
	},
	{
		title: 'Quality sub-trades',
		details: 'Porem Ipsum is simply dummy text of the printing and typesetting industry. Rosh has been the industry standard.'
	},
	{
		title: 'Obligation Free',
		details: 'Porem Ipsum is simply dummy text of the printing and typesetting industry. Rosh has been the industry standard.'
	},
	{
		title: 'Obligation Free',
		details: 'Porem Ipsum is simply dummy text of the printing and typesetting industry. Rosh has been the industry standard.'
	},
]

export { questions, serviceDetails, teamDetails, questionType , qualites };
