import React, { useEffect, useState } from "react";
import RightArrow from "../../public/Image/RightArrow.png";
import LeftImage from "../../public/Image/LeftArrow.png";

export default function DropDownArrow() {
  const [replace, setReplace] = useState(false);
  const [box, setbox] = useState(false);
  const [replace1, setReplace1] = useState(false);
  const [box1, setbox1] = useState(false);
  const Arrow = () => {
    setReplace(!replace);
    setbox(!box);
    setReplace1(false);
    setbox1(false);
  };
  const Arrow1 = () => {
    setReplace1(!replace1);
    setbox1(!box1);
    setReplace(false);
    setbox(false);
  };
  return (
    <>
      <hr />
      <h1>Hi Text</h1>
      <button onClick={Arrow}>
        {replace ? (
          <>
            <p>Hello</p> <img src={RightArrow} />
          </>
        ) : (
          <>
            <p>Hello</p> <img src={LeftImage} />
          </>
        )}
      </button>
      <br />
      <br />
      {box ? <h1>First</h1> : ""}

      <button onClick={Arrow1}>
        {replace1 ? <img src={RightArrow} /> : <img src={LeftImage} />}
      </button>
      {box1 ? <h1>Second</h1> : ""}
    </>
  );
}
