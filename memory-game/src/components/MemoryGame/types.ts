export type Tile = {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
};

export interface MemoryGameState {
  titles: Tile[];
  flippedTiles: Tile[];
  movesLeft: number;
  gridSize: number;
  wins: number;
  totalGames: number;
  isGameOver: boolean;
  hasWon: boolean;
}
