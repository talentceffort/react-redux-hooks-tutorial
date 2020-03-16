import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT } from '../modules/counter';

const Counter = ({ onIncrease, onDecrease }) => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch()

  onIncrease = () => {
    dispatch({
      type: INCREMENT
    })
  }

  onDecrease = () => {
    dispatch({
      type: DECREMENT
    })
  }

  return (
    <div>
      <h1>{counter}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;