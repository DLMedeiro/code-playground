import connectFour from "../images/connectFour1.png";
import deckOfCards from "../images/deckOfCards.jpg";
import lightsOut from "../images/LightsOut1.png";
import magicEightBall from "../images/MagicEightBall1.png";
import memory from "../images/Memory1.png";
import toDo from "../images/ToDo1.png";
import war from "../images/War.PNG";
import Grid from "@mui/material/Grid";

import Card from "./CarouselCard";
import "../Styles/Carousel.css";
import React, { useState } from "react";

function ImageCarousel(props) {
  const [cardIdx, setCardIdx] = useState(0);
  const card = props.cardData[cardIdx];
  const total = props.cardData.length;
  const goForward = () => setCardIdx(cardIdx + 1);
  const goBackward = () => setCardIdx(cardIdx - 1);
  const hideLeft = cardIdx === 0;
  const hideRight = cardIdx === props.cardData.length - 1;

  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <div className="Carousel-main">
        <Card
          name={card.Name}
          caption={card.Caption}
          tech={card.Tech}
          github={card.Github}
          src={card.src}
          active={card.active}
          currNum={cardIdx + 1}
          totalNum={total}
        />
      </div>
      <Grid
        className="footer"
        item
        xs={12}
        style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
      >
        {hideLeft ? (
          <i
            style={{ color: "transparent", pointerEvents: "none" }}
            className="fas fa-chevron-circle-left fa"
          />
        ) : (
          <i
            className="fas fa-chevron-circle-left fa"
            onClick={goBackward}
            data-testid="right-arrow"
          />
        )}
        <small className="Card-small">
          Image {cardIdx + 1} of {total}
        </small>

        {hideRight ? (
          <i
            style={{ color: "transparent", pointerEvents: "none" }}
            className="fas fa-chevron-circle-right fa"
          />
        ) : (
          <i
            className="fas fa-chevron-circle-right fa"
            onClick={goForward}
            data-testid="right-arrow"
          />
        )}
      </Grid>
    </div>
  );
}
ImageCarousel.defaultProps = {
  cardData: [
    {
      Name: "War Card Game",
      Caption:
        "Two-player card game 'War' built to closely replicate game play through a website format.  Application allows two users to play against one another on a single device, or against a computer.",
      Tech: "Backend API: Node JS, Express, PostgreSQL. Frontend: React, Redux, Bootstrap, CSS.",
      Github: "https://github.com/DLMedeiro/war-frontend.git",
      src: war,
      active: "https://warcardgame-frontend.onrender.com/",
    },
    {
      Name: "Lights Out",
      Caption:
        "A logic/puzzle game, played on a gird of individual lights, which can either be lit or unlit. The puzzle is won when when all of the lights are turned off.",
      Tech: "React, JavaScript, CSS, HTML",
      Github: "https://github.com/DLMedeiro/Lights-Out.git",
      src: lightsOut,
      active: "https://dlmedeiro.github.io/Lights-Out/",
    },
    {
      Name: "Connect Four",
      Caption:
        "Two players alternate turns dropping a tile down a column until a player gets four-in-a-row (horiz, vert, or diag) or until board fills resulting in a tie.",
      Tech: "JavaScript, CSS, HTML",
      Github: "https://github.com/DLMedeiro/Connect4-OO.git",
      src: connectFour,
      active: "https://dlmedeiro.github.io/Connect4-OO/",
    },
    {
      Name: "Memory Match",
      Caption:
        "Players are shown a collection of cards, face down, and can click on two cards at a time to reveal what’s underneath. The goal of the game is to match up all the pairs.",
      Tech: "JavaScript, CSS, HTML",
      Github: "https://github.com/DLMedeiro/Springboard-MemoryGame",
      src: memory,
      active: "https://dlmedeiro.github.io/Springboard-MemoryGame/",
    },
    {
      Name: "Magic Eight Ball",
      Caption: "Simulation of the classic Magic Eight Ball.",
      Tech: "React, JavaScript, CSS, HTML",
      Github: "https://github.com/DLMedeiro/Magic-Eight-Ball.git",
      src: magicEightBall,
      active: "https://dlmedeiro.github.io/Magic-Eight-Ball/",
    },
    {
      Name: "Deck of Cards",
      Caption:
        "Application that displays a deck of cards, one card at a time. Utilizes the Deck of Cards API for the creation of a full deck of cards. This project practices the use of useState and UseEffect.",
      Tech: "React, JavaScript, CSS, HTML",
      Github: "https://github.com/DLMedeiro/Deck-of-Cards.git",
      src: deckOfCards,
      active: "https://dlmedeiro.github.io/Deck-of-Cards/",
    },
    {
      Name: "Action Tracker",
      Caption:
        "This application focuses on DOM manipulation and the utilization of local storage to track and save user 'todos'.",
      Tech: " JavaScript, CSS, HTML",
      Github: "https://github.com/DLMedeiro/Springboard-ToDoApp.git",
      src: toDo,
      active: "https://dlmedeiro.github.io/Springboard-ToDoApp/",
    },
  ],
  title: "Drawing Board",
};
export default ImageCarousel;
