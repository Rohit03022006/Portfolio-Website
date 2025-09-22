import React, { useState, useEffect } from "react";
import { FaGithub, FaCode, FaCloud, FaDatabase, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills_Technologies = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills");
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

  const technologies = [
    {
      name: "AWS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      category: "devops",
    },
    {
      name: "Bash",
      icon: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
      category: "devops",
    },
    {
      name: "Bootstrap",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
      category: "frontend",
    },
    {
      name: "C",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      category: "backend",
    },
    {
      name: "Chart.js",
      icon: "https://www.chartjs.org/media/logo-title.svg",
      category: "tools",
    },
    {
      name: "C++",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      category: "backend",
    },
    {
      name: "CSS3",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      category: "frontend",
    },
    {
      name: "Docker",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      category: "devops",
    },
    {
      name: "Express",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      category: "backend",
    },
    {
      name: "Figma",
      icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      category: "tools",
    },
    {
      name: "Git",
      icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      category: "devops",
    },
    {
      name: "GraphQL",
      icon: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      category: "backend",
    },
    {
      name: "HTML5",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      category: "frontend",
    },
    {
      name: "JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      category: "frontend",
    },
    {
      name: "Jenkins",
      icon: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
      category: "devops",
    },
    {
      name: "Jest",
      icon: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
      category: "tools",
    },
    {
      name: "Kubernetes",
      icon: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
      category: "devops",
    },
    {
      name: "Linux",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      category: "devops",
    },
    {
      name: "MongoDB",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      category: "database",
    },
    {
      name: "MySQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      category: "database",
    },
    {
      name: "Next.js",
      icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
      category: "frontend",
    },
    {
      name: "Node.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      category: "backend",
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      category: "tools",
    },
    {
      name: "React",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      category: "frontend",
    },
    {
      name: "React Native",
      icon: "https://reactnative.dev/img/header_logo.svg",
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      category: "frontend",
    },
    {
      name: "TypeScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      category: "frontend",
    },
    {
      name: "Vue.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
      category: "frontend",
    },
    {
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      category: "backend",
    },
    {
      name: "MLflow",
      icon: "https://raw.githubusercontent.com/mlflow/mlflow/refs/heads/master/assets/logo.svg",
      category: "tools",
    },
  ];

  const duplicatedTechnologies = [...technologies, ...technologies];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className="skills-technologies py-10 bg-gradient-to-b from-cream to-cream-light relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#F5E6CC]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-1 text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Technologies and tools I use to bring ideas to life
        </motion.p>

        <motion.div
          className="w-full my-12 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex animate-logoLoop w-max">
            {duplicatedTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                className="mx-6 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 object-contain filter transition-all duration-300 ease-in-out"
                  title={tech.name}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Frontend */}
          <motion.div
            className="bg-cream p-6 rounded-xl shadow-lg border border-[#F5E6CC] hover:shadow-xl transition-shadow"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-4 text-red-600 flex items-center">
              <FaCode className="mr-2 text-red-500" /> Frontend
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {technologies
                .filter((tech) => tech.category === "frontend")
                .map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-3 rounded-lg shadow-sm flex items-center transition-all duration-300 ease-in-out hover:bg-red-50 hover:-translate-y-1 hover:shadow-md"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-6 h-6 mr-2"
                    />
                    <span className="text-sm text-black">{tech.name}</span>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            className="bg-cream p-6 rounded-xl shadow-lg border border-[#F5E6CC] hover:shadow-xl transition-shadow"
            variants={itemVariants}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-red-600 flex items-center">
              <FaCloud className="mr-2 text-red-500" /> Backend
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {technologies
                .filter((tech) => tech.category === "backend")
                .map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-3 rounded-lg shadow-sm flex items-center transition-all duration-300 ease-in-out hover:bg-red-50 hover:-translate-y-1 hover:shadow-md"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-6 h-6 mr-2"
                    />
                    <span className="text-sm text-black">{tech.name}</span>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* DevOps & Cloud */}
          <motion.div
            className="bg-cream p-6 rounded-xl shadow-lg border border-[#F5E6CC] hover:shadow-xl transition-shadow"
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-red-600 flex items-center">
              <FaTools className="mr-2 text-red-500" /> DevOps & Cloud
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {technologies
                .filter((tech) => tech.category === "devops")
                .map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-3 rounded-lg shadow-sm flex items-center transition-all duration-300 ease-in-out hover:bg-red-50 hover:-translate-y-1 hover:shadow-md"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-6 h-6 mr-2"
                    />
                    <span className="text-sm text-black">{tech.name}</span>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Databases & Tools */}
          <motion.div
            className="bg-cream p-6 rounded-xl shadow-lg border border-[#F5E6CC] hover:shadow-xl transition-shadow"
            variants={itemVariants}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-red-600 flex items-center">
              <FaDatabase className="mr-2 text-red-500" /> Databases & Tools
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {technologies
                .filter(
                  (tech) =>
                    tech.category === "database" || tech.category === "tools"
                )
                .map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-3 rounded-lg shadow-sm flex items-center transition-all duration-300 ease-in-out hover:bg-red-50 hover:-translate-y-1 hover:shadow-md"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-6 h-6 mr-2"
                    />
                    <span className="text-sm text-black">{tech.name}</span>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes logoLoop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-logoLoop {
          animation: logoLoop 30s linear infinite;
        }
        .animate-logoLoop:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Skills_Technologies;
