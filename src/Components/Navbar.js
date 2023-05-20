import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from "../store/user-slice";

function Navbar() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const players = useSelector((state) => state.game.players);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userActions.logout());
  };

  function loggedOut() {
    return (
      <ul className="nav justify-content-center">
        <li className="nav-item nav-link">
          <Link to="/">Home</Link>
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

  return (
    <div>
      {players.length <= 1 ? (
        <>{isLoggedIn === true ? loggedIn() : loggedOut()}</>
      ) : (
        <h1>Hi</h1>
      )}
    </div>
  );
}

export default Navbar;
