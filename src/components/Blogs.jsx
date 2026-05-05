import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "../css/blogs.css";

import day1Photo1 from "../assets/day1/day1.png";
import day1Photo2 from "../assets/day1/day1.1.png";
import day2Photo1 from "../assets/day2/day2.png";
import day2Photo2 from "../assets/day2/day2.1.png";
import day3Photo1 from "../assets/day3/day3.png";
import day3Photo2 from "../assets/day3/day3.1.png";
import day4Photo1 from "../assets/day4/day4.png";
import day4Photo2 from "../assets/day4/day4.1.png";
import day5Photo1 from "../assets/day5/day5.png";
import day5Photo2 from "../assets/day5/day5.1.png";
import day6Photo1 from "../assets/day6/day6.png";
import day6Photo2 from "../assets/day6/day6.1.png";
import day7Photo1 from "../assets/day7/day7.png";

const tourBlogs = [
  {
    day: 1,
    title: "Strolling Manila",
    summary:
      "We explored Manila throughout the day and visited Rizal Park in the afternoon. I saw tall buildings, clean streets, and public spaces that showed a different side of the city.",
    learnings:
      "I learned that greatness often comes with sacrifice. Jose Rizal gave his life for peace and for the Filipino people, yet he was accused of rebellion and executed.",
    reflection:
      "One of the most meaningful parts of my experience was visiting Rizal Park. Standing in a place where history unfolded made me reflect on the sacrifices of national heroes, especially Jose Rizal.",
    images: [day1Photo1, day1Photo2],
  },
  {
    day: 2,
    title: "Learning Mechanics",
    summary:
      "At Hytec and OpenText, I tested equipment and gained new knowledge about machines, future technologies, and possible career paths for students.",
    learnings:
      "I learned that new technologies can be useful for the future, but they can also change the workforce because robots and automation may replace some human jobs.",
    reflection:
      "Discovering new things inside the companies was refreshing. The visits helped me enjoy learning while thinking more seriously about my future career.",
    images: [day2Photo1, day2Photo2],
  },
  {
    day: 3,
    title: "Discovering Opportunities in Manila's IT Industry",
    summary:
      "We toured Teleperformance and explored different areas of the company. At MMDA, we observed how traffic is monitored and how each lane is watched and managed.",
    learnings:
      "I learned that every step and decision can matter, especially in busy environments. Being careful and aware can help prevent danger and lead to better outcomes.",
    reflection:
      "I noticed how teams work together to solve real-world problems using modern technologies. Developers, designers, and system administrators all play important roles, and their coordination is essential for success.",
    images: [day3Photo1, day3Photo2],
  },
  {
    day: 4,
    title: "Another Day, Another Discovery",
    summary:
      "Toppeg gave us the opportunity to draw our own characters, while Microsourcing shared insights about how jobs can follow different paths in the industry.",
    learnings:
      "I learned that creating a good animated character and producing multiple frames per second can be difficult, tiring, and limited by available resources.",
    reflection:
      "My exposure to IT companies in Manila gave me excitement and a sense of responsibility. It helped me understand what is expected in the industry and encouraged me to prepare academically and professionally.",
    images: [day4Photo1, day4Photo2],
  },
  {
    day: 5,
    title: "Enjoying the Life",
    summary:
      "At People's Park, we learned how rigorous training helps soldiers become brave, strong, and disciplined both emotionally and physically. We also visited statues and other meaningful places.",
    learnings:
      "Visiting different places helps build a broader perspective by showing different cultures, environments, and ways of life. These experiences deepen appreciation for history and local traditions.",
    reflection:
      "Visiting different places gave me a deeper understanding of how much there is to learn beyond the classroom. Each place offered something unique, whether culture, history, or how people live and work.",
    images: [day5Photo1, day5Photo2],
  },
  {
    day: 6,
    title: "Coldest Days and Hottest Nights",
    summary:
      "We bought souvenirs for our families and spent time sightseeing at Bell Church and the Strawberry Farm.",
    learnings:
      "These visits can inspire people to pursue goals and explore opportunities, especially in their chosen career paths. Learning through exposure makes every visit meaningful and impactful.",
    reflection:
      "Visiting new places contributed to my personal growth by building confidence and independence. It also motivated me to explore more opportunities for my future.",
    images: [day6Photo1, day6Photo2],
  },
  {
    day: 7,
    title: "The View of Great Places",
    summary:
      "On the last day of the tour, we visited many beautiful places, took pictures, rode a horse, and rested in our dorms before our flight.",
    learnings:
      "I noticed that unfamiliar places challenged me to step out of my comfort zone. I had to adjust to new environments, communicate with different people, and become more aware of my surroundings.",
    reflection:
      "I learned the value of time and opportunity. Not everyone gets to visit different places, so I became more mindful of every moment and more motivated to use opportunities that help me grow personally and professionally.",
    images: [day7Photo1],
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { y: 28, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const BlogGallery = memo(function BlogGallery({ day, title, images }) {
  return (
    <div className={`tour-gallery ${images.length === 1 ? "single-photo" : ""}`}>
      {images.map((image, index) => (
        <figure className="tour-photo" key={image}>
          <img
            src={image}
            alt={`Day ${day} ${title} photo ${index + 1}`}
            loading="lazy"
            width="640"
            height="420"
          />
        </figure>
      ))}
    </div>
  );
});

const BlogEntry = memo(function BlogEntry({ blog, index, reduceMotion }) {
  const align = index % 2 === 0 ? "left" : "right";

  return (
    <motion.article
      className={`tour-card align-${align}`}
      variants={cardVariants}
      whileHover={reduceMotion ? undefined : { y: -6 }}
    >
      <div className="tour-marker" aria-hidden="true">
        <span>{String(blog.day).padStart(2, "0")}</span>
      </div>

      <div className="tour-card-body">
        <div className="tour-copy">
          <div className="tour-eyebrow">Day {blog.day}</div>
          <h2>{blog.title}</h2>

          <div className="tour-notes">
            <section>
              <h3>Summary of Activities</h3>
              <p>{blog.summary}</p>
            </section>
            <section>
              <h3>Key Learnings</h3>
              <p>{blog.learnings}</p>
            </section>
            <section>
              <h3>Personal Reflection</h3>
              <p>{blog.reflection}</p>
            </section>
          </div>
        </div>

        <BlogGallery day={blog.day} title={blog.title} images={blog.images} />
      </div>
    </motion.article>
  );
});

const Blogs = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="blogs" id="blogs">
      <motion.div
        className="blogs-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        variants={sectionVariants}
      >
        <motion.header className="blogs-header" variants={cardVariants}>
          <p className="blogs-kicker">7-day educational tour</p>
          <h1>Tour Blog</h1>
          <div className="underline"></div>
          <p>
            A day-by-day reflection on the places, companies, lessons, and
            memorable moments from our educational tour.
          </p>
        </motion.header>

        <motion.div className="tour-timeline" variants={sectionVariants}>
          {tourBlogs.map((blog, index) => (
            <BlogEntry
              key={blog.day}
              blog={blog}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Blogs;
