import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardsActions } from "../../store/cards-slice";
import { gameActions } from "../../store/game-slice";
import { player1Actions } from "../../store/player1-slice";
import { player2Actions } from "../../store/player2-slice";
import cardBack from "./back.png";
import Toast from "../Toast";
import PlayerCollection from "./Collection";
import PlayerWar from "./War";
import Player1Battle from "./Player1Battle";
import Player2Battle from "./Player2Battle";

function GamePlay() {
  const player1Cards = useSelector((state) => state.player1.cards);
  const player1War = useSelector((state) => state.player1.war);
  const player1Battle = useSelector((state) => state.player1.battle);
  const player1Collection = useSelector((state) => state.player1.collection);
  const players = useSelector((state) => state.game.players);
  const player2Cards = useSelector((state) => state.player2.cards);
  const player2War = useSelector((state) => state.player2.war);
  const player2Battle = useSelector((state) => state.player2.battle);
  const player2Collection = useSelector((state) => state.player2.collection);
  const player1 = useSelector((state) => state.player1.player);
  const player2 = useSelector((state) => state.player2.player);
  const currentPlayer = useSelector((state) => state.game.currentPlayer);
  const [p1Compare, setP1Compare] = useState(0);
  const [p2Compare, setP2Compare] = useState(0);
  const gameStatus = useSelector((state) => state.cardDeck.gameReady);
  const [winnerOfHand, setWinnerOfHand] = useState("");

  const dispatch = useDispatch();

  // Only for computer play
  useEffect(() => {
    if (player1.name === "Computer") {
      // Change turn at start of game
      if (player2War.length === 1 && player1War.length === 0) {
        setTimeout(p1War, 1000);
      } else if (
        player1War.length === 0 &&
        Object.keys(currentPlayer)[0] === "player1"
      ) {
        setTimeout(p1War, 2000);
        setTimeout(changeCurrentPlayer, 2000);
      }
    }
  }, [currentPlayer]);

  // https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html

  const shuffle = (cards, player) => {
    cards.sort(() => Math.random() - 0.5);
    if (player === "p1") {
      for (let card in cards) {
        dispatch(player1Actions.addCard(cards[card]));
      }
      dispatch(player1Actions.removeFromCollection());
    }
    if (player === "p2") {
      for (let card in cards) {
        dispatch(player2Actions.addCard(cards[card]));
      }
      dispatch(player2Actions.removeFromCollection());
    }
  };

  const p1War = () => {
    if (player1Cards.length <= 4 && player1Collection.length > 0) {
      shuffle([...player1Collection], "p1");
    }

    if (player1War.length === 0) {
      dispatch(player1Actions.addToWar(player1Cards[0]));
      dispatch(player1Actions.removeCard());
      document.getElementById("p1Btn").disabled = true;
      if (player1.name !== "Computer" && player2War.length < 1) {
        changeCurrentPlayer();
      }
    } else if (player1War.length > 0 && player1Battle.length < 3) {
      if (player1.name === "Computer") {
        dispatch(player1Actions.addToBattle(player1Cards[0]));
        dispatch(player1Actions.addToBattle(player1Cards[1]));
        dispatch(player1Actions.addToBattle(player1Cards[2]));
        dispatch(player1Actions.addToWar(player1Cards[3]));
        dispatch(player1Actions.removeCard());
        dispatch(player1Actions.removeCard());
        dispatch(player1Actions.removeCard());
        dispatch(player1Actions.removeCard());
        if (player2War.length < 2) {
          changeCurrentPlayer();
        }
        document.getElementById("p2Btn").disabled = false;
      } else {
        dispatch(player1Actions.addToBattle(player1Cards[0]));
        dispatch(player1Actions.removeCard());
      }
    } else if (player1War.length === 1 && player1Battle.length === 3) {
      dispatch(player1Actions.addToWar(player1Cards[0]));
      dispatch(player1Actions.removeCard());
      document.getElementById("p1Btn").disabled = true;
      if (player2War.length < 2) {
        changeCurrentPlayer();
      }
    } else if (
      (player1War.length === 2 && player1Battle.length === 3) ||
      player1Battle.length < 6
    ) {
      dispatch(player1Actions.addToBattle(player1Cards[0]));
      dispatch(player1Actions.removeCard());
    } else if (player1War.length === 2 && player1Battle.length === 6) {
      dispatch(player1Actions.addToWar(player1Cards[0]));
      dispatch(player1Actions.removeCard());
      document.getElementById("p1Btn").disabled = true;
      if (player2War.length < 3) {
        changeCurrentPlayer();
      }
    } else if (player1Battle.length > 6 && player1Battle.length < 9) {
      dispatch(player1Actions.addToBattle(player1Cards[0]));
      dispatch(player1Actions.removeCard());
      dispatch(gameActions.setCurrentPlayer(players[1]));
    } else if (player1Battle.length === 9) {
      dispatch(player1Actions.addToWar(player1Cards[0]));
      dispatch(player1Actions.removeCard());
      document.getElementById("p1Btn").disabled = true;
    }
  };
  const p2War = () => {
    if (player2Cards.length <= 4 && player2Collection.length > 0) {
      shuffle([...player2Collection], "p2");
    }
    if (player2War.length === 0) {
      dispatch(player2Actions.addToWar(player2Cards[0]));
      dispatch(player2Actions.removeCard());
      document.getElementById("p2Btn").disabled = true;
      if (player1War.length === 0) {
        changeCurrentPlayer();
      }
    } else if (player2Battle.length === 0) {
      dispatch(player2Actions.addToBattle(player2Cards[0]));
      dispatch(player2Actions.removeCard());
    } else if (player2Battle.length > 0 && player2Battle.length < 3) {
      dispatch(player2Actions.addToBattle(player2Cards[0]));
      dispatch(player2Actions.removeCard());
    } else if (player2War.length === 1 && player2Battle.length === 3) {
      dispatch(player2Actions.addToWar(player2Cards[0]));
      dispatch(player2Actions.removeCard());
      document.getElementById("p2Btn").disabled = true;
      if (player1War.length < 2) {
        changeCurrentPlayer();
        if (players[0].player1 === "Computer") {
          p1War();
        }
      }
    } else if (
      (player2War.length === 2 && player2Battle.length === 3) ||
      player2Battle.length < 6
    ) {
      dispatch(player2Actions.addToBattle(player2Cards[0]));
      dispatch(player2Actions.removeCard());
      // dispatch(gameActions.setCurrentPlayer(players[0]));
    } else if (player2War.length === 2 && player2Battle.length === 6) {
      dispatch(player2Actions.addToWar(player2Cards[0]));
      dispatch(player2Actions.removeCard());
      document.getElementById("p2Btn").disabled = true;
      if (player1War.length < 3) {
        changeCurrentPlayer();
        if (players[0].player1 === "Computer") {
          p1War();
        }
      }
    } else if (player2Battle.length > 6 && player2Battle.length < 9) {
      dispatch(player2Actions.addToBattle(player2Cards[0]));
      dispatch(player2Actions.removeCard());
      dispatch(gameActions.setCurrentPlayer(players[0]));
    } else if (player2Battle.length === 9) {
      dispatch(player2Actions.addToWar(player2Cards[0]));
      dispatch(player2Actions.removeCard());
      document.getElementById("p2Btn").disabled = true;
      changeCurrentPlayer();
    }
  };

  useEffect(() => {
    if (player1War.length > 0 && player1War.length === player2War.length) {
      setP1Compare(player1War[player1War.length - 1].game_value);
      setP2Compare(player2War[player2War.length - 1].game_value);
    }
  }, [player1War, player2War]);

  useEffect(() => {
    if (p1Compare > 0 && p2Compare > 0) {
      if (player2War.length > 1) {
        // Set longer time for battle
        setTimeout(compareCards, 4000);
      } else {
        setTimeout(compareCards, 1000);
      }
    }
  }, [p2Compare, p1Compare]);

  const compareCards = () => {
    if (p1Compare > p2Compare) {
      setWinnerOfHand(player1.name);
      // add all cards to p1 collection
      for (let card in player1War) {
        dispatch(player1Actions.addToCollection(player1War[card]));
        dispatch(player1Actions.removeFromWar());
      }
      for (let card in player2War) {
        dispatch(player1Actions.addToCollection(player2War[card]));
        dispatch(player2Actions.removeFromWar());
      }
      if (player1Battle.length > 0 && player2Battle.length > 0) {
        for (let card in player1Battle) {
          dispatch(player1Actions.addToCollection(player1Battle[card]));
          dispatch(player1Actions.removeFromBattle());
        }
        for (let card in player2Battle) {
          dispatch(player1Actions.addToCollection(player2Battle[card]));
          dispatch(player2Actions.removeFromBattle());
        }
      }

      changeCurrentPlayer();

      setP1Compare(0);
      setP2Compare(0);
    } else if (p1Compare < p2Compare) {
      setWinnerOfHand(player2.name);
      // add all cards to p2 collection
      for (let card in player1War) {
        dispatch(player2Actions.addToCollection(player1War[card]));
        dispatch(player1Actions.removeFromWar());
      }
      for (let card in player2War) {
        dispatch(player2Actions.addToCollection(player2War[card]));
        dispatch(player2Actions.removeFromWar());
      }
      if (player1Battle.length > 0 && player2Battle.length > 0) {
        for (let card in player1Battle) {
          dispatch(player2Actions.addToCollection(player1Battle[card]));
          dispatch(player1Actions.removeFromBattle());
        }
        for (let card in player2Battle) {
          dispatch(player2Actions.addToCollection(player2Battle[card]));
          dispatch(player2Actions.removeFromBattle());
        }
      }

      changeCurrentPlayer();

      setP1Compare(0);
      setP2Compare(0);
    } else if (p1Compare === p2Compare) {
      new Toast({
        message:
          "WAR! Time to battle by drawing 4 cards, the player with the higher fourth card wins the pile.",
      });
      checkEndGame();

      if (
        Object.keys(currentPlayer)[0] === "player1" &&
        player1.name !== "Computer"
      ) {
        document.getElementById("p1Btn").disabled = false;
        document.getElementById("p2Btn").disabled = true;
      } else if (
        Object.keys(currentPlayer)[0] === "player1" &&
        player1.name === "Computer"
      ) {
        document.getElementById("p1Btn").disabled = true;
        document.getElementById("p2Btn").disabled = true;
        p1War();
      }

      if (Object.keys(currentPlayer)[0] === "player2") {
        document.getElementById("p1Btn").disabled = true;
        document.getElementById("p2Btn").disabled = false;
      }
    }
  };

  useEffect(() => {
    if (gameStatus) {
      checkEndGame();
    }
  }, [player1Cards, player1Collection, player2Cards, player2Collection]);

  useEffect(() => {
    if (Object.keys(currentPlayer)[0] === "player2") {
      document.getElementById("p1Btn").disabled = true;
    } else if (Object.keys(currentPlayer)[0] === "player1") {
      document.getElementById("p2Btn").disabled = true;
    }
  }, [currentPlayer]);

  // Run playerTurn at the start of the game to highlight the correct card, not needed for anything else
  useEffect(() => {
    if (players[0].player1 === "Computer") {
      document.getElementById("p1Btn").disabled = true;
      document.getElementById("p2Btn").disabled = false;
    } else {
      document.getElementById("p1Btn").disabled = false;
      document.getElementById("p2Btn").disabled = true;
    }
  }, [gameStatus]);

  const checkEndGame = () => {
    if (
      p1Compare > 0 &&
      p2Compare > 0 &&
      p1Compare === p2Compare &&
      player1Cards.length + player1Collection.length < 4
    ) {
      dispatch(cardsActions.endGame());
      dispatch(gameActions.addWinner(players[0].player2));
    } else if (
      p1Compare > 0 &&
      p2Compare > 0 &&
      p1Compare === p2Compare &&
      player2Cards.length + player2Collection.length < 4
    ) {
      dispatch(cardsActions.endGame());
      dispatch(gameActions.addWinner(players[0].player1));
    }
    if (gameStatus && player1Cards.length + player1Collection.length <= 0) {
      dispatch(cardsActions.endGame());
      dispatch(gameActions.addWinner(players[0].player1));
    } else if (
      gameStatus &&
      player2Cards.length + player2Collection.length <= 0
    ) {
      dispatch(cardsActions.endGame());
      dispatch(gameActions.addWinner(players[0].player2));
    }
  };

  const changeCurrentPlayer = () => {
    if (Object.keys(currentPlayer)[0] === "player1") {
      dispatch(gameActions.setCurrentPlayer(players[1]));
      document.getElementById("p2Btn").disabled = false;
      document.getElementById("p1Btn").disabled = true;
    } else if (Object.keys(currentPlayer)[0] === "player2") {
      dispatch(gameActions.setCurrentPlayer(players[0]));

      document.getElementById("p2Btn").disabled = true;

      if (players[0].player1 !== "Computer") {
        document.getElementById("p1Btn").disabled = false;
      }
    }
  };

  useEffect(() => {
    if (player1War.length !== player2War.length) {
      setWinnerOfHand("");
    }
  }, [player1War, player2War]);

  return (
    <>
      <div className="row">
        <div
          className={
            Object.keys(currentPlayer)[0] === "player1"
              ? "column currentPlayer"
              : "column notCurrentPlayer"
          }
        >
          <h1>
            {player1.name}'s <br /> Cards
          </h1>
          <h3>
            Cards in hand: {player1Cards.length + player1Collection.length}
          </h3>

          <div className="inner-container">
            <PlayerCollection player={"Player1"} />
            <button
              id="p1Btn"
              onClick={p1War}
              className="clickCard"
              style={{
                backgroundImage: `url(${cardBack})`,
              }}
            ></button>
          </div>
        </div>
        <div className="column middle">
          <PlayerWar player={"Player1"} />
          {winnerOfHand.length !== 0 ? (
            <h6> {winnerOfHand} wins hand </h6>
          ) : (
            <h6></h6>
          )}
          <PlayerWar player={"Player2"} />
        </div>
        <div
          className={
            Object.keys(currentPlayer)[0] === "player2"
              ? "column currentPlayer"
              : "column notCurrentPlayer"
          }
        >
          <h1>
            {player2.name}'s <br /> Cards
          </h1>
          <h3>
            Cards in hand: {player2Cards.length + player2Collection.length}
          </h3>

          <div className="inner-container">
            <PlayerCollection player={"Player2"} />
            <button
              id="p2Btn"
              onClick={p2War}
              className="clickCard"
              style={{
                backgroundImage: `url(${cardBack})`,
              }}
            ></button>
          </div>
        </div>
      </div>

      <div className="row">
        {<Player1Battle battleStartingIndex={0} />}
        {<Player2Battle battleStartingIndex={0} />}
      </div>
    </>
  );
}

export default GamePlay;
