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
    label: "four",
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

const copyArray = [];
copyArray.push(...info);

for (let i = 0; i < 4; i++) {
  info.push(...info);
}

function Carousel() {
  const [array, setArray] = useState(info);
  const [scrollPosition, setScrollPosition] = useState(0);
  const tileRef = useRef(null);
  const initialScrollPositionRef = useRef(0);
  const widthRef = useRef(0);
  const positionRef = useRef(0);

  useEffect(() => {
    //Placing the array in the middle.

    initialScrollPositionRef.current =
      (tileRef.current.lastChild.getBoundingClientRect().width + 24) * 20;
    const initialScrollPosition = initialScrollPositionRef.current;

    tileRef.current.scrollLeft = initialScrollPosition;
  }, []);

  function getPosition() {
    //Updating the width reference to be width of card + gap times length of array
    widthRef.current =
      tileRef.current.lastChild.getBoundingClientRect().width + 24;
    positionRef.current = tileRef.current.scrollLeft;
    // const position =
    const width = (widthRef.current + 24) * 5;

    // console.log(width);

    setScrollPosition(positionRef.current);
    console.log(positionRef.current);
  }

  function scrollFunction() {
    // I'd like to activate my scroll solution on drag.
  }

  useEffect(() => {
    const width = (widthRef.current + 24) * 5;
    const tileWidth = widthRef.current;
    console.log(width);

    if (positionRef.current >= 6390 && positionRef.current % tileWidth === 0) {
      tileRef.current.scrollLeft = positionRef.current - width;
    } else if (
      positionRef.current <= 2130 &&
      positionRef.current % tileWidth === 0
    ) {
      tileRef.current.scrollLeft = positionRef.current + width;
    }
  }, [scrollPosition]);

  return (
    <div
      className="carousel-window"
      ref={tileRef}
      onScroll={getPosition}
      onDrag={scrollFunction}
      draggable="true"
    >
      {array.map((item, index) => {
        return (
          <CarouselTile
            key={index}
            index={index}
            info={item}
            scrollPosition={scrollPosition}
          />
        );
      })}
    </div>
  );
}

export default Carousel;
