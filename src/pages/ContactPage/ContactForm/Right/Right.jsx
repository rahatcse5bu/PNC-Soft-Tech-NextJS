import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { Colors } from "../../../../constant/colors.js";
import { AiTwotoneMail } from "react-icons/ai";

const Right = () => {
  const faPhoneStyle = {
    // backgroundColor: "rgba(255, 94, 20,0.7)",
    backgroundColor: "#00FCA8",
    borderColor: Colors.secondary,
  };
  return (
    <div className="sm:w-[40%] sm:mt-0 mt-5 w-full sm:ml-10 ml-0 sm:px-0 px-5 ">
      <h1 className="mt-5 mb-6 text-2xl font-semibold text-left ">
        Contact Details
      </h1>
      <div className="flex items-start p-3 mb-5 bg-gray-200 rounded-sm">
        <div
          className="flex items-center justify-center w-12 h-12 mt-3 mr-4 border-4 rounded-full"
          style={faPhoneStyle}
        >
          <FaPhone className="text-white"></FaPhone>
        </div>

        <div>
          <h3 className="text-gray-400">Phone</h3>
          <p>+88 01793278360</p>
          <p>+88 01576751769</p>
        </div>
      </div>
      <div className="flex items-start p-3 mb-5 bg-gray-200 rounded-sm">
        <div
          className="flex items-center justify-center w-12 h-12 mt-3 mr-4 border-4 rounded-full"
          style={faPhoneStyle}
        >
          <AiTwotoneMail className="text-white"></AiTwotoneMail>
        </div>
        <div>
          <h3 className="text-gray-400">Email</h3>
          <p>pncsoft.tech@gmail.com</p>
          {/* <p>mail@example.com</p> */}
        </div>
      </div>
      <div className="flex items-start p-3 bg-gray-200 rounded-sm">
        <div
          className="flex items-center justify-center w-12 h-12 mt-3 mr-4 border-4 rounded-full"
          style={faPhoneStyle}
        >
          <FaLocationDot className="text-white"></FaLocationDot>
        </div>
        <div>
          <h3 className="text-gray-400">Address:</h3>
          <p>Barishal City,</p>
          <p>Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default Right;
