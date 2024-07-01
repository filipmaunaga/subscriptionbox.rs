import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faBox,
  faGears,
  faShop,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src="/icons/box.svg" alt="logo" className="logo-image" />
        </Link>
      </div>
      <div className="hamburger" onClick={toggleNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faHouse} />
          <p>Home</p>
        </Link>
        <Link to="/browse-boxes" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBox} />
          <p>Browse Boxes</p>
        </Link>
        <Link to="/browse-providers" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faShop} />
          <p>Browse Providers</p>
        </Link>
        <Link to="/settings" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faGears} />
          <p>Settings</p>
        </Link>
        <Link to="/cart" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faCartShopping} />
          <p>Cart</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
