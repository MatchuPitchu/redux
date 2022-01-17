import { createStore } from 'redux';

// reducer function
const reducerFn = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return { counter: state.counter + 1 };
  }
  if (action.type === 'decrement') {
    return { counter: state.counter - 1 };
  }
  return state;
};

// create store and point at reducer fn
const store = createStore(reducerFn);

export default store;
