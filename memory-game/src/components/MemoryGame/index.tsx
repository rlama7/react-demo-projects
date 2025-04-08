import React, { useState, useEffect } from 'react';
import type { Tile } from './types';
import { generateTiles } from './utils';
import GameBoard from './GameBoard';

const MAX_MOVES = 5;
const DEFAULT_GRID = 4;

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState<number>(DEFAULT_GRID);
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [flippedTiles, setFlippedTiles] = useState<Tile[]>([]);
  const [movesLeft, setMovesLeft] = useState<number>(MAX_MOVES);
  const [wins, setWins] = useState<number>(0);
  const [gamePlayed, setGamesPlayed] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [hasWon, setHasWon] = useState<boolean>(false);

  useEffect(() => {
    resetGame();
  }, [gridSize]);

  const resetGame = () => {
    setTiles(generateTiles(gridSize));
    setFlippedTiles([]);
    setMovesLeft(MAX_MOVES);
    setIsGameOver(false);
    setHasWon(false);
  };

  const handleTileClick = (tile: Tile) => {
    if (
      tile.isFlipped ||
      tile.isMatched ||
      isGameOver ||
      flippedTiles.length === 2
    )
      return;

    const updatedTiles = tiles.map((t) =>
      t.id === tile.id ? { ...t, isFlipped: true } : t
    );

    const updatedFlipped = [...flippedTiles, tile];

    setTiles(updatedTiles);
    setFlippedTiles(updatedFlipped);

    if (updatedFlipped.length === 2) {
      setTimeout(() => {
        const [first, second] = updatedFlipped;

        if (first.emoji === second.emoji) {
          const matchedTiles = updatedTiles.map((t) =>
            t.emoji === first.emoji ? { ...t, isMatched: true } : t
          );
          setTiles(matchedTiles);
          setFlippedTiles([]);

          const allMatched = matchedTiles.every((t) => t.isMatched);

          if (allMatched) {
            setWins((prev) => prev + 1);
            setIsGameOver(true);
            setHasWon(true);
            setGamesPlayed((prev) => prev + 1);
          }
        } else {
          setMovesLeft((prev) => {
            const next = prev - 1;
            if (next === 0) {
              setIsGameOver(true);
              setHasWon(false);
              setGamesPlayed((prev) => prev + 1);
            }
            return next;
          });

          const revertedTiles = updatedTiles.map((t) =>
            t.id === first.id || tile.id === second.id
              ? { ...tile, isFlipped: true }
              : t
          );
          setTimeout(() => setTiles(revertedTiles), 300);
          setFlippedTiles([]);
        }
      }, 1000);
    }
  };

  const handleGridChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const size = Math.min(8, Math.max(2, parseInt(e.target.value)));
    setGridSize(size);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">🎯 Memory Game</h1>

      <div className="mb-4">
        <label htmlFor="" className="mr-2 font-semibold">
          Grid Size (2 - 8)
        </label>
        <input
          type="number"
          min="2"
          max="8"
          value={gridSize}
          onChange={handleGridChange}
          className="border rounded p-1 w-16 text-center"
        />
      </div>
      <div className="mb-2 font-medium">
        Moves Left: <span>{movesLeft}</span>
      </div>
      <div className="mb-4 font-medium">
        Score:{' '}
        <span>
          {wins}/{gamePlayed || 1}
        </span>
      </div>

      {isGameOver && (
        <div className="mb-4 text-xl text-red-600 font-bold">
          {hasWon ? '🎉 You Win!' : '💥 Game Over!'}
        </div>
      )}

      <GameBoard
        tiles={tiles}
        gridSize={gridSize}
        isGameOver={isGameOver}
        onTileClick={handleTileClick}
      />

      <button
        className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        onClick={resetGame}
      >
        🔄 Reset Game
      </button>
    </div>
  );
};

export default MemoryGame;
