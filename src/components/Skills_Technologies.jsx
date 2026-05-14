import React, { useState, useEffect } from "react";
import { FaTools, FaCode, FaDatabase } from "react-icons/fa";
import { GiServerRack } from "react-icons/gi";
import { motion } from "framer-motion";
import { ImInfinite } from "react-icons/im";
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
      name: "java",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg",
      category: "backend",
    },
    {
      name: "Bash",
      icon: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
      category: "devops",
    },
   
    {
      name: "C",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
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
      name: "Git",
      icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      category: "devops",
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
      name: "Vite",
      icon: "https://vitejs.dev/logo.svg",
      category: "frontend",
    },
    {
      name: "Kubernetes",
      icon: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
      category: "devops",
    },
    {
      name: "GitHub",
      icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      category: "tools",
    },
    {
      name: "Linux",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      category: "devops",
    },
    {
      name: "Vim",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vim/vim-original.svg",
      category: "tools",
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
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      category: "backend",
    },
   
    {
      name: "Terraform",
      icon: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg",
      category: "devops",
    },
    {
      name: "Helm",
      icon: "https://www.vectorlogo.zone/logos/helmsh/helmsh-icon.svg",
      category: "devops",
    },
    {
      name: "OWASP",
      icon: "https://owasp.org/assets/images/logo.png",
      category: "tools",
    },
    {
      name: "Trivy",
      icon: "https://raw.githubusercontent.com/aquasecurity/trivy/main/docs/imgs/logo.png",
      category: "tools",
    },
    {
      name: "SonarQube",
      icon: "https://cdn.worldvectorlogo.com/logos/sonarqube-1.svg",
      category: "tools",
    },
    {
      name: "Redis",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
      category: "database",
    },
    {
      name: "PostgreSQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      category: "database",
    },
    {
      name: "Ansible",
      icon: "https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg",
      category: "devops",
    },
    {
      name: "Prometheus",
      icon: "https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg",
      category: "devops",
    },
    {
      name: "Grafana",
      icon: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg",
      category: "devops",
    },
    {
      name: "GitHub Actions",
      icon: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
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

  return (
    <section
      id="skills"
      className="skills-technologies py-20 relative overflow-hidden bg-[#F5E6CC]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#DC2626_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-black">
            Skills & <span className="text-[#DC2626]">Technologies</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and frameworks I use to
            build modern, scalable applications
          </p>
        </motion.div>

        {/* Infinite Scroll Logos */}
        <motion.div
          className="w-full my-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="flex animate-logoLoop w-max">
              {duplicatedTechnologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="mx-8 flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.15, y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="w-20 h-20 bg-[#fdfdfd75] rounded-2xl shadow-lg flex items-center justify-center p-4 mb-2 border border-[#F5E6CC] hover:shadow-xl transition-all duration-300">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                      title={tech.name}
                    />
                  </div>
                  <span className="text-sm font-medium text-[#666666] mt-2">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Frontend */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-[#F5E6CC] hover:shadow-2xl transition-all duration-300"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <FaCode className="text-2xl text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">Frontend</h3>
                <p className="text-sm text-[#666666]">UI/UX Development</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {technologies
                .filter((tech) => tech.category === "frontend")
                .map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#F5E6CC] p-3 rounded-xl flex items-center gap-2 transition-all duration-200 hover:bg-amber-50 hover:translate-x-1 min-w-0"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="text-sm font-medium text-black truncate">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-[#F5E6CC] hover:shadow-2xl transition-all duration-300"
            variants={itemVariants}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <GiServerRack className="text-2xl text-green-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">Backend</h3>
                <p className="text-sm text-[#666666]">Server & APIs</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {technologies
                .filter((tech) => tech.category === "backend")
                .map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#F5E6CC] p-3 rounded-xl flex items-center gap-2 transition-all duration-200 hover:bg-amber-50 hover:translate-x-1 min-w-0"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="text-sm font-medium text-black truncate">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
            </div>
            <div className="flex items-center mb-6 mt-4 border-t-[1px] border-[#F5E6CC] pt-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                <FaDatabase className="text-2xl text-amber-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">DB</h3>
                <p className="text-sm text-[#666666]">Database</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {technologies
                .filter((tech) => tech.category === "database")
                .map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#F5E6CC] p-3 rounded-xl flex items-center gap-2 transition-all duration-200 hover:bg-amber-50 hover:translate-x-1 min-w-0"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="text-sm font-medium text-black truncate">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* DevOps & Cloud */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-[#F5E6CC] hover:shadow-2xl transition-all duration-300"
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                <ImInfinite className="text-2xl text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">DevOps</h3>
                <p className="text-sm text-[#666666]">Cloud & Infrastructure</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {technologies
                .filter((tech) => tech.category === "devops")
                .map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#F5E6CC] p-3 rounded-xl flex items-center gap-2 transition-all duration-200 hover:bg-amber-50 hover:translate-x-1 min-w-0"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="text-sm font-medium text-black truncate">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-[#F5E6CC] hover:shadow-2xl transition-all duration-300"
            variants={itemVariants}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                <FaTools className="text-2xl text-amber-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">Tools</h3>
                <p className="text-sm text-[#666666]">Development Tools</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {technologies
                .filter((tech) => tech.category === "tools")
                .map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#F5E6CC] p-3 rounded-xl flex items-center gap-2 transition-all duration-200 hover:bg-amber-50 hover:translate-x-1 min-w-0"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="text-sm font-medium text-black truncate">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes logoLoop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-logoLoop {
          animation: logoLoop 40s linear infinite;
        }
        .animate-logoLoop:hover {
          animation-play-state: paused;
        }
        
      `}</style>
    </section>
  );
};

export default Skills_Technologies;
