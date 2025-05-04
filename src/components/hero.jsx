import { motion } from "framer-motion";
import "../css/hero.css";
import profileImg from "../assets/erich.jfif";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.2, rotate: [0, -10, 10, -5, 5, 0], color: "#007bff" },
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <section className="hero">
      <div className="hero-bg-shape"></div>

      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="hero-text">
          <motion.span className="hero-greeting" variants={itemVariants}>
            Hello, I'm
          </motion.span>

          <motion.h1 variants={itemVariants}>
            Erich Ramos
            <span className="accent-dot">.</span>
          </motion.h1>

          <motion.div className="hero-tagline" variants={itemVariants}>
            <h2>
              <span className="hero-title">Front-End Developer</span> crafting
              amazing digital experiences
            </h2>
          </motion.div>

          <motion.p variants={itemVariants}>
            I specialize in building responsive, accessible, and performant web
            applications with modern JavaScript frameworks and design systems.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.button
              className="hero-btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/projects" className="w">View My Work</Link>
            </motion.button>

            <motion.button
              className="hero-btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link className="links" to="/contacts">Contact Me</Link>
            </motion.button>
          </motion.div>

          <motion.div className="hero-socials" variants={socialVariants}>
            <motion.a
              href="https://github.com/erich411"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
            >
              <FaGithub className="social-icon" />
            </motion.a>

            

            <motion.a
              href="https://x.com/Remyuy12"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
            >
              <FaTwitter className="social-icon" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/erichuyramos/"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
            >
              <FaInstagram className="social-icon" />
            </motion.a>

            <motion.a
              href="https://www.facebook.com/tiffa.lockhart.3114/"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
            >
              <FaFacebook className="social-icon" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial="hidden"
        animate="visible"
        variants={profileVariants}
      >
        <motion.div className="image-wrapper">
          <motion.div
            className="image-background"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          <motion.img
            src={profileImg}
            alt="Erich Ramos"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
