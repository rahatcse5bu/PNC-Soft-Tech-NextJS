import Left from "../Left/Left";
import Right from "../Right/Right";

const Form = () => {
	return (
		<div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
			<div className="text-center mb-16">
				<span className="inline-block px-4 py-2 bg-[#00FAA8]/10 text-[#00FAA8] font-medium rounded-full text-sm mb-4">GET IN TOUCH</span>
				<h2 className="text-[#041436] text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
				<p className="text-gray-600 max-w-3xl mx-auto">
					Have a question or interested in our services? We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
				</p>
			</div>
			
			<div className="flex flex-col lg:flex-row gap-10 bg-white rounded-xl shadow-lg overflow-hidden">
				<Left />
				<Right />
			</div>
		</div>
	);
};

export default Form;
