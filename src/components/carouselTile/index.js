import React, { useRef, useState, useEffect } from "react";
import "../carouselTile/carousel_tile.scss";
import Squiggle from "../../images/squiggle.svg";

const CarouselTile = ({ info, index, scrollPosition }) => {
  const [active, setActive] = useState(false);

  // Either - when carousel window is scrolled - check position of tile containers (Loop through them?)
  // If any tile container has position > 0 && < 10 then set to active state (usestate?)
  // {position < 10 ? "active" + "tile-container": "tile-container"}
  //Otherwise could you do - if tile container is moved (useeffect?) then check position, if over 0, set active state.
  const width = 424;

  function checkActive() {
    console.log(scrollPosition);
    if (
      index * width < scrollPosition + 10 &&
      index * width > scrollPosition - 10
    ) {
      setActive(true);
    }
  }

  useEffect(() => {
    checkActive();
  });

  return (
    <div className="tile-container">
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

      <div
        className={
          active
            ? "tile-container__image-container active"
            : "tile-container__image-container"
        }
      >
        <img
          src={info.image}
          alt="Idlerocks"
          className="tile-container__image-container__image"
        />
      </div>

      {/* TITLE */}
      <div
        className={
          active ? "tile-container__title active" : "tile-container__title"
        }
      >
        <h1 className="tile-container__title__header">{info.title}</h1>
        <h2 className="tile-container__title__subheader">{info.location}</h2>
      </div>
    </div>
  );
};

export default CarouselTile;
