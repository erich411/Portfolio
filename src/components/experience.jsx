import { motion } from "framer-motion";
import { FaBuilding } from "react-icons/fa";
import "../css/experience.css";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section className="experience" id="experience">
      <motion.div
        className="experience-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="experience-header" variants={itemVariants}>
          <h1>My Experience</h1>
          <div className="underline"></div>
        </motion.div>

        <motion.div className="experience-grid" variants={fadeInVariants}>
          <motion.div className="experience-intro" variants={itemVariants}>
            <motion.p
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              Hi! I am Erich, in this section I will share my Software
              Engineering journey (2023 to 2024).
            </motion.p>

            <motion.p
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              During my academic journey and personal projects, I have gained
              practical experience in software engineering principles. This
              includes requirement gathering, system design, modular
              development, version control using Git, and debugging across
              full-stack environments.
            </motion.p>

            <motion.p
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              My time during Software Engineering was kind of stressful and
              challenging but my groupmates made it happen. We did our best and
              passed the obstacles before our capstone projects. After defense,
              we appreciated each other throughout the journey.
            </motion.p>
          </motion.div>

          <motion.div
            className="experience-card"
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <div className="card-content">
              <motion.div
                className="card-icon"
                whileHover={{ rotate: 5, scale: 1.1 }}
                aria-hidden="true"
              >
                <FaBuilding />
              </motion.div>

              <div className="card-details">
                <h2>Company Name: TranscendEdge Enterprise</h2>
                <h3>Role: System Analyst</h3>
                <h3>Duration: 2023 to 2024</h3>
              </div>

              <div className="card-skills">
                <motion.span whileHover={{ scale: 1.1 }}>
                  System Analysis
                </motion.span>
                <motion.span whileHover={{ scale: 1.1 }}>
                  Project Management
                </motion.span>
                <motion.span whileHover={{ scale: 1.1 }}>
                  Team Collaboration
                </motion.span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
