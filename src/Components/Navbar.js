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
import PaletteIcon from "@mui/icons-material/Palette";

export default function Navbar() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userActions.logout());
  };
  function loggedOut() {
    return (
      <ul className="nav justify-content-center">
        <Button
          href="/login"
          color="inherit"
          variant="outlined"
          sx={{
            mt: 3,
            mb: 2,
            borderRadius: "40px",
            margin: "0 auto",
            "&:hover": {
              borderColor: "#F18F01",
              color: "#F18F01",
            },
          }}
        >
          Login
          {/* LoginForm */}
        </Button>
        <Button
          href="/signup"
          variant="outlined"
          color="inherit"
          sx={{
            mt: 3,
            mb: 2,
            borderRadius: "40px",
            margin: "0 auto",
            marginLeft: "20px",
            "&:hover": {
              borderColor: "#F18F01",
              color: "#F18F01",
            },
          }}
        >
          Create Account
        </Button>
      </ul>
    );
  }
  function loggedIn() {
    return (
      <ul className="nav justify-content-center">
        {/* <Button href="/profile" color="inherit">
          Profile
        </Button> */}
        <Button
          onClick={logout}
          href="/"
          color="inherit"
          variant="outlined"
          sx={{
            mt: 3,
            mb: 2,
            borderRadius: "40px",
            margin: "0 auto",
            "&:hover": {
              borderColor: "#F18F01",
              color: "#F18F01",
            },
          }}
        >
          Log Out
        </Button>
      </ul>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "rgba(79, 55,115, .9)",
          color: "#E9E6E9",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{
              mr: 2,
              "&:hover": {
                borderColor: "#F18F01",
                color: "#F18F01",
              },
            }}
            href="/"
          >
            <PaletteIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            align="left"
            onClick="/"
          >
            CodePlayground
          </Typography>
          {isLoggedIn === true ? loggedIn() : loggedOut()}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
