import React from "react";
import "../carouselTileActive/carousel_tile_active.scss";
import Squiggle from "../../images/squiggle.svg";
import Idlerocks from "../../images/idlerocks.png";
const CarouselTileActive = () => {
  return (
    <div className="active-tile-container">
      <div className="active-tile-container__topbar">
        <div className="active-tile-container__topbar__eyebrow-container">
          <h4 className="active-tile-container__topbar__eyebrow-container__eyebrow-one">
            Hotel
          </h4>
          <h4 className="active-tile-container__topbar__eyebrow-container__eyebrow-two">
            Remote
          </h4>
        </div>

        <div className="active-tile-container__topbar__label-container">
          <img
            src={Squiggle}
            alt="squiggle"
            className="active-tile-container__topbar__label-container__squiggle"
          />
          <h4 className="active-tile-container__topbar__label-container__type">
            stay
          </h4>
        </div>
      </div>
      {/* <div className="active-tile-container__image-container">
        <img
          src={Idlerocks}
          alt="Idlerocks"
          className="active-tile-container__image-container__image"
        />
      </div> */}
      <div className="active-tile-container__title">
        <h1 className="active-tile-container__title__header">The idle rocks</h1>
        <h2 className="active-tile-container__title__subheader">
          St mawes, cornwall
        </h2>
      </div>
    </div>
  );
};

export default CarouselTileActive;
