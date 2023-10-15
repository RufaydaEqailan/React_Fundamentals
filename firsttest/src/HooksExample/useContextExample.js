import React, { createContext } from "react";

//1-Create context
const ColorContext = createContext();
//2-create provider
const UseContextProvider = ({ children }) => {
  return (
    <ColorContext.Provider value="green">{children}</ColorContext.Provider>
  );
};

//3-export context to use, provider to wrap all component
export { UseContextProvider, ColorContext };
