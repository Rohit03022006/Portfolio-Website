import React, { useState, useEffect } from 'react';
import { FaCode, FaEnvelope, FaGraduationCap, FaAward, FaUser, FaLightbulb, FaRocket } from 'react-icons/fa';


const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden">
  
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full translate-y-32 -translate-x-32 opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Passionate developer with skills in Full Stack Development and DevOps.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg h-full border border-indigo-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center">
                <FaCode className="mr-3 text-indigo-500" /> Currently Learning
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-600 p-1 rounded mr-3 mt-1">
                    <FaRocket className="text-xs" />
                  </span>
                  <span className="text-gray-700">DevOps (Advanced Kubernetes, Terraform)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-600 p-1 rounded mr-3 mt-1">
                    <FaRocket className="text-xs" />
                  </span>
                  <span className="text-gray-700">Cloud Native Technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-600 p-1 rounded mr-3 mt-1">
                    <FaRocket className="text-xs" />
                  </span>
                  <span className="text-gray-700">System Design</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-600 p-1 rounded mr-3 mt-1">
                    <FaRocket className="text-xs" />
                  </span>
                  <span className="text-gray-700">Advance Backend</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg h-full border border-indigo-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center">
                <FaEnvelope className="mr-3 text-indigo-500" /> Ask Me About
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-600 p-1 rounded mr-3 mt-1">
                    <FaLightbulb className="text-xs" />
                  </span>
                  <span className="text-gray-700">MERN Stack Development</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-600 p-1 rounded mr-3 mt-1">
                    <FaLightbulb className="text-xs" />
                  </span>
                  <span className="text-gray-700">DevOps Practices</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-600 p-1 rounded mr-3 mt-1">
                    <FaLightbulb className="text-xs" />
                  </span>
                  <span className="text-gray-700">Backend Architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-600 p-1 rounded mr-3 mt-1">
                    <FaLightbulb className="text-xs" />
                  </span>
                  <span className="text-gray-700">API Design & Development</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-white p-8 rounded-xl shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center">
              <FaGraduationCap className="mr-3 text-indigo-500" /> Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800">Bachelor of Technology in Computer Science</h4>
                <p className="text-gray-600">XYZ University, India</p>
                <p className="text-sm text-gray-500">2022 - 2026</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Full Stack Development Certification</h4>
                <p className="text-gray-600">Online Platform</p>
                <p className="text-sm text-gray-500">2023</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center">
              <FaAward className="mr-3 text-indigo-500" /> Certifications
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-indigo-100 text-indigo-600 p-1 rounded mr-3 mt-1">
                  <FaAward className="text-xs" />
                </span>
                <span className="text-gray-700">AWS Certified Cloud Practitioner</span>
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-100 text-indigo-600 p-1 rounded mr-3 mt-1">
                  <FaAward className="text-xs" />
                </span>
                <span className="text-gray-700">Docker Certified Associate</span>
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-100 text-indigo-600 p-1 rounded mr-3 mt-1">
                  <FaAward className="text-xs" />
                </span>
                <span className="text-gray-700">MongoDB Certified Developer</span>
              </li>
            </ul>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;