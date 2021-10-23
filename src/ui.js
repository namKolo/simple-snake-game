import { appStore } from "./appStore.js";
import {
  BOARD_COLS,
  BOARD_ROWS,
  CellClassMapping,
  DirectionClassMapping,
} from "./constants.js";
import { pointEq } from "./lib/helpers.js";

const getSnakeHeadClass = (direction) => {
  return `snake-head ${DirectionClassMapping[direction]}`;
};

const getCellClass = (boardValue, { snakeHead, direction }) => {
  const value =
    `cell ${CellClassMapping[boardValue]}` +
    (snakeHead === true ? ` ${getSnakeHeadClass(direction)}` : "");
  console.log(value);
  return value;
};

export const initGame = () => {
  const state = appStore.getState();

  const gameBoard = document.getElementsByClassName("snake-board")[0];

  gameBoard.style.width = `${30 * BOARD_ROWS}px`;
  gameBoard.style.height = `${30 * BOARD_COLS}px`;

  const { board } = state;

  board.map((row) =>
    row.map((boardValue) => {
      const cellElement = document.createElement("div");
      cellElement.className = getCellClass(boardValue, {});
      gameBoard.appendChild(cellElement);
    })
  );
};

export const updateGame = () => {
  const state = appStore.getState();
  const { board, snake, direction } = state;
  const cells = document.getElementsByClassName("cell");

  board.map((row, rowIndex) =>
    row.map((boardValue, colIndex) => {
      const snakeHead = snake[0];
      const cellIndex = rowIndex * BOARD_ROWS + colIndex;

      cells[cellIndex].className = getCellClass(boardValue, {
        snakeHead: pointEq(snakeHead)({ x: rowIndex, y: colIndex }),
        direction,
      });
    })
  );
};
