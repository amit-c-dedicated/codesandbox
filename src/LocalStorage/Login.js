import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const Handel = () => {
    console.log("test");
    const SoreName = localStorage.getItem("name");
    console.log(SoreName, "SoreName");
    const Sorepassword = localStorage.getItem("password");
    if (name !== SoreName) {
      console.log("Sucess");
    } else {
      console.log("error");
    }
  };
  return (
    <>
      <p>login</p>
      <input
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        placeholder="pass"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={Handel}>Login</button>
    </>
  );
};
export default Login;
