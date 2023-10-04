import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";

const UseStateExample = () => {
  const [count, setCount] = useState(0);
  const handelIncrease = () => console.log(setCount(count + 1));
  const handelDncrease = () => console.log(setCount(count - 1));
  return (
    <div>
      <Button onClick={handelIncrease}>+</Button>

      <Button onClick={handelDncrease}>-</Button>
      <label>count is : {count}</label>
    </div>
  );
};

export default UseStateExample;
