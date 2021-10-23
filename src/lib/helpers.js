import { BOARD_COLS, BOARD_ROWS } from "../constants.js";

export function createAndFillTwoDArray({ rows, columns, defaultValue }) {
  return Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => defaultValue)
  );
}

export const rnd = (min) => (max) => Math.floor(Math.random() * max) + min;
export const dropLast = (arr) => {
  arr.pop();
  return arr;
};
export const pointEq = (pos1) => (pos2) =>
  pos1.x === pos2.x && pos1.y === pos2.y;

export const nextPoint = (pos1) => (pos2) => ({
  x: mod(BOARD_COLS)(pos1.x + pos2.x),
  y: mod(BOARD_ROWS)(pos1.y + pos2.y),
});

export const mod = (x) => (y) => ((y % x) + x) % x;
export const randomPos = () => ({
  x: rnd(0)(BOARD_COLS - 1),
  y: rnd(0)(BOARD_ROWS - 1),
});
