/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Colors } from "../../../../constant/colors";
import toast from "react-hot-toast";

const Left = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    country: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const { fullName, phoneNumber, email, message, country } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form submission logic
    console.log(formData);

    try {
      setLoading(true);
      const res = await fetch(
        "https://pnc-soft-tech-website-backend.vercel.app/api/v1/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();

      if (data?.success) {
        toast.success("Sent message successfully");
      }
      setLoading(false);
      console.log("result~", data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
    // Reset form fields
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      country: "",
      message: "",
    });
  };

  const buttonStyle = {
    backgroundColor: Colors.secondary,
  };
  return (
    <div className="sm:w-[60%] w-full sm:px-0 px-5 ">
      <h1 className="mx-5 mb-5 text-2xl font-semibold text-left ">
        Request a Quote
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-full sm:flex-row">
          <div className="w-full mx-0 mb-4 sm:mx-5 sm:w-1/2">
            <label htmlFor="fullName" className="block mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="w-full mx-0 mb-4 sm:mx-5 sm:w-1/2">
            <label htmlFor="phoneNumber" className="block mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="flex flex-col w-full sm:flex-row">
          <div className="w-full mx-0 mb-4 sm:mx-5 sm:w-1/2">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="w-full mx-0 mb-4 sm:mx-5 sm:w-1/2">
            <label htmlFor="country" className="block mb-2">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={country}
              placeholder="Subject"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="mx-0 mb-4 sm:mx-5">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            placeholder="Your Message"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div className="flex justify-between mx-5">
          <div>
            <input
              type="checkbox"
              id="checkbox1"
              name="checkbox1"
              value="option1"
            />
            <label htmlFor="checkbox1"> Also subscribe us</label>
          </div>
          <div>
            <button
              type="submit"
              style={buttonStyle}
              className="px-10 py-2 mx-0 text-white bg-blue-500 sm:mx-5 rounded-3xl hover:bg-blue-600"
            >
              {loading ? "sending...." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Left;
