import React, { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaInstagram,
} from "react-icons/fa";
import { motion } from 'framer-motion';
const Navigation = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled for navbar styling
      setIsScrolled(window.scrollY > 50);
      
      // Determine which section is currently in view
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveItem(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: <FaHome size={18} />, href: "#" },
    { id: "about", label: "About", icon: <FaUser size={18} />, href: "#about" },
    { id: "skills", label: "Skills", icon: <FaCode size={18} />, href: "#skills" },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram size={18} />, href: "#projects" },
    { id: "contact", label: "Contact", icon: <FaEnvelope size={18} />, href: "#contact" },
  ];

  const socialItems = [
    { icon: <FaGithub size={20} />, href: "https://github.com/Rohit03022006", label: "GitHub" },
    { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/rohit-kumar-783127334?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3By1kjWphlRfWOP8gMoEFPOg%3D%3D", label: "LinkedIn" },
  { icon: <FaInstagram size={20} />, href: "https://instagram.com/_rohit_xten", label: "Instagram" },
  ];

  const handleItemClick = (itemId, e) => {
    if (e) e.preventDefault();
    setActiveItem(itemId);
    setIsMobileMenuOpen(false);
    
    // Scroll to the section
    const element = document.getElementById(itemId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`desktop-nav hidden md:flex bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a 
            href="#" 
            className="text-2xl font-bold text-indigo-600"
            onClick={(e) => handleItemClick("home", e)}
          >
            Rohit
          </a>

          <div className="flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`relative py-2 transition ${
                  activeItem === item.id 
                    ? "text-indigo-600 font-semibold" 
                    : "text-gray-600 hover:text-indigo-600"
                }`}
                onClick={(e) => handleItemClick(item.id, e)}
              >
                {item.label}
                {activeItem === item.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"></div>
                )}
              </a>
            ))}
          </div>

          <div className="flex space-x-4">
            {socialItems.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-600 hover:text-black transition"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </nav>
      {/* Mobile  */}
      <nav
        className={`mobile-nav md:hidden bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-2"
        }`}
        ref={mobileMenuRef}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a 
            href="#" 
            className="text-xl font-bold text-indigo-600"
            onClick={(e) => handleItemClick("home", e)}
          >
            Rohit
          </a>

          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`mobile-menu-container ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-content">
            <div className="nav-items">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`nav-item ${activeItem === item.id ? "active" : ""}`}
                  onClick={(e) => handleItemClick(item.id, e)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                  {activeItem === item.id && (
                    <div className="w-2 h-2 bg-indigo-600 rounded-full ml-auto"></div>
                  )}
                </a>
              ))}
            </div>

            <div className="social-items">
              {socialItems.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-item"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .mobile-menu-container {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;
          background: white;
        }
        
        .mobile-menu-container.open {
          max-height: 500px;
          border-top: 1px solid #e5e7eb;
        }
        
        .mobile-menu-content {
          padding: 1rem 1.5rem;
        }
        
        .nav-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .nav-item {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          color: #4b5563;
          transition: all 0.2s;
        }
        
        .nav-item:hover {
          background-color: #f3f4f6;
          color: #4f46e5;
        }
        
        .nav-item.active {
          color: #4f46e5;
          background-color: #eef2ff;
          font-weight: 500;
        }
        
        .nav-icon {
          margin-right: 0.75rem;
          display: flex;
          align-items: center;
        }
        
        .social-items {
          display: flex;
          justify-content: center;
          gap: 1rem;
          padding-top: 1.5rem;
          margin-top: 1.5rem;
          border-top: 1px solid #e5e7eb;
        }
        
        .social-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          color: #4b5563;
          transition: all 0.2s;
        }
        
        .social-item:hover {
          background-color: #f3f4f6;
          color: #000;
        }
        
        @media (min-width: 768px) {
          .mobile-nav {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;