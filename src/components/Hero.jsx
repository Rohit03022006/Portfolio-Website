import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaCode,
  FaServer,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  const [scrollIndicator, setScrollIndicator] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (for SSR)
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      // Initial check
      checkMobile();
      
      // Add event listener for resize
      window.addEventListener("resize", checkMobile);
      
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrollIndicator(false);
        } else {
          setScrollIndicator(true);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("resize", checkMobile);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const blobVariants = {
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden
  [background-image:linear-gradient(to_bottom_right,#FFFBF0,#F5E6CC),radial-gradient(#e5e7eb_1px,transparent_1px)]
  [background-size:auto,16px_16px]
  [background-position:center,center]"
    >
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FECACA] rounded-full opacity-30"
        variants={blobVariants}
        animate="animate"
      ></motion.div>
      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#FCA5A5] rounded-full opacity-30"
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 2 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#FEE2E2] rounded-full opacity-30"
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 4 }}
      ></motion.div>

      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center relative z-10">
        <motion.div
          className="md:w-1/2 mb-12 md:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="mb-2 text-[#DC2626] font-mono flex items-center"
            variants={itemVariants}
          >
            Hello, my name is
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-black mb-4"
            variants={itemVariants}
          >
            Rohit{" "}
            <motion.span
              className="text-[#DC2626] inline-block"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            ></motion.span>
          </motion.h1>

          <motion.h3
            className="text-2xl md:text-3xl text-[#333333] mb-6 h-12 flex items-center"
            variants={itemVariants}
          >
            <span className="mr-2">I'm a</span>
            <Typewriter
              words={[
                "Full Stack Developer",
                "DevOps Engineer",
                "Problem Solver",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h3>

          <motion.p
            className="text-lg text-[#666666] mb-8 max-w-md"
            variants={itemVariants}
          >
            A passionate Full Stack Developer (MERN) & DevOps Engineer from
            India, crafting digital solutions that make an impact.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="bg-[#DC2626] text-white px-6 py-3 rounded-lg hover:bg-[#B91C1C] shadow-lg hover:shadow-xl flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
              >
                <FaEnvelope />
              </motion.span>
              <span>Contact Me</span>
            </motion.a>

            <motion.a
              href="#projects"
              className="border border-[#DC2626] text-[#DC2626] px-6 py-3 rounded-lg hover:bg-[#FEF2F2] flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode />
              <span>View Projects</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="flex items-center gap-6"
            variants={itemVariants}
          >
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/Rohit03022006"
                className="text-[#000000] hover:text-black transition-colors flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md"
                aria-label="GitHub"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rohit-kumar-783127334?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3By1kjWphlRfWOP8gMoEFPOg%3D%3D"
                className="text-[#0077B5] hover:text-[#0069a1] transition-colors flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com/_rohit_xten"
                className="text-[#E1306C] hover:text-[#e22d69] transition-colors flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md"
                aria-label="Instagram"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram className="w-5 h-5" />
              </motion.a>
            </div>

            <div className="h-6 w-px bg-[#F5E6CC]"></div>

            <motion.div
              className="flex items-center text-sm text-[#666666]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <span>Available for freelance work</span>
              <motion.span
                className="ml-2 w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {!isMobile && (
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative">
              <motion.div
                className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-[#FECACA] to-[#FCA5A5] rounded-full overflow-hidden shadow-2xl border-4 border-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                  alt="Programmer GIF"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2"
                variants={floatVariants}
                animate="animate"
              >
                <FaCode className="text-[#DC2626]" />
                <div className="text-xs font-bold text-[#DC2626]">MERN Stack</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2"
                variants={floatVariants}
                animate="animate"
                transition={{ delay: 1 }}
              >
                <FaServer className="text-[#DC2626]" />
                <div className="text-xs font-bold text-[#DC2626]">DevOps</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      {scrollIndicator && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-[#666666] rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-[#666666] rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;