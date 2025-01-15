/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/HomePage/Home.jsx";
import NotFound from "../../pages/NotFoundPage/NoteFound.jsx";
import Contact from "../../pages/ContactPage/Contact/Contact.jsx";
import About from "../../pages/AboutPage/About/About.jsx";
import FaqPage from "../../pages/FaqPage/FaqPage.jsx";
import ServicePage from "../../pages/Services/ServicePage.jsx";
import TeamPage from "../../pages/Team/TeamPage.jsx";
import ServiceDetails from "../../pages/ProjectDetails/ProjectDetails.jsx";
import Projects from "../../pages/ProjectsPage/Projects/Projects.jsx";
import MainLayout from "../../Layout/MainLayout.jsx";
import ProjectLayout from "../../Layout/ProjectLayout.jsx";
import TermsAndConditions from "../../pages/TermsAndCondition/TermsAndConditions.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
      {
        path: "/services",
        element: <ServicePage />,
      },
      {
        path: "/service-details",
        element: <ServiceDetails />,
      },
      {
        path: "/terms-condition",
        element: <TermsAndConditions />,
      },
      {
        path: "/team",
        element: <TeamPage />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
