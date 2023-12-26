import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inc, dec } from '../redux/actions'; // Update to use `dec` instead of `dic`

function Count() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(inc());
  };

  const decrease = () => {
    dispatch(dec()); // Update to use `dec` instead of `dic`
  };

  return (
    <div>
      <button onClick={increase}>inc</button>
      <h1>{count}</h1>
      <button onClick={decrease}>dec</button>
    </div>
  );
}

export default Count;
