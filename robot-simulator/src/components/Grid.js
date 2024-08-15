import React from 'react';

const Grid = ({ position, gridSize }) => {
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
              {position.x === colIndex && position.y === rowIndex
                ? position.dir
                : ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
