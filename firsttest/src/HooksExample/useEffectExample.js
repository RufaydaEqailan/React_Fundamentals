import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("hello from useEffect");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <label>{count}</label>
    </div>
  );
};

export default UseEffectExample;
