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
        "service_mjq9x4r",
        "template_dxbx5ul",
        {
          from_name: form.name,
          to_name: "Hamna",
          from_email: form.email,
          to_email: "hamnashahid2003@gmail.com",
          message: form.message,
        },
        "DlMo8eDLY5KGUcEtJ"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="relative text-white min-h-screen">
      <div className="absolute inset-0 -z-10">
        <ParticleBackground />
      </div>

      <Navbar onNavigate={navigate} />

      <div className="flex flex-col mt-32 mb-8 mx-auto items-center">
        <h1 className="relative text-6xl md:text-7xl font-bold tracking-wide text-center ">
          Contact
          <span className="absolute -z-10 left-[160px] transform -translate-x-1/2 bottom-[-10px] block w-50 h-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto mt-16 px-4 gap-16">
        <div className="flex-1">
          <h3 className="text-white font-medium mb-4 text-[20px]">
            Get in touch
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>

        <div className="flex-1 xl:flex-[0.75] lg:h-auto md:h-[550px] h-[350px]">
          <div className="w-full h-full rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220148.1602330293!2d74.16340820229492!3d31.48333306266098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1705069731554!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "16px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
