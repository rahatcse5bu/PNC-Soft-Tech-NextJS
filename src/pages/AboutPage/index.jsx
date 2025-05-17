import Banner from "../../Shared/Banner/Banner";
import ChooseSection from "../../components/About/ChooseSection/ChooseSection";
import PointSection from "../../components/About/PointSection/PointSection";
import ProjectSection from "../../components/About/ProjectSection/ProjectSection";
import WelcomeSection from "../../components/About/WelcomeSection/WelcomeSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamMembers from "../../components/About/TeamMembers/TeamMembers";
import Feedbacks from "../../components/About/Feedbacks/Feedbacks";
import { ScrollToTop } from "../../constant/ScrollToTop";
import MainLayout from "../../Layout/MainLayout";

const AboutPage = () => {
	return (
		<div>
			<ScrollToTop />
			<Banner title="About Us" linkText="About" />
			<WelcomeSection />
			<ChooseSection />
			<ProjectSection />
			<PointSection />
			<Feedbacks />
			<TeamMembers />
		</div>
	);
};

AboutPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default AboutPage;
