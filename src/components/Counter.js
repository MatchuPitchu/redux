// specific hooks to access redux store
// useSelector: you can select a part of state managed by store
// useStore: select whole store
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  // hook returns the dispatch function for Redux store
  const dispatch = useDispatch();
  // pass in an anonymous fn that determines which piece of state you want to extract from store;
  // with useSelector, subscription is automatically set up to the store for this component;
  // if component will be unmounted, subscription is also cleared automatically
  const counter = useSelector((state) => state.counter);

  // dispatch action types
  const incrementHandler = () => dispatch({ type: 'increment' });
  const decrementHandler = () => dispatch({ type: 'decrement' });

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div className={classes.btns}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
