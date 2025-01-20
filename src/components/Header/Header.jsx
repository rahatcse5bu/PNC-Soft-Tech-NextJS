"use client"
/* eslint-disable no-unused-vars */
import { Colors } from "../../constant/colors";
import NavBarAlt from "./NavbarAlt";
import Title from "./Title";
const Header = () => {
  console.log(Colors.primary);
  const elementStyle = {
    backgroundColor: Colors.secondary,
    color: Colors.textColor,
  };

  return (
    <>
      <Title />
      <NavBarAlt />
    </>
  );
};

export default Header;
