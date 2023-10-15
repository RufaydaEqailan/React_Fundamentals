import React, { createContext, useState } from "react";

//1-Create context
const ColorContext = createContext();
//2-create provider
const UseContextProvider = ({ children }) => {
  //6-update data in context
  const [data, setData] = useState({ id: "1", name: "ali" });
  const changeData = (id, name) => {
    setData({ id, name });
  };
  return (
    <ColorContext.Provider value={{ data, changeData }}>
      {children}
    </ColorContext.Provider>
  );
};

//3-export context to use, provider to wrap all component
export { UseContextProvider, ColorContext };
