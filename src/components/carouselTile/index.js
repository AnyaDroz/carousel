import React, { useRef, useState, useEffect } from "react";
import "../carouselTile/carousel_tile.scss";
import Squiggle from "../../images/squiggle.svg";

const CarouselTile = ({ info, index }) => {
  // const [active, setActive] = useState(false);

  const tileContainerRef = useRef();
  const gap = 24;

  useEffect(() => {
    const width = tileContainerRef.current.getBoundingClientRect().width;
    // console.log(width + gap);
    // console.log(scrollPosition);

    //   const isActive =
    //     index * (width + gap) === scrollPosition ||
    //     (index + 5) * (width + gap) === scrollPosition;
    //   // const isActive = scrollPosition % (width + gap) === 0;
    //   // && index * width === scrollPosition;
    //   setActive(isActive);
  }, []);

  return (
    <div
      className="tile-container"
      ref={tileContainerRef}
      style={{ marginRight: gap }}
    >
      {/* EYEBROWS */}
      <div className="tile-container__eyebrow-container">
        <h4 className="tile-container__eyebrow-container__eyebrow-one">
          {info.eyebrowOne}
        </h4>
        <h4 className="tile-container__eyebrow-container__eyebrow-two">
          {info.eyebrowTwo}
        </h4>
      </div>
      {/* SQUIGGLE + STAY */}
      <div className="tile-container__label-container">
        <img
          src={Squiggle}
          alt="squiggle"
          className="tile-container__label-container__squiggle"
        />
        <h4 className="tile-container__label-container__type">{info.label}</h4>
      </div>
      {/* IMAGE */}

      <div className="tile-container__image-container">
        <img
          src={info.image}
          alt="Idlerocks"
          className="tile-container__image-container__image"
        />
      </div>

      {/* TITLE */}
      <div className="tile-container__title">
        <h1 className="tile-container__title__header">{info.title}</h1>
        <h2 className="tile-container__title__subheader">{info.location}</h2>
      </div>
    </div>
  );
};

export default CarouselTile;
