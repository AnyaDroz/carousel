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
    label: "stay",
    title: "the idle rocks",
    eyebrowOne: "hotel",
    eyebrowTwo: "remote",
    location: "St mawes, cornwall",
    image: Idlerocks,
  },
  {
    label: "stay",
    title: "Oakley court",
    eyebrowOne: "castle",
    eyebrowTwo: "urban",
    location: "St mawes, cornwall",
    image: Oakleycourt,
  },
  {
    label: "stay",
    title: "Berkley Cottage",
    eyebrowOne: "Cottage",
    eyebrowTwo: "remote",
    location: "St mawes, cornwall",
    image: Cottage,
  },
  {
    label: "stay",
    title: "Berkley Cottage",
    eyebrowOne: "Cottage",
    eyebrowTwo: "remote",
    location: "St mawes, cornwall",
    image: Beachfront,
  },
  {
    label: "stay",
    title: "Berkley Cottage",
    eyebrowOne: "Cottage",
    eyebrowTwo: "remote",
    location: "St mawes, cornwall",
    image: Treehouse,
  },
];

function Carousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const tileRef = useRef(null);

  function getPosition() {
    const position = tileRef.current.scrollLeft;
    setScrollPosition(position);
  }

  return (
    <div className="carousel-window" ref={tileRef} onScroll={getPosition}>
      {info.map((item, index) => {
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
