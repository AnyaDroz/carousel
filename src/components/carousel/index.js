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
  const [tileContent, setTileContent] = useState(info);
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    carouselRef.current.scrollLeft =
      (carouselRef.current.lastChild.getBoundingClientRect().width + 24) * 20;
  }, []);

  function getPosition() {
    const position = carouselRef.current.scrollLeft;
    setScrollPosition(position);
  }

  useEffect(() => {
    const tileWidth =
      carouselRef.current.lastChild.getBoundingClientRect().width + 24;
    const carouselWidth =
      (carouselRef.current.lastChild.getBoundingClientRect().width + 24) *
      copyArray.length;

    if (
      scrollPosition >= copyArray.length * 3 * tileWidth &&
      scrollPosition % tileWidth === 0
    ) {
      carouselRef.current.scrollLeft = scrollPosition - carouselWidth;
    } else if (
      scrollPosition <= copyArray.length * tileWidth &&
      scrollPosition % tileWidth === 0
    ) {
      carouselRef.current.scrollLeft = scrollPosition + carouselWidth;
    }
  }, [scrollPosition]);

  return (
    <div className="carousel-window" ref={carouselRef} onScroll={getPosition}>
      {tileContent.map((item, index) => {
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
