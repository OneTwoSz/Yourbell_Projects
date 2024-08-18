import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import InteractiveGuide from './components/InteractiveGuide';
import Grid from './components/Grid';
import Controls from './components/Controls';
import Footer from './components/Footer';
import useRobot from './hooks/useRobot';

const App = () => {
  const { position, moveForward, rotateLeft, rotateRight } = useRobot();

  const scrollToElement = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header />
      <Hero onClick={() => scrollToElement('simulator')} />
      <main>
        <section id="guide">
          <InteractiveGuide />
        </section>
        <section id="simulator">
          <h1>Robot Simulator</h1>
          <Grid position={position} gridSize={5} />
          <Controls
            moveForward={moveForward}
            rotateLeft={rotateLeft}
            rotateRight={rotateRight}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
