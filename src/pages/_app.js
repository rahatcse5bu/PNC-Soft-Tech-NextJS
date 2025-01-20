import "../index.css";
import "../assets/styles/nav-bar.css";
import "../pages/AboutPage/PointSection/pointSection.css"; // Add your global CSS here
import MainLayout from "../Layout/MainLayout";
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
