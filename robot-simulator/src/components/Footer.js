import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Robot Simulator. All rights reserved.</p>
        <nav className="footer-nav">
          <ul>
            <li><a href="#simulator">Simulator</a></li>
            <li><a href="#guide">Guide</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
