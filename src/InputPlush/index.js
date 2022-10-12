import React, { useState, useEffect } from "react";

const InputData = () => {
  const [add, setAdd] = useState();
  const [add1, setAdd1] = useState();
  const [list, setList] = useState([]);

  const DataAdd1 = () => {
    const testing = add + add1;
    setList([...list, testing]);
    console.log(testing);
  };
  useEffect(() => {
    DataAdd1();
  }, []);
  return (
    <>
      <br />
      <br />
      <input
        onChange={(e) => setAdd(+e.target.value)}
        value={add}
        placeholder="Enter Number"
      />
      <br /> <br />
      <input
        onChange={(e) => setAdd1(+e.target.value)}
        value={add1}
        placeholder="Enter Number"
      />
      {/* <p>{total}</p> */}
      {list?.map((i, k) => {
        return <p>{i}</p>;
      })}
      <br /> <br />
      <button onClick={DataAdd1}>Sum Add</button>
      <hr />
    </>
  );
};

export default InputData;
