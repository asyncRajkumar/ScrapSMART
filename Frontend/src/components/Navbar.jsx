import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle link clicks and close the menu
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <div className="navbar">
      <div className="logo">scrapSMART</div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link
          to="about"
          smooth={true}
          duration={1000}
          onClick={handleLinkClick} // Close menu on click
        >
          About Us
        </Link>
        <Link
          to="service"
          smooth={true}
          duration={1000}
          onClick={handleLinkClick} // Close menu on click
        >
          Service
        </Link>
        <Link
          to="/prize"
          onClick={() => {
            navigate("/prize");
            handleLinkClick(); // Close menu on click
          }}
        >
          Track Prize
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1000}
          onClick={handleLinkClick} // Close menu on click
        >
          Contact
        </Link>
      </div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </div>
  );
};

export default Navbar;