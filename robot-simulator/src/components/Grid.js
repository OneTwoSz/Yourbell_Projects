import React from 'react';
import { ReactComponent as RobotIcon } from '../assets/robot.svg'; 

const Grid = ({ position, gridSize }) => {
  const getRotation = (direction) => {
    switch (direction) {
      case 'N':
        return 'rotate(0deg)';
      case 'E':
        return 'rotate(90deg)';
      case 'S':
        return 'rotate(180deg)';
      case 'W':
        return 'rotate(270deg)';
      default:
        return 'rotate(0deg)';
    }
  };

  return (
    <div className="grid">
      {[...Array(gridSize)].map((_, rowIndex) => (
        <div key={rowIndex} className="row">
          {[...Array(gridSize)].map((_, colIndex) => (
            <div
              key={colIndex}
              className={`cell ${
                position.x === colIndex && position.y === rowIndex ? 'robot' : ''
              }`}
            >
              {position.x === colIndex && position.y === rowIndex && (
                <RobotIcon
                  style={{ transform: getRotation(position.dir) }}
                  className="robot-svg"
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
