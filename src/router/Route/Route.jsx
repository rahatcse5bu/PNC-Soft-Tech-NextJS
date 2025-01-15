/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import index from "../../pages/HomePage/index.jsx";
import NotFound from "../../pages/NotFoundPage/NoteFound.jsx";
import Contact from "../../pages/ContactPage/Contact/index.jsx";
import About from "../../pages/AboutPage/About/index.jsx";
import FaqPage from "../../pages/FaqPage/index.jsx";
import ServicePage from "../../pages/Services/index.jsx";
import TeamPage from "../../pages/Team/index.jsx";
import ServiceDetails from "../../pages/ProjectDetails/index.jsx";
import Projects from "../../pages/ProjectsPage/Projects/index.jsx";
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
        element: <index></index>,
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
