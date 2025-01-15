import Banner from "../../../Shared/Banner/Banner";
import Map from "../../../Shared/Map/Map";
import { ScrollToTop } from "../../../constant/ScrollToTop";
import Form from "../ContactForm/Form/Form";

const Contact = () => {
	return (
		<div>
			<ScrollToTop />
			<Banner title="Contact Us" linkText="Contact" />
			<Form></Form>
			<Map longitude={90.35419886406886} latitude={22.70365780639195} />
		</div>
	);
};

export default Contact;
