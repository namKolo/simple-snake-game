import { renderGame } from "./ui.js";
import { appStore } from "./appStore.js";
import { changeDirection, moveNext } from "./snakeReducer.js";

const SNAKE_SPEED = 150;

const initGameHandlers = () => {
  // Key events
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        appStore.dispatch(changeDirection("NORTH"));
        break;
      case "ArrowLeft":
        appStore.dispatch(changeDirection("WEST"));
        break;
      case "ArrowDown":
        appStore.dispatch(changeDirection("SOUTH"));
        break;
      case "ArrowRight":
        appStore.dispatch(changeDirection("EAST"));
        break;
    }
  });
};

// Game loop update
const step = (t1) => (t2) => {
  if (t2 - t1 > SNAKE_SPEED) {
    appStore.dispatch(moveNext());
    renderGame();
    window.requestAnimationFrame(step(t2));
  } else {
    window.requestAnimationFrame(step(t1));
  }
};

function main() {
  initGameHandlers();
  // Main
  renderGame();
  window.requestAnimationFrame(step(0));
}

main();
