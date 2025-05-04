import { motion, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "../css/aboutme.css";
import {
  FaCode,
  FaLaptopCode,
  FaTools,
  FaNetworkWired,
  FaRegLightbulb,
  FaAward,
} from "react-icons/fa";

const AboutMe = () => {
  const constraintsRef = useRef(null);
  // Detect if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();
  // State to detect if we're on mobile
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile device on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Run once on component mount
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);
    
    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Simplified animation variants for mobile
  const shouldReduceMotion = prefersReducedMotion || isMobile;

  // Animation variants with conditional logic for mobile
  const sectionVariants = shouldReduceMotion 
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
          },
        },
      };

  const itemVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }
    : {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 100 },
        },
      };

  const skillVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        hover: { scale: 1.02 }
      }
    : {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: { type: "spring", stiffness: 300 },
        },
        hover: {
          scale: 1.05,
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          transition: { type: "spring", stiffness: 400 },
        },
      };

  const titleVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }
    : {
        hidden: { opacity: 0, x: -50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { type: "spring", stiffness: 100 },
        },
      };

  // Conditionally render background animations
  const renderBackgroundElements = () => {
    if (shouldReduceMotion) {
      return (
        <div className="background-elements">
          <div className="bg-element element-1"></div>
          <div className="bg-element element-2"></div>
          <div className="bg-element element-3"></div>
        </div>
      );
    }

    return (
      <div className="background-elements">
        <motion.div
          className="bg-element element-1"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          className="bg-element element-2"
          animate={{
            x: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          className="bg-element element-3"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
      </div>
    );
  };

  // Optimized rendering with lazy loading using IntersectionObserver via framer-motion's viewport prop
  return (
    <motion.section
      className="about-me"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="about-container">
        <motion.div className="about-header" variants={titleVariants}>
          <div className="section-title-container">
            <h2 className="section-title">About Me</h2>
            <div className="section-underline"></div>
          </div>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-intro" variants={itemVariants}>
            <motion.p className="intro-text">
              Hi! I'm <span className="highlight">Erich</span>, a 4th-year
              Information Technology student at Western Mindanao State
              University with a passion for software development, system
              troubleshooting, and visual resolution technologies.
            </motion.p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-card" variants={itemVariants}>
              <div className="card-icon">
                <motion.div
                  className="floating-icon"
                  ref={constraintsRef}
                  whileHover={!shouldReduceMotion ? { rotate: [0, -10, 10, -5, 0] } : {}}
                >
                  <FaRegLightbulb />
                </motion.div>
              </div>
              <h3>My Expertise</h3>
              <p>
                My expertise lies in software development, system
                troubleshooting, and visual resolution technologies, where I
                continuously debug challenges and innovate solutions. I enjoy
                teaching others about technology, sharing knowledge, and
                fostering growth within the tech community.
              </p>
            </motion.div>

            <motion.div className="about-card" variants={itemVariants}>
              <div className="card-icon">
                <motion.div
                  className="floating-icon"
                  whileHover={!shouldReduceMotion ? { rotate: [0, -10, 10, -5, 0] } : {}}
                >
                  <FaAward />
                </motion.div>
              </div>
              <h3>Competitions</h3>
              <p>
                Participated in Google's Kick Start competition focused on
                coding and algorithmic challenges, designed for programmers
                looking to enhance their problem-solving skills. Achieved
                Certificate of Participation with bragging rights for my resume.
              </p>
            </motion.div>
          </div>

          <motion.div className="skills-section" variants={itemVariants}>
            <h3>Skills & Expertise</h3>
            <div className="skills-container">
              <motion.div
                className="skill-item"
                variants={skillVariants}
                whileHover="hover"
              >
                <div className="skill-icon">
                  <FaCode />
                </div>
                <h4>Programming</h4>
                <p>Python & C++</p>
              </motion.div>

              <motion.div
                className="skill-item"
                variants={skillVariants}
                whileHover="hover"
              >
                <div className="skill-icon">
                  <FaTools />
                </div>
                <h4>IT Hardware</h4>
                <p>Troubleshooting</p>
              </motion.div>

              <motion.div
                className="skill-item"
                variants={skillVariants}
                whileHover="hover"
              >
                <div className="skill-icon">
                  <FaNetworkWired />
                </div>
                <h4>Networking</h4>
                <p>Configuration & Setup</p>
              </motion.div>

              <motion.div
                className="skill-item"
                variants={skillVariants}
                whileHover="hover"
              >
                <div className="skill-icon">
                  <FaLaptopCode />
                </div>
                <h4>Web Development</h4>
                <p>Frontend & Backend</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="about-columns">
            <motion.div className="about-column" variants={itemVariants}>
              <h3>Career Goals</h3>
              <ul className="goal-list">
                <motion.li
                  whileHover={!shouldReduceMotion ? { scale: 1.03, x: 5 } : {}}
                  transition={!shouldReduceMotion ? { type: "spring", stiffness: 300 } : {}}
                >
                  Become a highly skilled Software Developer or IT Specialist
                </motion.li>
                <motion.li
                  whileHover={!shouldReduceMotion ? { scale: 1.03, x: 5 } : {}}
                  transition={!shouldReduceMotion ? { type: "spring", stiffness: 300 } : {}}
                >
                  Build tech solutions that simplify learning and improve
                  accessibility
                </motion.li>
                <motion.li
                  whileHover={!shouldReduceMotion ? { scale: 1.03, x: 5 } : {}}
                  transition={!shouldReduceMotion ? { type: "spring", stiffness: 300 } : {}}
                >
                  Currently developing a capstone project for matching tutors
                  with students' needs
                </motion.li>
              </ul>
            </motion.div>

            <motion.div className="about-column" variants={itemVariants}>
              <h3>Personal Touch</h3>
              <ul className="personal-list">
                <motion.li
                  whileHover={!shouldReduceMotion ? { scale: 1.03, x: 5 } : {}}
                  transition={!shouldReduceMotion ? { type: "spring", stiffness: 300 } : {}}
                >
                  <strong>Fun Fact:</strong> I enjoy fixing computer parts in my
                  free time
                </motion.li>
                <motion.li
                  whileHover={!shouldReduceMotion ? { scale: 1.03, x: 5 } : {}}
                  transition={!shouldReduceMotion ? { type: "spring", stiffness: 300 } : {}}
                >
                  <strong>Hobbies:</strong> Coding, teaching about visual
                  resolution, and exploring tech innovations
                </motion.li>
                <motion.li
                  whileHover={!shouldReduceMotion ? { scale: 1.03, x: 5 } : {}}
                  transition={!shouldReduceMotion ? { type: "spring", stiffness: 300 } : {}}
                >
                  <strong>Life Experience:</strong> Every challenge is an
                  opportunity to grow and learn something new
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Conditionally render animated background elements */}
      {renderBackgroundElements()}
    </motion.section>
  );
};

export default AboutMe;