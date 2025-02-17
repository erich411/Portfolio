
import "../css/hero.css"; 
import profileImg from "../assets/erich.jfif"; 
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I'm Erich Ramos</h1>
        <p>A passionate Professional Front-End Developer crafting amazing digital experiences.</p>
       

        <div className="hero-socials">
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={profileImg} alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
