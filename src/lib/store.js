/**
 *@typedef Reducer  (state: Object, action: Object)  => state
 */

/**
 * Simple Redux store
 * @param {Reducer} reducer
 * @returns
 */
export const createStore = (reducer) => {
  let listeners = [];
  let currentState = reducer(undefined, {});

  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = reducer(currentState, action);

      listeners.forEach((listener) => {
        listener();
      });
    },
    subscribe: (newListener) => {
      listeners.push(newListener);

      const unsubscribe = () => {
        listeners = listeners.filter((l) => l !== newListener);
      };

      return unsubscribe;
    },
  };
};
