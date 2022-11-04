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

// const copyArray = [];
// copyArray.push(...info);

// for (let i = 0; i < 2; i++) {
//   info.push(...info);
// }

function Carousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const tileRef = useRef(null);
  const groupRefOne = useRef(null);
  const groupRefTwo = useRef(null);
  const [firstOrder, setFirstOrder] = useState(true);
  const [lastOrder, setLastOrder] = useState(false);

  useEffect(() => {
    const positionOfContainerOne =
      groupRefOne.current.getBoundingClientRect().x;
    // console.log(positionOfContainerOne);
    const positionOfContainerTwo =
      groupRefTwo.current.getBoundingClientRect().x;
    // console.log(positionOfContainerTwo);
  }, []);

  function getPosition() {
    const position = tileRef.current.scrollLeft;
    const tileWidth =
      tileRef.current.lastChild.getBoundingClientRect().width + 24;
    setScrollPosition(position);
    const positionOfContainerTwo =
      groupRefTwo.current.getBoundingClientRect().x;
    console.log(positionOfContainerTwo);

    if (positionOfContainerTwo === 8) {
      setFirstOrder(false);
      setLastOrder(true);
      // tileRef.current.scrollTo(0, 0);
    }
  }

  return (
    <div className="carousel-window" ref={tileRef} onScroll={getPosition}>
      <div className="scroll-container">
        <div
          className={`group-container ${firstOrder && "one"} ${
            lastOrder && "three"
          }`}
          ref={groupRefOne}
        >
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
        <div className="group-container two" ref={groupRefTwo}>
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
      </div>
    </div>
  );
}

export default Carousel;
