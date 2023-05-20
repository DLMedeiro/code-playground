import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { gameActions } from "../store/game-slice";
import { player1Actions } from "../store/player1-slice";
import { player2Actions } from "../store/player2-slice";
import { Card, CardBody } from "reactstrap";

function Home() {
  const dispatch = useDispatch();

  const setComputer = () => {
    dispatch(gameActions.addPlayer({ player1: "Computer" }));
  };

  const resetPlayers = () => {
    dispatch(gameActions.removePlayers());
    dispatch(player1Actions.removePlayer());
    dispatch(player2Actions.removePlayer());
  };

  return (
    <Card>
      <CardBody className="text-center">
        <Link
          id="btn-main"
          role="button"
          className="btn btn-lg btn-block"
          to="/newGame"
          onClick={setComputer}
        >
          Play against a Computer
        </Link>
        <Link
          id="btn-main"
          role="button"
          className="btn btn-lg btn-block"
          to="/newGame"
          // Render GameSetup
          onClick={resetPlayers}
        >
          Play with a friend
        </Link>
      </CardBody>
    </Card>
  );
}

export default Home;
