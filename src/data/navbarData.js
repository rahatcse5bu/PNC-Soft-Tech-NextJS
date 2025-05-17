const navbarData = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Services",
    path: "#",
    subMenu: [
      {
        id: 31,
        title: "Web Development",
        path: "/Services/WebDevelopment/page",
      },
      {
        id: 32,
        title: "Mobile App Development",
        path: "/Services/MobileAppDevelopment/page",
      },
      {
        id: 33,
        title: "UI/UX Design",
        path: "/Services/UIUXDesign/page",
      },
      {
        id: 34,
        title: "Cloud Services",
        path: "/Services/CloudServices/page",
      },
      {
        id: 35,
        title: "Digital Marketing",
        path: "/Services/DigitalMarketing/page",
      },
    ],
  },
  {
    id: 4,
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
  },
];

export default navbarData;
