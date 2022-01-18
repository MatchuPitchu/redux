import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

// with TypeScript: good approach to use general Enums for action types

// reducer function
const reducerFn = (state = initialState, action) => {
  if (action.type === 'increment') {
    // Redux replaces existing state, NOT merges new state into prev state
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }

  if (action.type === 'increase') {
    return { counter: state.counter + action.value, showCounter: state.showCounter };
  }

  if (action.type === 'decrement') {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }

  if (action.type === 'toggle') {
    return { counter: state.counter, showCounter: !state.showCounter };
  }

  return state;
};

// create store and point at reducer fn
const store = createStore(reducerFn);

export default store;
