import "../index.css";
import "../assets/styles/nav-bar.css";
import "../pages/AboutPage/PointSection/pointSection.css"; // Add your global CSS here
import MainLayout from "../Layout/MainLayout";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
