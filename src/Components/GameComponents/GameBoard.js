import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "../../Styles/GameBoard.css";

import Toast from "../Toast";
import GamePlay from "./GamePlay";

function GameBoard() {
  const currentPlayer = useSelector((state) => state.game.currentPlayer);

  useEffect(() => {
    if (Object.keys(currentPlayer)[0] === "player1") {
      new Toast({
        message: `${currentPlayer.player1}'s Turn! Start by clicking on your face down card.  Watch for the red highlight to see when you can flip another card`,
      });
    } else if (Object.keys(currentPlayer)[0] === "player2") {
      new Toast({
        message: `${currentPlayer.player2}'s Turn! Start by clicking on your face down card.  Watch for the red highlight to see when you can flip another card`,
      });
    }
  }, []);

  return (
    <div className="outer-container gameboard">
      <div>
        <GamePlay />
      </div>
    </div>
  );
}

export default GameBoard;
