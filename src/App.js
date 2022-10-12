import "./styles.css";
import React, { useEffect, useState } from "react";
import InputData from "./InputDataAad";
import InputPlus from "./InputPlush/index";
import Context from "./ContexApi";
import RightArrow from "../public/Image/RightArrow.png";
import LeftImage from "../public/Image/LeftArrow.png";
import DropDownArrow from "./DropdownArrow";
import ImageAdd from "./ImageAdd";
import Api from "./Api";
import LoacalStorage from "./LocalStorage";
import Login from "./LocalStorage/Login.js";
import Shop from "./CShopPage/Shop";
import JsTest from "./jsTest/index";
import InputButton from "./inputButtoncolor/index";
export default function App() {
  // setTimeout(() => console.log("3434"));
  // products(4,5) = 20
  // function products(x) {
  //   return function (y) {
  //     return x * y;
  //   };
  // }
  // console.log(products(4)(6));

  //  useEffect lifeCycle
  // useEffect(()=>{
  // //componentsDidmount
  // },[]);
  // useEffect(()=>{
  // //componentsDidUpadate
  // },[id]);

  // useEffect(()=>{
  //   return(
  //     // componentsDidunmounting
  //   )
  // },[])
  //  useEffect lifeCycle

  // clouser
  // let string = "";
  // for (let i = 1; i <= 5; i++) {
  //   for (let j = 1; j <= 5 - i; j++) {
  //     string += "-";
  //   }
  //   for (let k = 1; k <= 2 * i - 1; k++) {
  //     string += k;
  //   }
  //   string += "\n";
  // }
  // console.log(string);

  console.log("Apple app store sandbox/demo mode");

  // let row = 10;
  // let col = 5;
  // let Str = " ";
  // for (let i = 1; i <= row; i++) {
  //   Str += "\n";
  //   for (let j = 1; j <= row - i; j++) {
  //     Str += j;
  //   }
  // }
  // for (let k = 1; k <= 20; k++) {
  //   Str += k;
  //   for (let l = 20; l <= 30; l++) {
  //     Str += " ";
  //   }
  // for(let m=k; m<=row-k; m++ ){
  //   Str += m
  // }
  // }

  // for (let i = 1; i <= row; i++) {
  //   Str += "\n";
  //   for (let j = 1; j <= i; j++) {
  //     Str += j;
  //   }
  // }
  // console.log(Str);
  let num = 5;
  let Space = "";
  for (let i = 1; i <= num; i++) {
    Space += "";
    for (let j = 1; j <= num - i; j++) {
      Space += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      Space += "=";
    }
    Space += "\n";
  }
  console.log(Space);

  const NumberContext = React.createContext();

  return (
    <div className="App">
      {/* <Api /> */}
      {/* <Shop /> */}
      {/* <ImageAdd /> */}
      {/* <JsTest name="Kya haal hai" Age="test" /> */}
      <InputButton />
      {/* <DropDownArrow /> */}
      {/* <InputData /> */}
      {/* <InputPlus /> */}
      {/* <Context /> */}
      {/* <Pattern /> */}
      {/* <LoacalStorage /> */}
      <hr />
      {/* <Login /> */}
      {/* <Login /> */}
    </div>
  );
}
