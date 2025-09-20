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
const Hero = () => {
  const [scrollIndicator, setScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollIndicator(false);
      } else {
        setScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-100">
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-200 rounded-full opacity-30"
        variants={blobVariants}
        animate="animate"
      ></motion.div>
      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 rounded-full opacity-30"
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 2 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-200 rounded-full opacity-30"
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
            className="mb-2 text-indigo-500 font-mono flex items-center"
            variants={itemVariants}
          >
            Hello, my name is
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            Rohit{" "}
            <motion.span
              className="text-indigo-600 inline-block"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            ></motion.span>
          </motion.h1>

          <motion.h3
            className="text-2xl md:text-3xl text-gray-700 mb-6 h-12 flex items-center"
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
            className="text-lg text-gray-600 mb-8 max-w-md"
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
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 shadow-lg hover:shadow-xl flex items-center gap-2 group"
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
              className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 flex items-center gap-2 group"
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
                className="text-gray-600 hover:text-black transition-colors flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md"
                aria-label="GitHub"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rohit-kumar-783127334?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3By1kjWphlRfWOP8gMoEFPOg%3D%3D"
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com/_rohit_xten"
                className="text-gray-700 hover:text-pink-500 transition-colors flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md"
                aria-label="Instagram"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram className="w-5 h-5" />
              </motion.a>
            </div>

            <div className="h-6 w-px bg-gray-300"></div>

            <motion.div
              className="flex items-center text-sm text-gray-600"
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

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div className="relative">
            <motion.div
              className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full overflow-hidden shadow-2xl border-4 border-white"
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
              <FaCode className="text-indigo-600" />
              <div className="text-xs font-bold text-indigo-600">
                MERN Stack
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2"
              variants={floatVariants}
              animate="animate"
              transition={{ delay: 1 }}
            >
              <FaServer className="text-indigo-600" />
              <div className="text-xs font-bold text-indigo-600">DevOps</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {scrollIndicator && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
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
