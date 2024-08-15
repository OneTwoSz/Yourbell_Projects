import React from 'react';
import './styles/App.css';
import Grid from './components/Grid';
import Controls from './components/Controls';
import useRobot from './hooks/useRobot';

const App = () => {
  const { position, moveForward, rotateLeft, rotateRight } = useRobot();

  return (
    <div className="app">
      <h1>Robot Simulator</h1>
      <Grid position={position} gridSize={5} />
      <Controls
        moveForward={moveForward}
        rotateLeft={rotateLeft}
        rotateRight={rotateRight}
      />
    </div>
  );
};

export default App;
