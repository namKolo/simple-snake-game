import { renderGame } from "./ui";
import { appStore } from "./appStore";

const SNAKE_SPEED = 150;

const initGameHandlers = () => {
  // Key events
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "w":
      case "h":
      case "ArrowUp":
        appStore.dispatch(createDirection("NORTH"));
        break;
      case "a":
      case "j":
      case "ArrowLeft":
        appStore.dispatch(createDirection("WEST"));
        break;
      case "s":
      case "k":
      case "ArrowDown":
        appStore.dispatch(createDirection("SOUTH"));
        break;
      case "d":
      case "l":
      case "ArrowRight":
        appStore.dispatch(createDirection("EAST"));
        break;
    }
  });
};

// Game loop update
const step = (t1) => (t2) => {
  if (t2 - t1 > SNAKE_SPEED) {
    store.dispatch({ type: "MOVE" });
    draw();
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
