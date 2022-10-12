import React, { useContext, createContext } from "react";

// create context
const User = ({ UserContext }) => {
  let context = useContext(UserContext);
  console.log(context, "test");
  return <h1>tesr</h1>;
};

export default User;
