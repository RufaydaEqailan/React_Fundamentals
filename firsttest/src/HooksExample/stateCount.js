import React, { useState } from "react";

const StateCount = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("text");
  //   const handelIncrease = () => {
  //     setCount(count + 1);
  //   };
  //   const handelDecrease = () => {
  //     setCount(count - 1);
  //   };
  const handelTyping = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <label>Count is :{count}</label>
      <input type="text" value={text} onChange={handelTyping} />
    </div>
  );
};

export default StateCount;
