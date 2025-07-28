import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ParticleBackground from "./Stars2D";
import Navbar from "./Navbar";
import { useNavigation } from "./NavigationContext";

const Contact = () => {
  const { navigate } = useNavigation();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Hamna Mubarak",
          from_email: form.email,
          to_email: "hamnamubarak.contact@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you soon.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="relative text-white min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <ParticleBackground />
      <Navbar onNavigate={navigate} />

      <div className="px-4 sm:px-8 w-full flex justify-center">
        <div className="m-8 z-40 w-full max-w-3xl p-10 bg-gray-800 rounded-xl shadow-xl">
          <div className="flex flex-col mt-8 mb-32 mx-auto items-center">
            <h1 className="relative text-6xl md:text-7xl font-bold tracking-wide text-center">
              Contact
              <span className="absolute -z-10 left-[190px] transform -translate-x-1/2 bottom-[-5px] block w-60 h-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></span>
            </h1>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col">
                <span className="text-gray-300 font-medium mb-2">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="bg-gray-900 py-3 px-5 placeholder-gray-400 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-gray-300 font-medium mb-2">
                  Your Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="bg-gray-900 py-3 px-5 placeholder-gray-400 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                />
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-gray-300 font-medium mb-2">
                Your Message
              </span>
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message..."
                className="bg-gray-900 py-3 px-5 placeholder-gray-400 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
              />
            </label>

            <button
              type="submit"
              className="m-auto w-50 bg-gradient-to-r from-blue-500 to-purple-500 py-3 px-6 rounded-lg text-white font-bold shadow-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
