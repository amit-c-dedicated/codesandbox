import React, { createContext } from "react";
import User from "./User";
const UserContext = createContext();

const Context = () => {
  const Value = "east Name";
  return (
    <UserContext.Provider value={Value}>
      <User />
    </UserContext.Provider>
  );
};

export default Context;
