import { initGame, updateGame } from "./ui.js";
import { appStore } from "./appStore.js";
import { changeDirection, moveNext } from "./snakeReducer.js";

const SNAKE_SPEED = 150;

const initGameHandlers = () => {
  // Key events
  window.addEventListener("keydown", (e) => {
    appStore.dispatch(changeDirection(e.keyCode));
  });
};

// Game loop update
const step = (t1) => (t2) => {
  if (t2 - t1 > SNAKE_SPEED) {
    appStore.dispatch(moveNext());
    updateGame();
    window.requestAnimationFrame(step(t2));
  } else {
    window.requestAnimationFrame(step(t1));
  }
};

function main() {
  initGameHandlers();
  // Main
  initGame();
  window.requestAnimationFrame(step(0));
}

main();
