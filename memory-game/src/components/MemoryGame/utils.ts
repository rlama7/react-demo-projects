import { Tile } from './types';

export const FRUIT_EMOJIS = ['🍎', '🍌', '🍇', '🍓', '🍉', '🍒', '🥝', '🍍'];

export const shuffleArray = <T>(array: T[]): T[] =>
  [...array].sort(() => Math.random() - 0.5);

export const generateTiles = (gridSize: number): Tile[] => {
  const totalTiles = gridSize * gridSize;
  const pairCount = totalTiles / 2;
  const emojis = shuffleArray(FRUIT_EMOJIS.concat(FRUIT_EMOJIS)).slice(
    0,
    pairCount
  );
  const pairedEmojis = shuffleArray([...emojis, ...emojis]);

  return pairedEmojis.map((emoji, index) => ({
    id: index,
    emoji,
    isFlipped: false,
    isMatched: false,
  }));
};
