import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user-slice";

export default function Navbar() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userActions.logout());
  };
  function loggedOut() {
    return (
      <ul className="nav justify-content-center">
        <Button href="/login" color="inherit">
          Login
          {/* LoginForm */}
        </Button>
        <Button href="/signup" color="inherit">
          Create Account
        </Button>
      </ul>
      // <ul className="nav justify-content-center">
      //   <li className="nav-item nav-link">
      //     <Link to="/">Home</Link>
      //   </li>
      //   <li className="nav-item nav-link">
      //     <Link to="/login">Login</Link>
      //     {/* LoginForm */}
      //   </li>
      //   <li className="nav-item nav-link">
      //     <Link to="/signup">Create Account</Link>
      //   </li>
      // </ul>
    );
  }
  function loggedIn() {
    return (
      <ul className="nav justify-content-center">
        <Button href="/profile" color="inherit">
          Profile
        </Button>
        <Button onClick={logout} href="/" color="inherit">
          Log Out
        </Button>
      </ul>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            align="left"
          >
            Time Warp Playhouse
          </Typography>
          {isLoggedIn === true ? loggedIn() : loggedOut()}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
