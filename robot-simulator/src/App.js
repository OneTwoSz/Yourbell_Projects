import React from 'react';
import './styles/App.css';
import Hero from './components/Hero';
import InteractiveGuide from './components/InteractiveGuide';
import Grid from './components/Grid';
import Controls from './components/Controls';
import useRobot from './hooks/useRobot';

const App = () => {
  const { position, moveForward, rotateLeft, rotateRight } = useRobot();

  const scrollToSimulator = () => {
    document.getElementById('simulator').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Hero onClick={scrollToSimulator} />
      <InteractiveGuide />
      <div id="simulator">
        <h1>Robot Simulator</h1>
        <Grid position={position} gridSize={5} />
        <Controls
          moveForward={moveForward}
          rotateLeft={rotateLeft}
          rotateRight={rotateRight}
        />
      </div>
    </div>
  );
};

export default App;
