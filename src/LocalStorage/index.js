import React, { useState, useEffect } from "react";

const LoacalStorage = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const NameHaldel = (e) => {
    setName(e.target.value);
  };
  const passwordHaldel = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    const Test = localStorage.getItem("name");
    const Pass = localStorage.getItem("password");
    console.log(Test, Pass, "=> localstorage name and pass");
  }, []);

  const Handle = (e) => {
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
  };
  const remove = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
  };

  return (
    <>
      <h1>LoacalStorage</h1>
      <input placeholder="Name" onChange={NameHaldel} value={name} />
      <input
        placeholder="Password"
        onChange={passwordHaldel}
        value={password}
      />
      <button onClick={Handle}>Handel</button>
      {localStorage.getItem("name") && (
        <div>
          Name: <p>{localStorage.getItem("name")}</p>
        </div>
      )}
      {localStorage.getItem("password") && (
        <div>
          Password: <p>{localStorage.getItem("password")}</p>
        </div>
      )}
      <br /> <br />
      <div>
        <button onClick={remove}>Remove</button>
      </div>
    </>
  );
};

export default LoacalStorage;
