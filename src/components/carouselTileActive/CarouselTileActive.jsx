import React from "react";
import "../carouselTileActive/carousel_tile_active.scss";
import Squiggle from "../../images/squiggle.svg";
import Idlerocks from "../../images/idlerocks.png";
import { tiles } from "../../helpers/config.js";

const CarouselTileActive = () => {
  return (
    <div>
      {tiles.map((item, key) => (
        <div className="active-tile-container">
          <div className="active-tile-container__topbar">
            <div className="active-tile-container__topbar__eyebrow-container">
              <h4 className="active-tile-container__topbar__eyebrow-container__eyebrow-one">
                {item.eyebrowOne}
              </h4>
              <h4 className="active-tile-container__topbar__eyebrow-container__eyebrow-two">
                {item.eyebrowTwo}
              </h4>
            </div>

            <div className="active-tile-container__topbar__label-container">
              <img
                src={Squiggle}
                alt="squiggle"
                className="active-tile-container__topbar__label-container__squiggle"
              />
              <h4 className="active-tile-container__topbar__label-container__type">
                {item.label}
              </h4>
            </div>
          </div>
          <div className="active-tile-container__image-container">
            <img
              src={Idlerocks}
              alt="Idlerocks"
              className="active-tile-container__image-container__image"
            />
          </div>
          <div className="active-tile-container__title">
            <h1 className="active-tile-container__title__header">
              {item.title}
            </h1>
            <h2 className="active-tile-container__title__subheader">
              {item.location}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselTileActive;
