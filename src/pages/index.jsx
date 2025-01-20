import MainLayout from "../Layout/MainLayout";
import HomePage from "./HomePage/index";

const HomePage2 = () => {
	return (
	
   
			<HomePage/>
	
	);
};

HomePage2.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default HomePage2;
