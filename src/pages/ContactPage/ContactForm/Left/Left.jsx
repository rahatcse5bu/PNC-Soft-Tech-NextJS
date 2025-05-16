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
  };  return (
    <div className="lg:w-[60%] w-full p-8">
      <h2 className="text-2xl font-bold text-[#041436] mb-6">Send us a Message</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FAA8] focus:border-transparent transition duration-200"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              placeholder="Your phone number"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FAA8] focus:border-transparent transition duration-200"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              value={email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FAA8] focus:border-transparent transition duration-200"
              required
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={country}
              placeholder="Your country"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FAA8] focus:border-transparent transition duration-200"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            placeholder="How can we help you?"
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FAA8] focus:border-transparent transition duration-200 resize-none"
            required
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              className="h-4 w-4 text-[#00FAA8] focus:ring-[#00FAA8] border-gray-300 rounded"
            />
            <label htmlFor="subscribe" className="ml-2 text-sm text-gray-600">
              Subscribe to our newsletter
            </label>
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#041436] hover:bg-[#041436]/90 focus:outline-none transition duration-300 shadow-lg w-full sm:w-auto"
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span>Send Message</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Left;
