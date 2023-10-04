import React, { useState } from "react";

const UseStateText = () => {
  const [text, setText] = useState("xx");
  const handelText = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  return (
    <div>
      <input type="text" value={text} onChange={handelText}></input>
    </div>
  );
};

export default UseStateText;
