import React, { useState } from 'react';

const steps = [
  "Welcome to the Robot Simulator! Let's get started.",
  "Step 1: The robot can face one of four directions: North, East, South, or West. You can see its head pointing in the direction it's facing.",
  "Step 2: Use the 'Rotate Left' button to rotate the robot counterclockwise. Notice how the robot's head changes direction.",
  "Step 3: Use the 'Rotate Right' button to rotate the robot clockwise. Again, observe how the robot's head turns to indicate the new direction.",
  "Step 4: Now, use the 'Move Forward' button. The robot will move one step in the direction its head is facing. For example, if the robot's head is facing East, it will move to the right.",
  "Step 5: Experiment with different combinations of rotating and moving forward. You'll see that the robot always moves in the direction its head is pointing.",
  "You're all set! Try navigating the robot around the grid using the controls."
];

const InteractiveGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));

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
