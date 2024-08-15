import React, { useState } from 'react';

const steps = [
  "Welcome to the Robot Simulator! Let's get started.",
  "Step 1: Use the 'Rotate Left' button to change the robot's direction counterclockwise.",
  "Step 2: Use the 'Rotate Right' button to change the robot's direction clockwise.",
  "Step 3: Use the 'Move Forward' button to move the robot one step in the direction it's facing.",
  "Step 4: Watch the robot move around the grid as you control it!",
  "You're all set! Try experimenting with different movements and rotations."
];

const InteractiveGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="interactive-guide">
      <h2>Interactive Guide</h2>
      <p>{steps[currentStep]}</p>
      <div className="guide-controls">
        <button onClick={prevStep} disabled={currentStep === 0}>
          Previous
        </button>
        <button onClick={nextStep} disabled={currentStep === steps.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default InteractiveGuide;
