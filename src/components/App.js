
import React from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Actions";


const App = () => {

  let dispatch = useDispatch();
  let count = useSelector(state => state.count);

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default App
