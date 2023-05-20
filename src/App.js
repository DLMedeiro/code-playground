import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.css";
import "./Styles/Card.css";
import "./Styles/GameBoard.css";
import "./Styles/index.css";
import "./Styles/Navbar.css";
import "./Styles/Toast.css";
import "./Styles/Utilities.css";

import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar";

import LoginForm from "./Components/Users/UserLoginForm";
import Instructions from "./Components/Instructions/Instructions";

import SignUpForm from "./Components/Users/NewUserForm";
import GameSetup from "./Components/GameComponents/GameSetup";
import WelcomeUser from "./Components/Home";
import Profile from "./Components/Users/UserProfile";

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="App">
      <NavBar />
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<WelcomeUser />}></Route>
          <Route path="/login" element={<WelcomeUser />}></Route>
          <Route path="/instructions" element={<Instructions />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/newGame" element={<GameSetup />}></Route>
          <Route path="/logout" element={<LoginForm />}></Route>
          <Route path="/signup" element={<WelcomeUser />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<WelcomeUser />}></Route>
          <Route path="/instructions" element={<Instructions />}></Route>
          <Route path="/newGame" element={<GameSetup />}></Route>
          <Route path="/signup" element={<SignUpForm />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
