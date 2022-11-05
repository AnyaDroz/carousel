import React from "react";
import "./carousel.scss";
import CarouselTile from "../carouselTile";
import Idlerocks from "../../images/idlerocks.png";
import Oakleycourt from "../../images/Oakleycourt.png";
import Cottage from "../../images/Cottage.png";
import Beachfront from "../../images/beachfront.png";
import Treehouse from "../../images/treehouse.png";
import { useRef, useEffect, useState } from "react";

const info = [
  {
    label: "one",
    title: "the idle rocks",
    eyebrowOne: "hotel",
    eyebrowTwo: "remote",
    location: "St mawes, cornwall",
    image: Idlerocks,
  },
  {
    label: "two",
    title: "Oakley court",
    eyebrowOne: "castle",
    eyebrowTwo: "urban",
    location: "St mawes, cornwall",
    image: Oakleycourt,
  },
  {
    label: "three",
    title: "Berkley Cottage",
    eyebrowOne: "Cottage",
    eyebrowTwo: "remote",
    location: "St mawes, cornwall",
    image: Cottage,
  },
  {
    label: "test",
    title: "Berkley Cottage",
    eyebrowOne: "Cottage",
    eyebrowTwo: "remote",
    location: "St mawes, cornwall",
    image: Beachfront,
  },
  {
    label: "five",
    title: "Berkley Cottage",
    eyebrowOne: "Cottage",
    eyebrowTwo: "remote",
    location: "St mawes, cornwall",
    image: Treehouse,
  },
];

function Carousel() {
  const tileRef = useRef(null);
  const groupRefOne = useRef(null);
  const groupRefTwo = useRef(null);
  const groupRef = useRef(null);
  const currentPosRef = useRef("0px");

  function capturePosition() {
    console.log("mousedown");
    currentPosRef.current = groupRef.current.getBoundingClientRect().x;
    console.log(currentPosRef.current);

    // tileRef.current.lastChild.getBoundingClientRect().width + 24
  }

  function moveContainer() {
    console.log("hello");

    const widthOfGroup = groupRefOne.current.getBoundingClientRect().width;

    groupRef.current.style.left = `${currentPosRef.current - 434}px`;
    groupRef.current.style.transition =
      "left 1.5s cubic-bezier(0.075, 0.82, 0.165, 1)";
    tileRef.current.scrollLeft = "0px";
    console.log(groupRefTwo.current.getBoundingClientRect().x);
    console.log(widthOfGroup);
    console.log(currentPosRef.current);
    console.log(currentPosRef.current % widthOfGroup);
    if (groupRefTwo.current.getBoundingClientRect().x < 453) {
      setTimeout(() => {
        groupRef.current.style.left = "0px";
        groupRef.current.style.transition = "left 0s";
      }, 2000);
    }

    //remove ghost image
    document.addEventListener(
      "dragstart",
      function (event) {
        var img = new Image();
        img.src =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
        event.dataTransfer.setDragImage(img, 0, 0);
      },
      false
    );
    //end remove ghost image
  }

  useEffect(() => {}, []);

  return (
    <div
      className="carousel-window"
      ref={tileRef}
      // onScroll={moveContainer}
    >
      <div
        className="main-container"
        ref={groupRef}
        onMouseDown={capturePosition}
        onDragStart={moveContainer}
        draggable="true"
      >
        <div className="group-container" ref={groupRefOne} draggable="false">
          {info.map((item, index) => {
            return <CarouselTile key={index} index={index} info={item} />;
          })}
        </div>
        <div
          className="group-container two"
          ref={groupRefTwo}
          draggable="false"
        >
          {info.map((item, index) => {
            return <CarouselTile key={index} index={index} info={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
