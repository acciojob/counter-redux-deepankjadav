import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch({type : "INCREMENT"})}>increment</button>
      <button onClick={()=>dispatch({type : "DECREMENT"})}>decrement</button>
    </div>
  );
};

export default App;
