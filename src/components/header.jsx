import "../css/Header.css";
import logo from "../assets/logo.png"; 
import { useState } from "react";

const Header = () => {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <img 
        src={logo} 
        alt="Logo" 
        className="logo" 
        onClick={toggleMenu} 
      />
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a></li>
          <li><a href="#projects" onClick={(e) => handleScroll(e, "projects")}>Projects</a></li>
          <li><a href="#blogs" onClick={(e) => handleScroll(e, "blogs")}>Blogs</a></li>
          <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
