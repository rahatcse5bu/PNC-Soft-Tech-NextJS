/* eslint-disable no-unused-vars */
import { Colors } from "../../constant/colors";
import Tittle from "./Title";
import NavBar from "./Navbar";
const Header = () => {
  console.log(Colors.primary);
  const elementStyle = {
    backgroundColor: Colors.secondary,
    color: Colors.textColor,
  };

  return (
    <>
      <Tittle />
      <NavBar />
    </>
  );
};

export default Header;
