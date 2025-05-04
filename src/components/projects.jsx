import { useState } from "react";
import { motion } from "framer-motion";
import "../css/projects.css";
import poke from "../assets/pokemon.png";
import cal from "../assets/cal.png";
import se from "../assets/1.png";
import caps from "../assets/2.png";
import ecom from "../assets/4.jpg"
import app from "../assets/5.png";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "POKE BATTLE",
      image: poke,
      techStack: ["ReactJS"],
      liveLink: "https://rampola-erich-pokemon-app.netlify.app/",
      githubLink: "https://github.com/erich411/pokemon-app.git",
      featured: true,
    },
    {
      id: 2,
      title: "ReactJS Calculator",
      image: cal,
      techStack: ["ReactJS"],
      liveLink: "https://sci-cal-rampola-erich.netlify.app/",
      githubLink: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Software Engineering Project",
      image: se,
      techStack: ["HTML", "CSS", "JavaScript", "PHP"],
      liveLink: "#",
      githubLink: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Tutoria: Finding the Right Tutor",
      image: caps,
      techStack: ["HTML", "CSS", "JavaScript", "Django"],
      liveLink: "#",
      githubLink: "#",
      featured: false,
    },
    {
      id: 5,
      title: "E-commerce Project",
      image: ecom,
      techStack: ["HTML", "CSS", "JavaScript", "PHP"],
      liveLink: "#",
      githubLink: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Application Development",
      image: app,
      techStack: ["HTML", "CSS", "JavaScript", "Django"],
      liveLink: "#",
      githubLink: "#",
      featured: false,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const filterVariants = {
    selected: {
      backgroundColor: "#6366f1",
      color: "white",
      scale: 1.05,
    },
    notSelected: {
      backgroundColor: "white",
      color: "#4a5568",
      scale: 1,
    },
  };

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Filter projects by featured status for the featured section
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="projects-section" id="projects">
      <motion.div
        className="projects-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h1>My Projects</h1>
          <div className="header-underline"></div>
          <p className="section-intro">
            Here are some of the projects I've worked on during my journey as a
            software developer. Each project represents different skills and
            technologies I've mastered along the way.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div className="featured-projects" variants={itemVariants}>
          <h2>Featured Work</h2>
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="featured-card"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="card-image-container">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="project-links">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fa-solid fa-globe"></i> Live
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fa-brands fa-github"></i> Code
                    </motion.a>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.techStack.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="tech-tag"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "#6366f1",
                          color: "white",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Filters */}
        <motion.div className="project-filters" variants={itemVariants}>
          <h2>All Projects</h2>
          
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="projects-grid" variants={containerVariants}>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              layout
            >
              <div className="card-image-container">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="tech-tag"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#6366f1",
                        color: "white",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="card-links">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, backgroundColor: "#4f46e5" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                    View Project
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    whileHover={{ scale: 1.05, backgroundColor: "#2d3748" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="fa-brands fa-github"></i> Repository
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </motion.div>
    </section>
  );
};

export default Projects;
