import React, { useState, useEffect } from 'react';
import { FaGithub, FaTools, FaFlask, FaPython, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projects');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Flight Prediction",
      description: "JavaScript application for predicting flight patterns and analytics",
      image: "https://raw.githubusercontent.com/Rohit03022006/flight-prediction/main/Flight%20Price%20Prediction%20Web%20page.PNG",
      githubUrl: "https://github.com/Rohit03022006/flight-prediction",
      liveUrl: null,
      tags: ["JavaScript", "Data Analysis", "Machine Learning"],
      color: "blue"
    },
    {
      id: 2,
      title: "PESTEND",
      description: "JavaScript application with modern web development practices",
      image: null,
      githubUrl: "https://github.com/Rohit03022006/PESTEND",
      liveUrl: null,
      tags: ["JavaScript", "Web Development", "Full Stack"],
      color: "green"
    },
    {
      id: 3,
      title: "2-Tier Flask Application",
      description: "Flask MySQL two-tier web application with messaging functionality",
      image: null,
      githubUrl: "https://github.com/Rohit03022006/2-Tier-Application",
      liveUrl: null,
      tags: ["Flask", "MySQL", "Python"],
      color: "purple"
    },
    {
      id: 4,
      title: "MLFlow Basics",
      description: "Machine Learning workflow management with MLFlow",
      image: null,
      githubUrl: "https://github.com/Rohit03022006/basic-of-mlflow",
      liveUrl: null,
      tags: ["Python", "MLFlow", "Machine Learning"],
      color: "orange"
    },
    {
      id: 5,
      title: "Markdown Editor",
      description: "CSS-focused markdown editor with live preview functionality",
      image: "https://raw.githubusercontent.com/Rohit03022006/Markdown_Editor/main/Markdown_Editor_Phone.png",
      githubUrl: "https://github.com/Rohit03022006/Markdown_Editor",
      liveUrl: null,
      tags: ["CSS", "JavaScript", "Markdown"],
      color: "pink"
    },
    {
      id: 6,
      title: "Analog Clock with Date",
      description: "Beautiful analog clock with date display and sticky note functionality",
      image: "https://raw.githubusercontent.com/Rohit03022006/analog-clock-with-date/main/analog-clock-with-date.PNG",
      githubUrl: "https://github.com/Rohit03022006/analog-clock-with-date",
      liveUrl: null,
      tags: ["HTML", "CSS", "JavaScript"],
      color: "indigo"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-800', icon: 'text-blue-500' },
      green: { bg: 'bg-green-100', text: 'text-green-800', icon: 'text-green-500' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-800', icon: 'text-purple-500' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-800', icon: 'text-orange-500' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-800', icon: 'text-pink-500' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-800', icon: 'text-indigo-500' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const getProjectIcon = (projectId) => {
    switch (projectId) {
      case 2: return <FaTools size={48} />;
      case 3: return <FaFlask size={48} />;
      case 4: return <FaPython size={48} />;
      default: return <FaGithub size={48} />;
    }
  };

  return (
    <section id="projects" className="py-10 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full translate-y-32 -translate-x-32 opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A collection of my recent work showcasing my skills and creativity
        </motion.p>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            
            return (
              <motion.div 
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className={`h-48 ${colorClasses.bg} flex items-center justify-center overflow-hidden relative`}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={colorClasses.icon}>
                      {getProjectIcon(project.id)}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-4">
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                        aria-label="View code on GitHub"
                      >
                        <FaGithub size={20} />
                      </a>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                          aria-label="View live demo"
                        >
                          <FaExternalLinkAlt size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`${colorClasses.bg} ${colorClasses.text} text-xs px-3 py-1 rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-semibold hover:underline inline-flex items-center"
                  >
                    View Project <FaExternalLinkAlt size={14} className="ml-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="https://github.com/Rohit03022006" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 shadow-lg hover:shadow-xl"
          >
            <FaGithub className="mr-2" /> View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;