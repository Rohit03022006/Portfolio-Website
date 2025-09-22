import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaEnvelope,
  FaGraduationCap,
  FaAward,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#F5E6CC] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-[#666666] text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Passionate developer with skills in Full Stack Development and DevOps.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-lg border border-[#F5E6CC] hover:shadow-xl transition-shadow h-full">
              <h3 className="text-xl font-semibold mb-4 text-[#DC2626] flex items-center">
                <FaGraduationCap className="mr-3 text-[#DC2626]" /> Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-black">
                    Bachelor of Technology in Computer Science and Applied Mathematics
                  </h4>
                  <p className="text-[#666666]">Vivekananda Institute of Professional Studies - Technical Campus, India</p>
                  <p className="text-sm text-[#666666]">2024 - 2028</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ask Me About Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-lg border border-[#F5E6CC] hover:shadow-xl transition-shadow h-full">
              <h3 className="text-xl font-semibold mb-4 text-[#DC2626] flex items-center">
                <FaEnvelope className="mr-3 text-[#DC2626]" /> Ask Me About
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-[#FEE2E2] text-[#DC2626] p-1 rounded mr-3 mt-1 flex-shrink-0">
                    <FaLightbulb className="text-xs" />
                  </span>
                  <span className="text-[#333333]">MERN Stack Development</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FEE2E2] text-[#DC2626] p-1 rounded mr-3 mt-1 flex-shrink-0">
                    <FaLightbulb className="text-xs" />
                  </span>
                  <span className="text-[#333333]">DevOps Practices</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FEE2E2] text-[#DC2626] p-1 rounded mr-3 mt-1 flex-shrink-0">
                    <FaLightbulb className="text-xs" />
                  </span>
                  <span className="text-[#333333]">Backend Architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FEE2E2] text-[#DC2626] p-1 rounded mr-3 mt-1 flex-shrink-0">
                    <FaLightbulb className="text-xs" />
                  </span>
                  <span className="text-[#333333]">
                    API Design & Development
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Currently Learning Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-lg border border-[#F5E6CC] hover:shadow-xl transition-shadow h-full">
              <h3 className="text-xl font-semibold mb-4 text-[#DC2626] flex items-center">
                <FaCode className="mr-3 text-[#DC2626]" /> Currently Learning
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-[#FEE2E2] text-[#DC2626] p-1 rounded mr-3 mt-1 flex-shrink-0">
                    <FaRocket className="text-xs" />
                  </span>
                  <span className="text-[#333333]">
                    DevOps (Advanced Kubernetes, Terraform)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FEE2E2] text-[#DC2626] p-1 rounded mr-3 mt-1 flex-shrink-0">
                    <FaRocket className="text-xs" />
                  </span>
                  <span className="text-[#333333]">
                    Cloud Native Technologies
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FEE2E2] text-[#DC2626] p-1 rounded mr-3 mt-1 flex-shrink-0">
                    <FaRocket className="text-xs" />
                  </span>
                  <span className="text-[#333333]">System Design</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FEE2E2] text-[#DC2626] p-1 rounded mr-3 mt-1 flex-shrink-0">
                    <FaRocket className="text-xs" />
                  </span>
                  <span className="text-[#333333]">Advance Backend</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-lg border border-[#F5E6CC] hover:shadow-xl transition-shadow h-full">
              <h3 className="text-xl font-semibold mb-4 text-[#DC2626] flex items-center">
                <FaAward className="mr-3 text-[#DC2626]" /> Certifications
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-[#FEE2E2] text-[#DC2626] p-1 rounded mr-3 mt-1 flex-shrink-0">
                    <FaAward className="text-xs" />
                  </span>
                  <span className="text-[#333333]">
                    AWS Certified Cloud Practitioner (on going)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FEE2E2] text-[#DC2626] p-1 rounded mr-3 mt-1 flex-shrink-0">
                    <FaAward className="text-xs" />
                  </span>
                  <span className="text-[#333333]">
                    Docker Certified Associate (on going)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FEE2E2] text-[#DC2626] p-1 rounded mr-3 mt-1 flex-shrink-0">
                    <FaAward className="text-xs" />
                  </span>
                  <a 
                    href="https://www.geeksforgeeks.org/certificate/3d909843f784c042ea25c26e785e2800?utm_source=socials&utm_medium=cc_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#333333] hover:text-[#DC2626] hover:underline transition-colors"
                  >
                    MongoDB Developer's Toolkit - GeeksforGeeks
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FEE2E2] text-[#DC2626] p-1 rounded mr-3 mt-1 flex-shrink-0">
                    <FaAward className="text-xs" />
                  </span>
                  <a 
                    href="https://www.freecodecamp.org/certification/rohit_xten/responsive-web-design" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#333333] hover:text-[#DC2626] hover:underline transition-colors"
                  >
                    Responsive Web Design - freecodecamp
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FEE2E2] text-[#DC2626] p-1 rounded mr-3 mt-1 flex-shrink-0">
                    <FaAward className="text-xs" />
                  </span>
                  <a 
                    href="https://www.freecodecamp.org/certification/rohit_xten/javascript-algorithms-and-data-structures-v8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#333333] hover:text-[#DC2626] hover:underline transition-colors"
                  >
                    JavaScript Algorithms and Data Structures - freecodecamp
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#FEE2E2] text-[#DC2626] p-1 rounded mr-3 mt-1 flex-shrink-0">
                    <FaAward className="text-xs" />
                  </span>
                  <span className="text-[#333333]">
                    DevOps (Complete) - GeeksforGeeks (on going)
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;