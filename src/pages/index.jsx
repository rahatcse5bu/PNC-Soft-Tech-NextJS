import MainLayout from "../Layout/MainLayout";

const HomePage2 = () => {
	return (
		<div>
             {/* <Toaster position="bottom-right" /> */}
			<h1>Welcome to the Home Page</h1>
			<p>This is the main content.</p>
		</div>
	);
};

HomePage2.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default HomePage2;
