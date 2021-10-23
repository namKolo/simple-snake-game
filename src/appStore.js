import { createStore } from "./lib/store.js";
import { snakeReducer } from "./snakeReducer.js";

export const appStore = createStore(snakeReducer);

// DEBUG
appStore.subscribe(() => console.log(appStore.getState()));
