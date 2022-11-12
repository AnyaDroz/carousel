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
  const [generateID, setGenerateID] = useState("");
  const tileRef = useRef(null);
  const initialScrollPositionRef = useRef(0);
  const widthRef = useRef(0);
  const positionRef = useRef(0);

  useEffect(() => {
    console.log(Date.now());
    setGenerateID(Date.now());
  }, [array]);

  useEffect(() => {
    initialScrollPositionRef.current =
      (tileRef.current.lastChild.getBoundingClientRect().width + 24) * 20;
    const initialScrollPosition = initialScrollPositionRef.current;

    tileRef.current.scrollLeft = initialScrollPosition;
  }, []);

  function getPosition() {
    widthRef.current =
      tileRef.current.lastChild.getBoundingClientRect().width + 24;
    positionRef.current = tileRef.current.scrollLeft;
    setScrollPosition(positionRef.current);
  }

  function scrollFunction() {
    // I'd like to activate my scroll solution on drag.
  }

  useEffect(() => {
    const width = (widthRef.current + 24) * copyArray.length;
    const tileWidth = widthRef.current;

    if (
      positionRef.current >= copyArray.length * 3 * tileWidth &&
      positionRef.current % tileWidth === 0
    ) {
      tileRef.current.scrollLeft = positionRef.current - width;
    } else if (
      positionRef.current <= copyArray.length * tileWidth &&
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
            //why key & index...?
            key={index}
            index={generateID}
            info={item}
            scrollPosition={scrollPosition}
          />
        );
      })}
    </div>
  );
}

export default Carousel;
