import React from "react";
import UseFetchData from "../customHooks/useFetchData";

const UseCustomeExample = () => {
  const [data] = UseFetchData("https://jsonplaceholder.typicode.com/posts");
  return (
    <div>
      {data.map((item) => {
        return <p>{item.title}</p>;
      })}
    </div>
  );
};

export default UseCustomeExample;
