import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardsActions } from "../../store/cards-slice";
import { player1Actions } from "../../store/player1-slice";
import { player2Actions } from "../../store/player2-slice";
import GameBoard from "./GameBoard";
import SetPlayerForm from "./SetPlayerForm";

function GameSetup() {
  const cards = useSelector((state) => state.cardDeck.cardDeck);

  const gameStatus = useSelector((state) => state.cardDeck.gameReady);
  const player1Cards = useSelector((state) => state.player1.cards);

  const player2Cards = useSelector((state) => state.player2.cards);

  const winner = useSelector((state) => state.game.winner);

  const dispatch = useDispatch();

  // player 1 and 2 cards assigned and state updated
  useEffect(() => {
    if (cards.length > 0) {
      for (let card in cards[0]) {
        if (cards[0][card].player === 1) {
          dispatch(player1Actions.addCard(cards[0][card]));
        } else if (cards[0][card].player === 2) {
          dispatch(player2Actions.addCard(cards[0][card]));
        }
      }
    }
  }, [cards]);

  useEffect(() => {
    if (player1Cards.length > 0 && player2Cards.length > 0) {
      dispatch(cardsActions.startGame());
    } else {
      dispatch(cardsActions.endGame());
    }
  }, [player1Cards, player2Cards]);

  return (
    <>
      {gameStatus === true ? <GameBoard /> : <SetPlayerForm />}

      {winner.length > 0 && (
        <div>
          <h1>The winner is: {winner[0]}</h1>
        </div>
      )}
    </>
  );
}

export default GameSetup;
