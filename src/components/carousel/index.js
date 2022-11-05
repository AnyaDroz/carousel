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

  function moveContainer() {
    console.log("hello");
    const position = groupRef.current.getBoundingClientRect().x;
    console.log(position);
    groupRef.current.style.left = `${-426}px`;
    groupRef.current.style.transition =
      "left 1.5s cubic-bezier(0.075, 0.82, 0.165, 1)";
  }

  useEffect(() => {}, []);

  return (
    <div className="carousel-window" ref={tileRef}>
      <div className="main-container" ref={groupRef} onDrag={moveContainer}>
        <div className="group-container one" ref={groupRefOne}>
          {info.map((item, index) => {
            return <CarouselTile key={index} index={index} info={item} />;
          })}
        </div>
        <div className="group-container two" ref={groupRefTwo}>
          {info.map((item, index) => {
            return <CarouselTile key={index} index={index} info={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
