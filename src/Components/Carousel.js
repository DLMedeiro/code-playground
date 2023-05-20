// https://splidejs.com/integration/react-splide/
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
// images
import connectFour from "../images/connectFour1.png";
import deckOfCards from "../images/deckOfCards.jpg";
import lightsOut from "../images/LightsOut1.png";
import magicEightBall from "../images/MagicEightBall1.png";
import memory from "../images/Memory1.png";
import toDo from "../images/ToDo1.png";
import war from "../images/War.PNG";

function Carousel() {
  return (
    <Splide aria-label="List of available games and apps">
      <SplideSlide>
        <img src={war} alt="War card game" />
      </SplideSlide>
      <SplideSlide>
        <img src={lightsOut} alt="Lights out game" />
      </SplideSlide>
      <SplideSlide>
        <img src={connectFour} alt="Connect 4 Game" />
      </SplideSlide>
      <SplideSlide>
        <img src={toDo} alt="Action Plan App" />
      </SplideSlide>
      <SplideSlide>
        <img src={memory} alt="Memory Game" />
      </SplideSlide>
      <SplideSlide>
        <img src={magicEightBall} alt="Magic Eight Ball App" />
      </SplideSlide>
      <SplideSlide>
        <img src={deckOfCards} alt="Deck of Cards App" />
      </SplideSlide>
    </Splide>
  );
}

export default Carousel;
