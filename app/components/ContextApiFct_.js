import React, { createContext, useState } from "react";
import { Uri } from "./Constants_";
export const myContext = createContext();

export default function ContextApiFct_(props) {
  const [isOn, setIsOn] = useState(true);
  const lastSong = {
    title: "this is the title",
    duration: "4:27",
    artist: "this is the artist",
    views: "12k",
    inFavorites: false,
    poster: Uri.images[0],
    yearOfPublish: 2020,
  };
  return (
    <myContext.Provider value={{ isOn, setIsOn, lastSong }}>
      {props.children}
    </myContext.Provider>
  );
}
