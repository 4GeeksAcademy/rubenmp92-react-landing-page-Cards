import React from "react";
import Card from "./Card";

const Cards = () => {
  let cardData = [
    { title: "Wonderful Waterfall!", text: "Iceland feelings...", image: "https://picsum.photos/id/15/367/267" },
    { title: "Instanbul seagull", text: "#Birds", image: "https://picsum.photos/id/50/367/267" },
    { title: "New York", text: "Most iconic bridge", image: "https://picsum.photos/id/43/367/267" },
    { title: "Train Rail ", text: "#picture123", image: "https://picsum.photos/id/69/367/267" }
  ];
  return (
    <>
      {cardData.map((card, index) => {
        return <Card key={index} title={card.title} text={card.text} image={card.image} />;
      })}
    </>
  );
};

export default Cards;
