import "../css/contacts.css";

const Contacts = () => {
  return (
    <section className="contacts-section" id="contacts">
      <div className="contacts-content">
        <h1>Contact Me</h1>
        <p>Hi! I’m Erich, feel free to reach out if you want to collaborate or discuss anything tech-related.</p>

        <h1>Get in Touch</h1>
        <a href="https://www.facebook.com/tiffa.lockhart.3114/"><i className="fa-brands fa-square-facebook generalicon"></i></a>
        <a href="https://x.com/Remyuy12"><i className="fa-brands fa-square-twitter generalicon"></i></a>
        <a href="https://www.instagram.com/erichuyramos/"><i className="fa-brands fa-square-instagram generalicon"></i></a>

        <h1>Availability</h1>
        <p>- Available for software development internships or freelance web projects.</p>
        <p>- Open to tech talk, mentorship, or any project collaboration.</p>

        <h1>Message</h1>
        <p>
          Whether you're a fellow student, developer, or just someone interested in technology, I'd love to connect and share ideas!
        </p>
      </div>
    </section>
  );
};

export default Contacts;