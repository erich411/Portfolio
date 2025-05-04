import { motion } from "framer-motion";
import "../css/contacts.css";

const Contacts = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  const pulseVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const contactIcons = [
    {
      platform: "Facebook",
      icon: "fa-brands fa-facebook",
      link: "https://www.facebook.com/tiffa.lockhart.3114/",
      color: "#1877F2",
    },
    {
      platform: "Twitter / X",
      icon: "fa-brands fa-x-twitter",
      link: "https://x.com/Remyuy12",
      color: "#000000",
    },
    {
      platform: "Instagram",
      icon: "fa-brands fa-instagram",
      link: "https://www.instagram.com/erichuyramos/",
      color: "#E4405F",
    },
    {
      platform: "Email",
      icon: "fa-regular fa-envelope",
      link: "mailto:erichramos9@gmail.com",
      color: "#EA4335",
    },
  ];

  return (
    <section className="contacts-section" id="contacts">
      <motion.div
        className="contacts-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h1>Contact Me</h1>
          <div className="header-underline"></div>
        </motion.div>

        <motion.div className="contact-layout">
          <motion.div className="contact-info" variants={itemVariants}>
            <motion.div
              className="intro-message"
              variants={pulseVariants}
              whileHover="hover"
            >
              <motion.p variants={itemVariants}>
                Hi! I'm Erich, feel free to reach out if you want to collaborate
                or discuss anything tech-related.
              </motion.p>
            </motion.div>

            <motion.div
              className="availability-card"
              variants={itemVariants}
              whileHover="hover"
            >
              <h2>Availability</h2>
              <ul>
                <motion.li variants={itemVariants}>
                  Available for software development internships or freelance
                  web projects
                </motion.li>
                <motion.li variants={itemVariants}>
                  Open to tech talk, mentorship, or any project collaboration
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              className="message-card"
              variants={itemVariants}
              whileHover="hover"
            >
              <h2>Let's Connect</h2>
              <motion.p variants={itemVariants}>
                Whether you're a fellow student, developer, or just someone
                interested in technology, I'd love to connect and share ideas!
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div className="social-connect" variants={itemVariants}>
            <h2>Get in Touch</h2>
            <motion.div className="social-icons">
              {contactIcons.map((icon, index) => (
                <motion.a
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-wrapper"
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                  custom={index}
                  style={{ backgroundColor: icon.color }}
                >
                  <i className={icon.icon}></i>
                  <span className="icon-tooltip">{icon.platform}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="contact-form-card"
              variants={itemVariants}
              whileHover="hover"
            >
              <h2>Send Me a Message</h2>
              <form className="contact-form">
                <div className="form-group">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    placeholder="Your Message"
                    rows="4"
                    required
                  ></motion.textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, backgroundColor: "#3182CE" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contacts;
