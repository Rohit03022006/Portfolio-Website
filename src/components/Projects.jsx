import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaMobile,
  FaDatabase,
  FaTools,
  FaStar,
  FaEye,
  FaMobileAlt,
  FaChartLine,
  FaUserShield,
  FaBook,
  FaLink,
  FaBolt,
  FaUserLock,
  FaChartBar,
  FaBrain,
  FaRobot,
  FaTerminal,
  FaTimes,
  FaAws,
} from "react-icons/fa";
import { SiDocker, SiKubernetes } from "react-icons/si";
import { motion } from "framer-motion";
import { data, tr } from "framer-motion/client";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("projects");
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const projects = [
    {
      id: 1,
      title: "Flight Prediction System",
      description:
        "A machine learning-powered web application that predicts flight prices and patterns using advanced data analytics and visualization.",
      image:
        "https://raw.githubusercontent.com/Rohit03022006/flight-prediction/main/Flight%20Price%20Prediction%20Web%20page.PNG",
      githubUrl: "https://github.com/Rohit03022006/flight-prediction",
      liveUrl: null,
      tags: [
        "React",
        "Machine Learning",
        "Data Visualization",
        "Docker",
        "Flask",
        "CI/CD",
      ],
      category: "fullstack",
      featured: true,
      techIcons: [FaCode, FaDatabase, FaTools, SiDocker],
      status: "completed",
    },
    {
      id: 2,
      title: "Load Balancing Simulator",
      description:
        "An interactive load balancing simulator designed to visualize traffic distribution algorithms and server performance in real time.",
      image:
        "https://raw.githubusercontent.com/Rohit03022006/load-balancing-simulator/main/screenshot/Home.png",
      githubUrl: "https://github.com/Rohit03022006/load-balancing-simulator",
      liveUrl: null,
      tags: [
        "React",
        "Node.js",
        "Express",
        "Simulation",
        "REST API",
        "Docker",
        "K8S",
        "CI/CD",
      ],
      category: "fullstack",
      featured: true,
      techIcons: [FaCode, FaServer, FaDatabase, FaTools, SiDocker, SiKubernetes],
      features: [
        "Simulation of multiple load balancing algorithms",
        "Real-time visualization of traffic distribution",
        "Dynamic server allocation and request handling",
        "Performance monitoring with response time metrics",
        "Interactive dashboard built using React",
        "RESTful backend services with Node.js and Express",
        "Containerized deployment using Docker",
        "Kubernetes-based orchestration and scaling",
        "Automated CI/CD workflow integration",
        "Responsive and modern user interface",
      ],
      status: "completed",
    },
    {
      id: 3,
      title: "2-Tier Flask Application",
      description:
        "A scalable two-tier web application with Flask backend and MySQL database, implementing secure messaging functionality and user management.",
      image: null,
      githubUrl: null,
      liveUrl: null,
      tags: ["Flask", "MySQL", "REST API", "Docker", "CI/CD"],
      category: "devops",
      featured: true,
      features: [
        "User registration and authentication",
        "Send and receive messages between users",
        "Admin panel for user and message management",
        "Dockerized for easy deployment",
        "CI/CD pipeline for automated testing and deployment",
      ],
      techIcons: [FaServer, FaDatabase, FaAws, SiDocker],
      status: "in-progress",
    },
    {
      id: 4,
      title: "Recipe Manager",
      image:
        "https://raw.githubusercontent.com/Rohit03022006/Recipe-Manager/main/Images/Web/base.png",
      description:
        "A comprehensive recipe management application with search and favorite features.",
      githubUrl: "https://github.com/Rohit03022006/Recipe-Manager/",
      liveUrl: null,
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "REST API",
        "Docker",
        "CI/CD",
      ],
      category: "fullstack",
      featured: true,
      features: [
        "Secure user authentication with JWT",
        "Create, edit, and delete recipes",
        "Like and comment on recipes",
        "Follow other users and view their recipes",
        "Responsive UI for mobile and desktop",
        "Instant updates without full page reloads",
        "Built with MongoDB, Express.js, React, Node.js",
        "Styled with Tailwind CSS",
        "Uses Docker for easy setup and deployment",
      ],
      techIcons: [FaCode, FaDatabase, FaTools, FaUserShield, FaMobile],
      status: "completed",
    },
    {
      id: 5,
      title: "Expense Tracker",
      description:
        "A comprehensive expense tracking application with visualization and budgeting features.",
      image:
        "https://raw.githubusercontent.com/Rohit03022006/expense-tracker/master/Screenshots/base.png",
      githubUrl: "https://github.com/Rohit03022006/expense-tracker",
      liveUrl: null,
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Chart.js",
        "Docker",
        "CI/CD",
        "Express",
      ],
      category: "fullstack",
      featured: true,
      techIcons: [FaCode, FaDatabase, FaTools, FaUserShield],
      features: [
        "User authentication and secure expense management",
        "Add, edit, and delete expenses with category-based tracking",
        "Interactive charts and visual analytics using Chart.js",
        "Monthly and yearly expense summaries",
        "Budget planning with spending limit alerts",
        "RESTful API built with Node.js and Express",
        "MongoDB database with optimized schema design",
        "Dockerized application with CI/CD pipeline support",
        "Responsive and mobile-friendly user interface",
      ],
      status: "completed",
    },
    {
      id: 6,
      title: "Dr. Parneeta Chaudhary Portfolio",
      description:
        "A professional portfolio website for Dr. Parneeta Chaudhary, showcasing her work, achievements, and professional background with modern design and responsive layout.",
      image:
        "https://raw.githubusercontent.com/Rohit03022006/Dr.-Parneeta-Chaudhary-Portfolio/master/page.png",
      githubUrl:
        "https://github.com/Rohit03022006/Dr.-Parneeta-Chaudhary-Portfolio",
      liveUrl: "https://dr-parneeta-chaudhary-portfolio.vercel.app",
      tags: ["Next js"],
      category: "frontend",
      featured: false,
      techIcons: [FaCode, FaMobile],
      status: "completed",
    },
    {
      id: 7,
      title: "Library Management System",
      description:
        "A comprehensive full-stack library management platform with user authentication, book catalog management, borrowing system, QR code generation, and analytics dashboard.",
      image:
        "https://raw.githubusercontent.com/Rohit03022006/library-management-system/main/Screenshot/Home.PNG",
      githubUrl: "https://github.com/Rohit03022006/library-management-system",
      liveUrl: null,
      tags: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "REST API",
        "Cloudinary",
        "QR Code Generation",
        "JWT Authentication",
        "Docker",
        "CI/CD",
        "Kubernetes",
      ],
      category: "fullstack",
      featured: true,
      techIcons: [FaBook, FaUserShield, FaChartLine, FaDatabase, FaMobileAlt],
      status: "completed",
      features: [
        "User Authentication & Role-Based Access",
        "Book Catalog with Advanced Search",
        "Borrowing System with Auto Fine Calculation",
        "QR Code Generation for Physical Books",
        "Analytics Dashboard with Real-time Stats",
        "Cloud Image Management with Cloudinary",
        "Responsive Mobile-First Design",
        "Secure RESTful API with JWT",
      ],
      techStack: {
        frontend: ["React", "Vite", "Tailwind CSS"],
        backend: ["Node.js", "Express", "MongoDB"],
        services: ["Cloudinary", "QR Code Generation", "REST API"],
        tools: ["Git", "Postman", "VS Code", "MongoDB Atlas"],
      },
    },
    {
      id: 8,
      title: "URL Shortener API",
      description:
        "A production-ready URL shortener service with analytics, authentication, and rate limiting",
      image: null,
      githubUrl: "https://github.com/Rohit03022006/url-shortener",
      liveUrl: null,
      tags: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Redis",
        "REST API",
        "JWT Authentication",
        "Rate Limiting",
      ],
      category: "backend",
      featured: true,
      techIcons: [FaLink, FaDatabase, FaBolt, FaUserLock, FaChartBar],
      status: "completed",
      features: [
        "Shorten URLs with custom aliases",
        "Secure JWT-based user authentication",
        "API key support for programmatic access",
        "Real-time click analytics and tracking",
        "Redis caching for ultra-fast redirects",
        "Rate limiting to prevent abuse",
        "URL expiration with automatic cleanup",
        "Bulk URL shortening support",
        "PostgreSQL database with Neon hosting",
        "Comprehensive Postman API documentation",
      ],
      techStack: {
        backend: [
          "Node.js",
          "Express.js",
          "PostgreSQL (Neon)",
          "Redis (Upstash)",
        ],
        authentication: ["JWT", "bcrypt", "API Keys"],
        middleware: ["Helmet", "CORS", "Rate Limiting", "Compression"],
        tools: ["Git", "Postman", "VS Code", "Nodemon", "Dotenv"],
      },
    },
    {
      id: 9,
      title: "Agentix – AI Agent CLI Platform",
      description:
        "A developer-focused AI Agent CLI for generating applications, managing tools, and interacting with AI agents locally with a modern web interface",
      image:
        "https://raw.githubusercontent.com/Rohit03022006/Agentix/master/CLI.png",
      githubUrl: "https://github.com/Rohit03022006/Agentix",
      liveUrl: null,
      tags: [
        "AI Agents",
        "CLI Tool",
        "Next.js",
        "Node.js",
        "Prisma",
        "Authentication",
        "Google Gemini",
        "Developer Tools",
      ],
      category: "fullstack",
      featured: true,
      techIcons: [FaRobot, FaTerminal, FaServer, FaDatabase, FaBrain],
      status: "in-progress",
      features: [
        "Interactive AI-powered CLI for application generation",
        "Schema-driven code generation using Zod",
        "Google Gemini integration via ai-sdk/google",
        "Production-ready project scaffolding with complete file trees",
        "Next.js frontend dashboard for managing agents",
        "Authentication and authorization using Better Auth",
        "Prisma ORM with migrations and database support",
        "Extensible tool and agent architecture",
        "Modern CLI experience using Clack",
        "Supports multiple frontends and integrations",
      ],
      techStack: {
        frontend: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
        database: ["PostgreSQL", "Neon", "Prisma"],
        backend: ["Node.js", "Prisma", "Better Auth"],
        ai: ["ai-sdk/google", "Google Gemini", "Zod"],
        cli: ["Node.js", "Clack", "Chalk"],
        tools: ["Git", "VS Code", "Prisma Migrate", "dotenv"],
      },
    },
  ];

  // Helper function to get tech icons for a project
  const getTechIcons = (project) => {
    // Return project's techIcons if they exist
    if (project.techIcons) return project.techIcons;

    // Default icons based on category
    const defaultIcons = {
      fullstack: [FaCode, FaServer, FaDatabase],
      frontend: [FaCode, FaMobile],
      backend: [FaServer, FaDatabase],
      devops: [FaServer, FaTools],
    };

    return defaultIcons[project.category] || [FaCode];
  };

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "fullstack",
      label: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "frontend",
      label: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "backend",
      label: "Backend",
      count: projects.filter((p) => p.category === "backend").length,
    },
    {
      id: "devops",
      label: "DevOps",
      count: projects.filter((p) => p.category === "devops").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getCategoryColor = (category) => {
    const colors = {
      fullstack: "from-purple-500 to-pink-500",
      frontend: "from-blue-500 to-cyan-500",
      backend: "from-green-500 to-emerald-500",
      devops: "from-orange-500 to-red-500",
    };
    return colors[category] || "from-gray-500 to-gray-700";
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      completed: { color: "bg-green-100 text-green-800", label: "Completed" },
      inProgress: {
        color: "bg-yellow-100 text-yellow-800",
        label: "In Progress",
      },
      planned: { color: "bg-blue-100 text-blue-800", label: "Planned" },
    };
    const config = statusConfig[status] || statusConfig.completed;
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${config.color}`}
      >
        {config.label}
      </span>
    );
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#F5E6CC]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6CC] via-[#FDF5E6] to-[#F5E6CC] opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#DC2626_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
            Featured <span className="text-[#DC2626]">Projects</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
            A curated collection of my recent work showcasing innovative
            solutions, clean code practices, and cutting-edge technologies
            across full-stack development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeFilter === filter.id
                  ? "bg-[#DC2626] text-white shadow-lg"
                  : "bg-white text-[#666666] border-2 border-[#F5E6CC] hover:border-[#DC2626]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
              <span
                className={`ml-2 font-bold ${
                  activeFilter === filter.id ? "text-white" : "text-[#DC2626]"
                }`}
              >
                {filter.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              whileHover="hover"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project)}
            >
              <motion.div className="bg-white rounded-2xl shadow-xl border border-[#F5E6CC] overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Project Image/Placeholder */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${getCategoryColor(
                        project.category,
                      )}`}
                    >
                      <div className="text-white text-center">
                        <FaCode className="text-4xl mb-2 mx-auto" />
                        <span className="text-sm font-semibold">
                          {project.title}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Overlay with actions */}
                  <motion.div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-100 shadow-lg"
                        whileHover="hover"
                        whileTap="tap"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub size={18} />
                      </motion.a>
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-[#DC2626] rounded-full flex items-center justify-center text-white hover:bg-[#B91C1C] shadow-lg"
                          whileHover="hover"
                          whileTap="tap"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt size={16} />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      <FaStar className="inline mr-1" size={10} />
                      FEATURED
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    {getStatusBadge(project.status)}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#DC2626] transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="text-[#666666] mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Icons */}
                    <div className="flex gap-3 mb-4">
                      {getTechIcons(project).map((Icon, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 bg-[#FEE2E2] rounded-lg flex items-center justify-center text-[#DC2626] transition-transform duration-200 hover:scale-110"
                        >
                          <Icon size={14} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#F5E6CC] text-[#666666] text-xs rounded-full font-medium transition-colors duration-200 hover:bg-[#DC2626] hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#F5E6CC]">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-xs sm:text-sm font-semibold hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaGithub size={14} />
                      <span className="hidden sm:inline">View Code</span>
                      <span className="sm:hidden">Code</span>
                    </motion.a>
                    {project.liveUrl ? (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#DC2626] text-white py-2 px-4 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#B91C1C] transition-colors duration-200 flex items-center justify-center gap-2"
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <FaExternalLinkAlt size={12} />
                        <span className="hidden sm:inline">Live Demo</span>
                        <span className="sm:hidden">Demo</span>
                      </motion.a>
                    ) : (
                      <button
                        className="bg-gray-300 text-gray-500 py-2 px-4 rounded-lg text-xs sm:text-sm font-semibold cursor-not-allowed flex items-center justify-center gap-2 transition-colors duration-200"
                        disabled
                      >
                        <FaEye size={12} />
                        <span className="hidden sm:inline">Demo Soon</span>
                        <span className="sm:hidden">Soon</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {visibleCount < filteredProjects.length && (
            <div className="col-span-full text-center mt-4">
              <motion.button
                onClick={handleLoadMore}
                className="px-6 py-3 bg-[#DC2626] text-black rounded-full font-semibold transition-all duration-300 hover:bg-[#B91C1C] flex items-center justify-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEye className="animate-pulse" />
                Load More Projects
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* Project Detail Modal */}
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={handleCloseModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-[#F5E6CC] via-[#FDF5E6] to-[#F5E6CC] opacity-90 rounded-2xl shadow-xl w-full max-w-4xl relative overflow-hidden
           flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: "-50px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-50px", opacity: 0 }}
            >
              <button
                className="absolute top-4 right-4 z-20 bg-white rounded-full p-2 shadow-md
             text-gray-600 hover:text-black transition"
                onClick={handleCloseModal}
                aria-label="Close modal"
              >
                <FaTimes size={18} />
              </button>

              {selectedProject.image && (
                <div className="w-full md:w-1/2 h-56 md:h-auto">
                  <motion.img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                </div>
              )}

              <div className="w-full md:w-1/2 p-6 overflow-y-auto">
                <h2 className="text-2xl font-bold text-black mb-2">
                  {selectedProject.title}
                </h2>

                <p className="text-[#666666] mb-4 leading-relaxed">
                  {selectedProject.description}
                </p>

                <h3 className="text-lg font-semibold text-black mb-2">
                  Features:
                </h3>
                <ul className="list-disc list-inside mb-4">
                  {selectedProject.features &&
                    selectedProject.features.map((feature, index) => (
                      <li key={index} className="text-[#666666]">
                        {feature}
                      </li>
                    ))}
                </ul>

                <h3 className="text-lg font-semibold text-black mb-2">
                  Tech Stack:
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.techIcons &&
                    selectedProject.techIcons.map((Icon, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 bg-[#FEE2E2] rounded-lg flex items-center justify-center text-[#DC2626] transition-transform duration-200 hover:scale-110"
                      >
                        <Icon size={18} />
                      </div>
                    ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FaGithub size={16} />
                    View Code
                  </motion.a>
                  {selectedProject.liveUrl && (
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#DC2626] text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-[#B91C1C] transition-colors duration-200 flex items-center justify-center gap-2"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;
