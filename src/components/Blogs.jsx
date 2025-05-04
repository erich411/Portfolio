import { motion } from "framer-motion";
import "../css/blogs.css";
import { useState } from "react";
import blog1 from "../assets/1.png";
import blog2 from "../assets/2.png";
import blog3 from "../assets/pandemic.jpg";
import blog4 from "../assets/4.jpg";
import blog5 from "../assets/5.png";
import blog6 from "../assets/6.jpg";
import blog7 from "../assets/7.png";

const Blogs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePost, setActivePost] = useState(null);

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

  const blogPosts = [
    {
      id: 1,
      title: "Software Engineering",
      date: "April 15, 2024",
      category: "Blog 1",
      image: blog1,
      content: {
        heading: "Software Engineering Core Learnings",
        points: [
          "Learned systematic approaches to problem-solving and project development.",
          "Understood the Software Development Life Cycle (SDLC) from planning to maintenance.",
          "Applied Agile methodology in team-based and solo projects.",
          "Strengthened skills in debugging, version control (Git), and documentation.",
        ],
      },
    },
    {
      id: 2,
      title: "CAPSTONE",
      date: "March 22, 2024",
      category: "Blog 2",
      image: blog2,
      content: {
        heading: '"TUTORIA" — Finding the Right Tutor',
        points: [
          "Developed a web app to match students with tutors based on purpose and preference.",
          "Features included real-time chat, profile ratings, and scheduling.",
          "Used React.js for the frontend and JSON Server as a mock backend.",
          "Focused on UX design to ensure accessibility and ease of use for students.",
        ],
      },
    },
    {
      id: 3,
      title: "PANDEMIC",
      date: "February 10, 2024",
      category: "Blog 3",
      image: blog3,
      content: {
        heading: "Pandemic Era & Online Learning: Adaptation Through Tech",
        points: [
          "Transitioned to fully online learning using laptops and smartphones.",
          "Mastered tools like Google Meet, Zoom, Microsoft Teams, and LMS platforms.",
          "Learned to manage time, self-study, and collaborate remotely on group projects.",
          "Realized the critical role of tech in education accessibility and resilience.",
        ],
      },
    },
    {
      id: 4,
      title: "ECOMMERCE",
      date: "February 10, 2024",
      category: "Blog 4",
      image: blog4,
      content: {
        heading: "E-commerce Website Development",
        points: [
          "Built a functional e-commerce site with shopping cart and product management.",
          "Integrated payment simulation and basic admin panel.",
          "Utilized HTML/CSS/JavaScript, and PHP with MySQL for backend.",
          "Learned about security (e.g., input validation) and database normalization.",
        ],
      },
    },
    {
      id: 5,
      title: "Application Development",
      date: "February 10, 2024",
      category: "Blog 5",
      image: blog5,
      content: {
        heading: "Application Development Highlights",
        points: [
          "Created a mobile-friendly Pokédex app using React and PokéAPI.",
          "Designed and implemented CRUD applications using Firebase and Node.js.",
          "Explored Android app development using Java and XML in Android Studio.",
          "Focused on responsive design and performance optimization.",
        ],
      },
    },
    {
      id: 6,
      title: "ASSEMBLY CODING DAYS",
      date: "February 10, 2024",
      category: "Blog 6",
      image: blog6,
      content: {
        heading: "Throwback to Assembly Language Days",
        points: [
          "Wrote low-level code to understand how computers process instructions.",
          "Used MASM and TASM to create simple arithmetic and control-flow programs.",
          "Gained deep appreciation for higher-level languages after dealing with registers and memory.",
        ],
      },
    },
    {
      id: 7,
      title: "PORTFOLIO",
      date: "February 10, 2024",
      category: "Blog 7",
      image: blog7,
      content: {
        heading: "My Very Last Portfolio — A Summary of My Work",
        points: [
          'Capstone Project – "TutorMatch": Matchmaking platform for students and tutors.',
          "E-commerce Website – Fully functional shopping platform with backend logic.",
          "Pandemic-Era Adaptations – Transition to remote learning and tech reliance.",
          "Pokédex App – Interactive battle app using PokéAPI (React + JSON Server)",
          "Assembly Language Programs – Arithmetic, loops, and conditionals in low-level code.",
          "Android App Project – Basic mobile utilities and UI features.",
          "Design Portfolio – Includes UI mockups, wireframes, and prototypes (Figma).",
          "GitHub Repository – Hosted source codes, commits, and documentation of all major projects.",
          "Personal Website (Portfolio) – Final showcase with links to live projects and demos.",
        ],
      },
    },
  ];

  const openModal = (post) => {
    setActivePost(post);
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActivePost(null);
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = "auto";
  };

  return (
    <section className="blogs" id="blogs">
      <motion.div
        className="blogs-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="blogs-header" variants={itemVariants}>
          <h1>My Blog</h1>
          <div className="underline"></div>
        </motion.div>

        <motion.div className="blogs-intro" variants={itemVariants}>
          <motion.p
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            As a student of Information Technology, my software engineering
            journey has been filled with challenges, growth, and major
            milestones. From coding in Assembly Language to launching
            full-fledged web apps, I've been shaped by every
            experience—including the shift to online learning during the
            pandemic. Here's a look back at my major projects and turning
            points, summarized for reflection and inspiration.
          </motion.p>
        </motion.div>

        <motion.div className="blogs-grid" variants={fadeInVariants}>
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="blog-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
              }}
            >
              <div className="card-image">
                <img src={post.image} alt={post.title} />
                <motion.div
                  className="category-badge"
                  whileHover={{ scale: 1.1 }}
                >
                  {post.category}
                </motion.div>
              </div>
              <div className="card-content">
                <div className="post-date">{post.date}</div>
                <h2>{post.title}</h2>
                <motion.button
                  className="read-more"
                  whileHover={{ scale: 1.05, backgroundColor: "#4f46e5" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(post)}
                >
                  Read
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="blogs-intro" variants={itemVariants}>
          <motion.p
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            This journey has taught me not just how to code, but how to think,
            adapt, and build with purpose. Whether it was learning Assembly
            Language or launching a full React app, every phase was a stepping
            stone toward becoming a confident developer ready for the real
            world.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{activePost?.title}</h2>
              <button className="close-modal" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="modal-content">
              <h3>{activePost?.content.heading}</h3>
              <ul className="content-list">
                {activePost?.content.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blogs;
