import Link from "next/link";

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
			<h1 className="mb-8 text-6xl font-bold text-white">404</h1>
			<p className="mb-12 text-2xl text-white">Oops! Page not found.</p>
			<Link
				href="/"
				className="text-xl text-white underline hover:text-yellow-300"
			>
				Go back to home
			</Link>
		</div>
	);
};

export default NotFound;
