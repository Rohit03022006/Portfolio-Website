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

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
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
      <nav className={`hidden md:flex bg-[#FDF5E6] shadow-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a 
            href="#" 
            className="text-2xl font-bold text-[#DC2626]"
            onClick={(e) => handleItemClick("home", e)}
          >
            Rohit
          </a>

          <div className="flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`relative py-2 transition ${activeItem === item.id ? "text-[#DC2626] font-semibold" : "text-[#666666] hover:text-[#DC2626]"}`}
                onClick={(e) => handleItemClick(item.id, e)}
              >
                {item.label}
                {activeItem === item.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#DC2626]"></div>
                )}
              </a>
            ))}
          </div>

          <div className="flex space-x-4">
            {socialItems.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-[#666666] hover:text-[#000000] transition"
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
      
      {/* Mobile Navigation */}
      <nav 
        ref={mobileMenuRef}
        className={`md:hidden bg-[#FDF5E6] shadow-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "py-3" : "py-2"}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a 
            href="#" 
            className="text-xl font-bold text-[#DC2626]"
            onClick={(e) => handleItemClick("home", e)}
          >
            Rohit
          </a>

          <button
            onClick={toggleMobileMenu}
            className="text-[#666666] focus:outline-none p-2 rounded-md hover:bg-[#FEF2F2] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96" : "max-h-0"}`}>
          <div className="px-6 py-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`flex items-center py-3 px-4 rounded-md transition ${activeItem === item.id ? "text-[#DC2626] bg-[#FEE2E2] font-medium" : "text-[#666666] hover:text-[#DC2626] hover:bg-[#F5E6CC]"}`}
                  onClick={(e) => handleItemClick(item.id, e)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                  {activeItem === item.id && (
                    <div className="w-2 h-2 bg-[#DC2626] rounded-full ml-auto"></div>
                  )}
                </a>
              ))}
            </div>

            <div className="flex justify-center space-x-4 pt-6 mt-6 border-t border-[#F5E6CC]">
              {socialItems.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 rounded-full text-[#666666] hover:text-[#DC2626] hover:bg-[#FEE2E2] transition"
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
    </>
  );
};

export default Navigation;