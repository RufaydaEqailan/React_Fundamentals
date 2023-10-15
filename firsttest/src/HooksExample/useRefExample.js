import React, { useRef } from "react";

const UseRefExample = () => {
  const valueInput = useRef();

  const focus = () => {
    valueInput.current.focus();
    console.log(valueInput.current.value);
  };
  return (
    <div>
      <input type="text" ref={valueInput} />
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default UseRefExample;
