import React from "react";
import "../carouselTile/carousel_tile.scss";
import Squiggle from "../../images/squiggle.svg";
import Idlerocks from "../../images/idlerocks.png";
import { tiles } from "../../helpers/config.js";
const CarouselTile = () => {
  return (
    <div className="tile-container">
      {tiles.map((item, key) => (
        <div>
          <div className="tile-container__topbar">
            <div className="tile-container__topbar__eyebrow-container">
              <h4 className="tile-container__topbar__eyebrow-container__eyebrow-one">
                {item.eyebrowOne}
              </h4>

              <h4 className="tile-container__topbar__eyebrow-container__eyebrow-two">
                {item.eyebrowTwo}
              </h4>
            </div>

            <div className="tile-container__topbar__label-container">
              <img
                src={Squiggle}
                alt="squiggle"
                className="tile-container__topbar__label-container__squiggle"
              />
              <h4 className="tile-container__topbar__label-container__type">
                {item.label}
              </h4>
            </div>
          </div>

          <div className="tile-container__image-container">
            <img
              src={Idlerocks}
              alt="Idlerocks"
              className="tile-container__image-container__image"
            />
          </div>

          <div className="tile-container__title">
            <h1 className="tile-container__title__header">{item.title}</h1>
            <h2 className="tile-container__title__subheader">
              {item.location}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselTile;
