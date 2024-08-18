import React from 'react';

const Hero = ({ onClick }) => {
  return (
    <div className="hero">
      <h1>Welcome to the Robot Simulator</h1>
      <p className="hero-text-box">Test your robot navigation skills on a 5x5 grid.</p>
      <button onClick={onClick}>Start Simulation</button>
    </div>
  );
};

export default Hero;
