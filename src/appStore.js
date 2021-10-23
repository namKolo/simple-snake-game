import { createStore } from "./lib/store.js";
import { snakeReducer } from "./snakeReducer";

export const appStore = createStore(snakeReducer);
