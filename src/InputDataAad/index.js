import React, { useState } from "react";

const InputData = () => {
  const [data, setData] = useState();
  const [list, setList] = useState([]);
  const [validati, setValidati] = useState(false);

  const ChangesValue = (e) => {
    setValidati(false);
    setData(e.target.value);
    if (data < 5) {
      setValidati(true);
    }
  };
  const DataAdd = () => {
    setList([...list, data]);
    setData("");
  };

  return (
    <>
      <input onChange={ChangesValue} value={data} />
      {validati ? <p>true</p> : <p>false</p>}
      <button onClick={DataAdd}> Add</button>
      {list.map((i, k) => {
        return (
          <ul>
            <li>{i}</li>
          </ul>
        );
      })}
    </>
  );
};

export default InputData;
