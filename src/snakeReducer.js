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

/**
 *  Reducer
 */
const getInitialState = () => ({
  snake: [{ x: 2, y: 2 }],
  food: { x: 4, y: 4 },
  direction: "NORTH",
});

export function snakeReducer(state = getInitialState(), action = {}) {
  switch (action.type) {
    case CHANGE_DIRECTION: {
      state.direction = action.direction;
      return state;
    }

    case MOVE: {
      return state;
    }

    default: {
      return state;
    }
  }
}
