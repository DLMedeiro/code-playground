import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from "../store/user-slice";
import { cardsActions, clearCards } from "../store/cards-slice";
import { player1Actions } from "../store/player1-slice";
import { player2Actions } from "../store/player2-slice";
import { gameActions } from "../store/game-slice";
import InstructionModal from "./Instructions/InstructionModal";

function Navbar() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const players = useSelector((state) => state.game.players);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userActions.logout());
  };
  // State for Instruction Modal
  const [show, setShow] = useState(false);

  const newGame = () => {
    dispatch(player1Actions.endGame());
    dispatch(player2Actions.endGame());
    dispatch(cardsActions.endGame());
    dispatch(gameActions.removeWinner());
    dispatch(gameActions.removePlayers());
    dispatch(gameActions.removeCurrentPlayer());
    dispatch(clearCards());
  };

  function loggedOut() {
    return (
      <ul className="nav justify-content-center">
        <li className="nav-item nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/instructions">How to Play</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/login">Login</Link>
          {/* LoginForm */}
        </li>
        <li className="nav-item nav-link">
          <Link to="/signup">Create Account</Link>
        </li>
      </ul>
    );
  }
  function loggedIn() {
    return (
      <ul className="nav justify-content-center">
        <li className="nav-item nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/instructions">How to Play</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/" onClick={logout}>
            Log Out
          </Link>
        </li>
      </ul>
    );
  }
  function gamePlay() {
    return (
      <ul className="nav justify-content-center">
        <li className="nav-item nav-link">
          <Link to="/" onClick={newGame}>
            Leave Game
          </Link>
        </li>
        <li className="nav-item nav-link">
          <Link onClick={() => setShow(true)}>How to Play</Link>
          <InstructionModal onClose={() => setShow(false)} show={show} />
        </li>
      </ul>
    );
  }

  return (
    <div>
      {players.length <= 1 ? (
        <>{isLoggedIn === true ? loggedIn() : loggedOut()}</>
      ) : (
        <>{gamePlay()}</>
      )}
    </div>
  );
}

export default Navbar;
