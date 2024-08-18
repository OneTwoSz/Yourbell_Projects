import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
        <h1 className="logo">Robot Simulator</h1>
      </div>
      <nav className={`side-nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#simulator" onClick={closeMenu}>Simulator</a></li>
          <li><a href="#guide" onClick={closeMenu}>Guide</a></li>
        </ul>
      </nav>
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
