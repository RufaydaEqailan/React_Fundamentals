import React, { useState, useReducer } from "react";
import reducerTest from "../Reducer/reducerTest";

const initalValue = {
  count: 0,
};

const UseReducerExample = () => {
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducerTest, initalValue);
  return (
    <div>
      value is : {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default UseReducerExample;
