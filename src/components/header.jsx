import "../css/header.css";
import logo from "../assets/logo.png";                        
import { useState } from "react";
import { Link } from "react-router-dom"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Blogs</a></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
