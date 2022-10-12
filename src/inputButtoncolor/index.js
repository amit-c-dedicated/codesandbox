import React, { useState } from "react";

export default function InputButton() {
  const [button, setButton] = useState(false);
  const [change, setChange] = useState("green");
  console.log(button);
  const handelChange = (e) => {
    setButton(e.target.value);
  };

  // let row = 5;
  // let Str = "";
  // for (let i = 1; i <= row; i++) {
  //   Str += "\n";
  //   for (let j = 1; j <= row - i; j++) {
  //     Str += " ";
  //   }
  //   for (let k = 1; k < 2 * i; k++) {
  //     Str += i;
  //   }
  // }
  // console.log(Str);
  // var num1 = 1;
  // var num2 = 1191;
  // var test = num2.toString();
  // var sp = test.split("");
  // var map = sp.map(Number);
  // var red = map.reduce((a, b) => a + b, 0);
  // console.log(red);

  // var loop1 = 1;
  // var loop2 = 1000;

  // for (let i = loop1; i < loop2; i++) {
  //   var sum = i
  //     .toString()
  //     .split("")
  //     .reduce((a, b) => a + parseInt(b), 0);
  //   // console.log(sum)
  //   if (sum == 6) {
  //     console.log(`${i} `, `${sum}`);
  //     // console.log("t")
  //   }
  // }

  var ArrName = [15, 3, 50, 4, 5, 6, 7];
  // Arr.sort(function (a, b) {
  //   return a - b;
  // });
  for (var i = 1; i < ArrName.length; i++) {
    for (var j = 0; j < i; j++) {
      if (ArrName[i] < ArrName[j]) {
        var x = ArrName[i];
        ArrName[i] = ArrName[j];
        ArrName[j] = x;
      }
    }
  }
  console.log(ArrName, "ArrName");

  var Arr = [15, 3, 50, 4, 5, 6, 7];
  var push = [100, 500, 300, 400];
  Arr.push(push);
  console.log(Arr);
  const url = "https://www.somedomain.com/account/search?filter=a#top";

  var name = url.split("/");
  var first = name[0];
  var second = name[2];
  var third = name[3];
  console.log(third, "yy");
  console.log(first + "//" + second);

  // closusr
  function Clouser(a) {
    function inner(b) {
      return a + b;
    }
    return inner;
  }
  var value = Clouser(20);
  console.log(value(40));

  let num1 = 1;
  let num2 = 100;
  for (var i = 1; i < num2; i++) {
    var output = i
      .toString()
      .split("")
      .reduce((a, b) => a + parseInt(b), 0);
    if (output == 3) {
      console.log(`${i} number ${output}`);
    }
    // console.log(output);
  }
  const ColorChange = () => {
    var name = document.getElementById("namebro");
    name.style = "background-color: black; color:red ";
    console.log(name);
  };

  return (
    <div className="App" style={{ position: "relative" }}>
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "red", cursor: "pointer" }}>
          <h1 onClick={ColorChange}>first</h1>
        </div>
        <div id="namebro" style={{ backgroundColor: change }}>
          <h1>second</h1>
        </div>
      </div>
      <input onChange={handelChange} placeholder="Enter Color" />
      <br /> <br />
      <button
        style={{
          backgroundColor: button,
          padding: "10px",
          borderRadius: "10px"
        }}
      >
        Color Change
      </button>
    </div>
  );
}
