/* eslint-disable react/prop-types */
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";

const Feedback = ({ feedback }) => {
	const { name, message, rating, image_url } = feedback;

	return (
		<div className="bg-white shadow-lg h-[250px] flex rounded-lg m-5">
			{image_url && <Image src={image_url} alt={name} className="w-[210px]" height={300} width={300} />}
			<div className="ml-4">
				<div className="flex items-center mb-4">
					<div>
						<h2 className="text-lg font-semibold">{name}</h2>
						<div className="flex items-center">
							<div className="flex">
								{[...Array(rating)].map((_, index) => (
									<svg
										key={index}
										className="w-5 h-5 fill-current text-yellow-500"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M10 0l2.764 6.468h7.005l-5.61 4.686 2.318 6.635-5.765-4.374-5.765 4.374 2.318-6.635L0 6.468h7.005L10 0z"
										/>
									</svg>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="mb-4">
					<p>{message}</p>
				</div>
			</div>
		</div>
	);
};

const Feedbacks = () => {
	const [feedbacksData, setFeedbacksData] = useState([]);

	useEffect(() => {
		const fetchFeedbacks = async () => {
			const response = await fetch("/feedbacks.json");
			const data = await response.json();
			setFeedbacksData(data);
		};
		fetchFeedbacks();
	});
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		speed: 5000,
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
			<h3 className="font-semibold text-center text-2xl text-gray-500 mb-4">
				Clients Feedback
			</h3>
			<p className="text-center mb-5">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
				itaque quae excepturi. <br /> Officia voluptate nostrum veniam quas eos
				porro earum?
			</p>
			<Slider {...settings}>
				{feedbacksData.map((feedback, index) => {
					return <Feedback key={index} feedback={feedback} />;
				})}
			</Slider>
		</div>
	);
};

export default Feedbacks;
