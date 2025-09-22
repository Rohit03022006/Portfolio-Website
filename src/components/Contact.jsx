import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async (ev) => {
    ev.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New message from ${formData.name} - Portfolio Contact Form`,
          }),
        }
      );

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setStatus("");
        }, 5000);
      } else {
        console.error("Formspree error:", await response.text());
        setStatus("ERROR");

        setTimeout(() => {
          setStatus("");
        }, 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("ERROR");
      setTimeout(() => {
        setStatus("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-10 relative overflow-hidden"
    >
       <div className="absolute inset-0 -z-10 h-full w-full bg-[#F5E6CC]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-black">
          Get In Touch
        </h2>

        <p className="text-lg text-[#666666] text-center max-w-2xl mx-auto mb-10">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg border border-[#F5E6CC]">
          {status === "SUCCESS" ? (
            <div className="text-center py-8">
              <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Message Sent Successfully!
              </h3>
              <p className="text-[#666666]">
                Thank you for reaching out. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={submitForm} noValidate>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-black mb-2 font-medium "
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626] transition-colors ${
                    errors.name ? "border-red-500" : "border-[#F5E6CC]"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-black mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626] transition-colors ${
                    errors.email ? "border-red-500" : "border-[#F5E6CC]"
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-black mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC2626] transition-colors ${
                    errors.message ? "border-red-500" : "border-[#F5E6CC]"
                  }`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#DC2626] text-white py-3 rounded-lg hover:bg-[#B91C1C] transition-all flex items-center justify-center ${
                    isSubmitting
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:shadow-lg"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" /> Send Message
                    </>
                  )}
                </button>

                {status === "ERROR" && (
                  <p className="text-red-500 mt-4 flex items-center">
                    <FaExclamationTriangle className="mr-2" /> Oops! There was
                    an error. Please try again.
                  </p>
                )}
              </div>
            </form>
          )}

          <div className="mt-8 pt-8 border-t border-[#F5E6CC] text-center">
            <p className="text-[#666666] mb-4">Or reach out directly through:</p>
            <div className="flex justify-center space-x-6 mb-4">
              <a
                href="https://www.linkedin.com/in/rohit-kumar-783127334?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3By1kjWphlRfWOP8gMoEFPOg%3D%3D"
                className="text-[#0077B5] hover:text-[#005582] text-2xl transition-colors hover:scale-110"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Rohit03022006"
                className="text-black hover:text-[#333333] text-2xl transition-colors hover:scale-110"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/_rohit_xten"
                className="text-[#E1306C] hover:text-[#C13584] text-2xl transition-colors hover:scale-110"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
            <p className="mt-4 text-[#666666]">
              Email:{" "}
              <a
                href="mailto:kumarrohit67476@gmail.com"
                className="text-[#DC2626] hover:underline font-medium"
              >
                kumarrohit67476@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;