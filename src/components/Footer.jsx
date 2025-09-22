import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#333333] text-white pt-10 pb-3">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-5">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-2 text-white">Rohit Kumar</h3>
            <p className="text-[#CCCCCC] mb-2 max-w-md">
              Full Stack Developer & DevOps Engineer passionate about creating
              innovative solutions and optimizing development workflows.
            </p>
            <div className="flex space-x-2">
              <a
                href="https://github.com/Rohit03022006"
                className="text-[#CCCCCC] hover:text-white transition-colors transform hover:scale-110"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-kumar-783127334?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3By1kjWphlRfWOP8gMoEFPOg%3D%3D"
                className="text-[#CCCCCC] hover:text-[#0077B5] transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://instagram.com/_rohit_xten"
                className="text-[#CCCCCC] hover:text-[#E1306C] transition-colors transform hover:scale-110"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="mailto:kumarrohit67476@gmail.com"
                className="text-[#CCCCCC] hover:text-[#DC2626] transition-colors transform hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-1 text-white">
              Quick Links
            </h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="#about"
                  className="text-[#CCCCCC] hover:text-[#DC2626] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-[#CCCCCC] hover:text-[#DC2626] transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-[#CCCCCC] hover:text-[#DC2626] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#CCCCCC] hover:text-[#DC2626] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#F5E6CC] pt-1 text-center">
          <p className="text-[#CCCCCC]">
            © {currentYear} Rohit Kumar. All rights reserved.
          </p>
          <p className="mt-2 text-[#999999] text-sm">
            Made with <span className="text-[#DC2626]">❤️</span> by Rohit Kumar
          </p>
          <p className="mt-1 text-[#999999] text-xs">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;