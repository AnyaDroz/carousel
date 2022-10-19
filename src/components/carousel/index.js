import React from "react";
import "./carousel.scss";
import CarouselTile from "../carouselTile/CarouselTile";

const info = [
  {
    label: "stay",
    title: "the idle rocks",
    eyebrowOne: "hotel",
    eyebrowTwo: "remote",
    location: "St mawes, cornwall",
  },
  {
    label: "stay",
    title: "hello",
    eyebrowOne: "hotel",
    eyebrowTwo: "remote",
    location: "St mawes, cornwall",
  },
  {
    label: "stay",
    title: "hello",
    eyebrowOne: "hotel",
    eyebrowTwo: "remote",
    location: "St mawes, cornwall",
  },
];

function Carousel() {
  return (
    <div className="card-container">
      {info.map((item, key) => {
        return <CarouselTile key={key} info={item} />;
      })}
    </div>
  );
}

export default Carousel;
