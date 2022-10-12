import React from "react";
const jsTest = ({ name, Age, Distic, Village }) => {
  let letname = 100;
  var varname = 100;
  const Constname = 100;
  console.log(letname, varname, Constname);
  const NumberContext = React.createContext();
  return (
    <>
      <NumberContext.Consumer>
        {(value) => <div>The answer is {value}.</div>}
      </NumberContext.Consumer>
      <h2>
        Name :{name} <br />
        Age :{Age} <br />
        Distic:{Distic} <br />
        Village:{Village}
      </h2>
    </>
  );
};

export default jsTest;
