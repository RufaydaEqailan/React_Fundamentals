import React, { useState } from "react";

const UseStateLarsh = () => {
  const [text, setText] = useState("");
  const names = ["Rufayda", "Amer", "Maya"];
  const changeText = (name) => {
    setText(name);
  };
  return (
    <div>
      {names.map((name) => (
        <label key={name} value={name} onClick={() => 
          
          changeText(name)}>
          {name}
        </label>
      ))}
      <h1>Hello:{text}</h1>
    </div>
  );
};

export default UseStateLarsh;
