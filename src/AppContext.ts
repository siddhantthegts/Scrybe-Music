import React from "react";

const context = {
  songId: null,
  setSongId: (id: string) => {},
  playing : false
}

export const AppContext = React.createContext(context);