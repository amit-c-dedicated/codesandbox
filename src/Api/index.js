import React, { useState, useEffect } from "react";
import axios from "axios";

const Api = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const fetchData = async () => {
    setLoader(true);
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    setData(data);
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Deletee = (id) => {
    setLoader(true);
    setData(data.filter((ite) => ite.id !== id));
    setLoader(false);
  };

  const Maxidget = () => {
    const id = data.map((items) => items.id);
    // console.log(id);
    const max = Math.max(...id);
    // console.log(max, "min"); // 👉️ 14
  };

  function sort() {
    const sprede = [
      { id: 2, name: "amit", class: "b.tech", village: "sondsar" },
      { id: 1, name: "aman", class: "M.tech", village: "Kopaganj" }
    ];
    const sprede2 = [
      { name: "rahul", class: "m.tech", village: "sondsar" },
      { name: "ranjeet", class: "M.tech", village: "Kopaganj" }
    ];
    // console.log(sprede);
    const restop = [...sprede, ...sprede2];
    // console.log(restop, "test");

    restop.sort(function (a, b) {
      return a.id - b.id;
    });
  }
  sort();

  const sprede = [
    { id: 2, name: "amit", class: "b.tech", village: "sondsar" },
    { id: 1, name: "aman", class: "M.tech", village: "Kopaganj" }
  ];

  sprede.sort(function (a, b) {
    return a - b;
  });

  /* forEach method */
  let myArray1 = [1, 2, 3, 4];
  myArray1.forEach((element, index) => {
    myArray1[index] = element * element;
  });
  console.log(myArray1, "1");

  /* map method */
  let myArray2 = [1, 2, 3, 4];
  myArray2.map((element, index) => {
    myArray2[index] = element * element;
  });
  console.log(myArray2, "2");
  // console.log(sprede);

  return (
    <div>
      {loader ? <p>Loading...</p> : <p></p>}
      <button onClick={Maxidget}>Maxidget</button>

      <ui>
        {data.length === 0 ? <p>No Data Show</p> : null}
        {data.map((item) => {
          return (
            <>
              <li>Id: {item.id}</li>
              <li>Name: {item.name}</li>
              <li>Email: {item.email}</li>
              <li>Email: {item.dataOneTest}</li>
              <hr />
              <button onClick={() => Deletee(item.id)}>Delete</button>
            </>
          );
        })}
      </ui>
    </div>
  );
};

export default Api;
