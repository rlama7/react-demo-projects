import React from 'react';
import { Tile } from './types';

interface GameBoardProps {
  tiles: Tile[];
  gridSize: number;
  isGameOver: boolean;
  onTileClick: (tile: Tile) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({
  tiles,
  gridSize,
  isGameOver,
  onTileClick,
}) => {
  return (
    <div
      className="grid gap-2 justify-center"
      style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(40px, 1fr)` }}
    >
      {tiles.map((tile) => (
        <button
          key={tile.id}
          className={`h-16 w-16 text-2xl flex items-center justify-center rounded shadow transitition ${
            tile.isMatched
              ? 'bg-green-400'
              : tile.isFlipped
              ? 'bg-white'
              : 'bg-blue-300'
          }`}
          onClick={() => onTileClick(tile)}
          disabled={tile.isMatched || isGameOver}
        >
          {tile.isFlipped || tile.isMatched ? tile.emoji : '❓'}
        </button>
      ))}
    </div>
  );
};

export default GameBoard;
