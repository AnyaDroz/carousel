import React from "react";
import "../carouselTile/carousel_tile.scss";
import Squiggle from "../../images/squiggle.svg";
import Idlerocks from "../../images/idlerocks.png";

const CarouselTile = ({ info }) => {
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
      <div className="test">
        <div className="tile-container__image-container">
          <img
            src={Idlerocks}
            alt="Idlerocks"
            className="tile-container__image-container__image"
          />
        </div>
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
