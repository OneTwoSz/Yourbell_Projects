import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>Psst!</p>
        <p>I'm a quick learner, and if you give me some HTML and CSS, I'll sling them into stunning digital experiences.I am ready to make an impact at Bellroy!</p>
        <a href="https://www.sabarivs.com" target="_blank" rel="noopener noreferrer">
          <button className="btn">
            <strong>Portfolio</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
