import { useState } from 'react';

const DIRECTIONS = ['N', 'E', 'S', 'W'];
const GRID_SIZE = 5;

const useRobot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, dir: 'N' });

  const moveForward = () => {
    setPosition(prev => {
      let { x, y, dir } = prev;
      switch (dir) {
        case 'W':
          y = Math.max(0, y - 1);
          break;
        case 'S':
          x = Math.min(GRID_SIZE - 1, x + 1);
          break;
        case 'E':
          y = Math.min(GRID_SIZE - 1, y + 1);
          break;
        case 'N':
          x = Math.max(0, x - 1);
          break;
        default:
          break;
      }
      return { x, y, dir };
    });
  };

  const rotate = (direction) => {
    setPosition(prev => {
      const currentDirIndex = DIRECTIONS.indexOf(prev.dir);
      const newDirIndex =
        direction === 'left'
          ? (currentDirIndex - 1 + DIRECTIONS.length) % DIRECTIONS.length
          : (currentDirIndex + 1) % DIRECTIONS.length;
      return { ...prev, dir: DIRECTIONS[newDirIndex] };
    });
  };

  return {
    position,
    moveForward,
    rotateLeft: () => rotate('left'),
    rotateRight: () => rotate('right'),
  };
};

export default useRobot;
