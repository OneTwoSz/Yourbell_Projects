import React from 'react';
import { ReactComponent as RobotIcon } from '../assets/robot.svg';

const Grid = ({ position, gridSize }) => {
  const getRotation = (direction) => {
    const rotations = {
      N: 'rotate(0deg)',
      E: 'rotate(90deg)',
      S: 'rotate(180deg)',
      W: 'rotate(270deg)',
    };
    return rotations[direction] || 'rotate(0deg)';
  };

  return (
    <div className="grid">
      {Array.from({ length: gridSize }).map((_, rowIndex) => (
        <div key={rowIndex} className="row">
          {Array.from({ length: gridSize }).map((_, colIndex) => {
            const isRobotPosition = position.x === colIndex && position.y === rowIndex;
            return (
              <div key={colIndex} className={`cell ${isRobotPosition ? 'robot' : ''}`}>
                {isRobotPosition && (
                  <RobotIcon
                    style={{ transform: getRotation(position.dir) }}
                    className="robot-svg"
                  />
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
