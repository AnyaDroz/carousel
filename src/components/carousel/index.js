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
  const isOneFirst = useRef(true);
  const [isTwoFirst, setIsTwoFirst] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      console.log("Scrolling...");

      const positionOfContainerOne =
        groupRefOne.current.getBoundingClientRect().x;
      const positionOfContainerTwo =
        groupRefTwo.current.getBoundingClientRect().x;
      const widthOfContainerOne =
        groupRefOne.current.getBoundingClientRect().width;
      // groupRefTwo.current.style.left;

      console.log(positionOfContainerOne);
      console.log(positionOfContainerTwo);
      console.log(window.pageXOffset);

      if (
        positionOfContainerTwo < 0 &&
        positionOfContainerOne < -widthOfContainerOne
      ) {
        groupRefOne.current.style.left = `${2 * widthOfContainerOne + 8}px`;
        //instead of two need current
        isOneFirst.current = false;
        console.log(isOneFirst);
      }
      if (
        positionOfContainerOne < 0 &&
        positionOfContainerTwo < -widthOfContainerOne
      ) {
        console.log(isOneFirst);
        groupRefTwo.current.style.left = `${3 * widthOfContainerOne}px`;
      }
    });
  }, []);

  return (
    <div className="carousel-window" ref={tileRef}>
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
  );
}

export default Carousel;
