import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import menuIcon from "../../assets/menu.svg";

/**
 * Composant Header
 * @returns {React.Element}
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo Wealth-Health" />
        <h2>HRNet</h2>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        <img src={menuIcon} alt="Menu" />
      </button>

      <nav className={`header-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Create a new employee</Link>
        <Link to="/employees" onClick={closeMenu}>View Current Employees</Link>
      </nav>
    </header>
  );
};

export default Header;
