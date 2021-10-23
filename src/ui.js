import { appStore } from "./appStore.js";

const renderSnake = (snake, parentNode) => {
  snake.map((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    parentNode.appendChild(snakeElement);
  });
};

const renderFood = (food, parentNode) => {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  parentNode.appendChild(foodElement);
};

export const renderGame = () => {
  const state = appStore.getState();

  const gameBoard = document.getElementById("game-board");
  // reset gameboard
  gameBoard.innerHTML = "";

  const { snake, food } = state;

  // render Snake/Food
  renderSnake(snake, gameBoard);
  renderFood(food, gameBoard);
};
