import React, { useState, useEffect } from "react";
import ARROW from "../../public/Image/LeftArrow.png";
import "./index.css";
const ImageAdd = () => {
  const [image, setImage] = useState(ARROW);
  const [list, setList] = useState([]);
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {}, [list]);

  const AddData = () => {
    const ImageName = [...list, image];
    setList(ImageName);
  };

  const Deleteedata = (k) => {
    console.log(k);
    const deleter = list.filter((items) => items.k !== k);
    setList(deleter);
    // console.log(id);
  };

  return (
    <>
      <h1>Test </h1>
      <img src={image} onClick={AddData} />
      <br />
      <div class="grid-container">
        {list.map((i, k) => {
          return (
            <div key={k}>
              <div class="my-grid-container">
                <div class="myClass" ng-repeat="cardData in cardData">
                  <div class="card">
                    <img src={i} />
                    <button
                      class="task__remove-icon"
                      onClick={() => Deleteedata(k)}
                    >
                      x
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ImageAdd;
