export const BOARD_ROWS = 25;
export const BOARD_COLS = 25;
export const CellTypes = {
  Snake: 0,
  Food: 1,
  Blank: 2,
};

export const Direction = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};

export const CellClassMapping = {
  0: "snake-cell",
  1: "food-cell",
  2: "blank-cell",
};
export const DirectionClassMapping = {
  [Direction.left]: "left",
  [Direction.right]: "right",
  [Direction.down]: "down",
  [Direction.up]: "up",
};

export const DirectionMapping = {
  [Direction.left]: { x: 0, y: -1 },
  [Direction.right]: { x: 0, y: 1 },
  [Direction.down]: { x: 1, y: 0 },
  [Direction.up]: { x: -1, y: 0 },
};

export const ValidKeys = {
  37: true,
  38: true,
  39: true,
  40: true,
};
