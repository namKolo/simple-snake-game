import {
  BOARD_COLS,
  BOARD_ROWS,
  CellTypes,
  Direction,
  DirectionMapping,
  ValidKeys,
} from "./constants.js";
import { createAndFillTwoDArray, randomPos, nextPoint } from "./lib/helpers.js";

/**
 * ACTIONS
 */
const CHANGE_DIRECTION = "CHANGE_DIRECTION";
const MOVE = "MOVE";
export const changeDirection = (direction) => ({
  type: CHANGE_DIRECTION,
  direction,
});
export const moveNext = () => ({ type: MOVE });

// reducer helpers
const getNextHeadPos = (state) =>
  nextPoint(state.snake[0])(DirectionMapping[state.direction]);

const doesCellHasCorrectType = (type) => (board, pos) =>
  board[pos.x][pos.y] === type;
const isFood = doesCellHasCorrectType(CellTypes.Food);
const isBlank = doesCellHasCorrectType(CellTypes.Blank);
const isSnake = doesCellHasCorrectType(CellTypes.Snake);
const setCell = (type) => (board, pos) => {
  board[pos.x][pos.y] = type;
  return board;
};
const setFood = setCell(CellTypes.Food);
const setBlank = setCell(CellTypes.Blank);
const setSnake = setCell(CellTypes.Snake);

/**
 *  Reducer
 */
const getInitialState = () => ({
  snake: [{ x: 2, y: 2 }], // [Head, Head-1, ... , Tail]
  board: createAndFillTwoDArray({
    rows: BOARD_ROWS,
    columns: BOARD_COLS,
    defaultValue: CellTypes.Blank,
  }),
  gameOver: false,

  direction: Direction.right,
  // tmp value
  _nextDirection: null,
});

export function snakeReducer(state = getInitialState(), action = {}) {
  switch (action.type) {
    case CHANGE_DIRECTION: {
      const direction = action.direction;
      const difference = Math.abs(state.direction - action.direction);
      console.log({ difference });
      if (ValidKeys[direction] && difference !== 0 && difference !== 2) {
        state.direction = direction;
      }

      return state;
    }

    case MOVE: {
      const { board, snake } = state;
      const nextHeadPos = getNextHeadPos(state);

      // Game Crash
      if (isSnake(board, nextHeadPos)) {
        return {
          ...getInitialState(),
          gameOver: true,
        };
      }

      // Check if hit food or not
      if (isFood(board, nextHeadPos) || snake.length === 1) {
        let foodPos;
        do {
          foodPos = randomPos();
        } while (!isBlank(board, foodPos));
        setFood(board, foodPos);
      } else {
        // otherwise just move next
        setBlank(board, snake.pop());
      }

      // update snake
      snake.unshift(nextHeadPos);
      setSnake(board, nextHeadPos);

      return {
        ...state,
        board,
        snake,
      };
    }

    default: {
      return state;
    }
  }
}
