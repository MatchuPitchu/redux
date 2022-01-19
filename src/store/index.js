import { createStore } from 'redux';
// simplify redux using with createSlice (recommended) or createReducer fn;
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

// 1) State slice with Reducer fn with Redux Toolkit
// with this fn you can create different slices of the global state to make code more maintainable
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // include all reducers methods this slice needs;
  // all methods could have 2 parameters: state, action;
  // a) with this methods, you can dispatch actions without using if statements like in reducer fn bellow
  // in fn body, you are allowed to mutate the state (normally NEVER DO IT) because Redux Toolkit
  // uses iternally "Immer" that detects when state should be mutated and clones existing state,
  // keeps all the state that you are not editing and overwrites desired piece of state in an immutable way;
  // b) createSlice creates "action creator" methods for you that return unique action identifiers for different reducers
  // (e.g. when you call later counterSlice.actions.yourReducerName() Redux Toolkit returns an action obj
  // of this shape: { type: 'some unique identifier' })
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; // payload is fixed property name of Redux Toolkit
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// 2) Reducer with React Redux and without Redux Toolkit
// reducer function
// with TypeScript: good approach to use general Enums for action types
const reducerFn = (state = initialState, action) => {
  if (action.type === 'increment') {
    // Redux replaces existing state, NOT merges new state into prev state
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }

  if (action.type === 'decrement') {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }

  if (action.type === 'increase') {
    return { counter: state.counter + action.value, showCounter: state.showCounter };
  }

  if (action.type === 'toggle') {
    return { counter: state.counter, showCounter: !state.showCounter };
  }

  return state;
};

// for 2) create store and point at reducer fn
// const store = createStore(reducerFn);

// for 1) configureStore creates store like createStore of Redux,
// but can merge multiple reducers into one reducer;
// pass in a configuration obj with "reducer" prop that can have obj of
// different key reducer pairs of your choice to include multiple reducers;
// if you have only one reducer, then you don't need this obj
// attention: you point at "reducer", even if you write "reducers" in createSlice()
const store = configureStore({
  reducer: counterSlice.reducer,
  // reducer: { counter: counterSlice.reducer },
});

// export action dispatchers that you can use it in other components to update the state
export const counterActions = counterSlice.actions;

export default store;
