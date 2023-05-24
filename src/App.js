import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.css";
// import "./Styles/index.css";
import "./Styles/Navbar.css";
import "./Styles/Toast.css";
import "./Styles/Utilities.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar";

import LoginForm from "./Components/Users/UserLoginForm";
import SignUpForm from "./Components/Users/NewUserForm";
import WelcomeUser from "./Components/Home";

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="App">
      <NavBar />
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<WelcomeUser />}></Route>
          <Route path="/login" element={<WelcomeUser />}></Route>
          <Route path="/logout" element={<LoginForm />}></Route>
          <Route path="/signup" element={<WelcomeUser />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<WelcomeUser />}></Route>
          <Route path="/signup" element={<SignUpForm />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
