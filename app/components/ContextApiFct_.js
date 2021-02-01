import React, { createContext, useState } from "react";

export const myContext = createContext();

export default function ContextApiFct_(props) {
  const [isOn, setIsOn] = useState(true);
  return (
    <myContext.Provider value={{ isOn, setIsOn }}>{props.children}</myContext.Provider>
  );
}
