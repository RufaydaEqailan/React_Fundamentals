import React, { useRef, useContext } from "react";
import { ColorContext } from "./useContextExample";

const UseRefExample = () => {
  const valueInput = useRef();
  const { data, changeData } = useContext(ColorContext);
  const focus = () => {
    valueInput.current.focus();
    console.log(valueInput.current.value);
    changeData(2, valueInput.current.value);
  };
  return (
    <div>
      <input type="text" ref={valueInput} />
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default UseRefExample;
