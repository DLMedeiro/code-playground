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
      <ul className="nav justify-content-center ">
        <Button
          id="nav-button"
          href="/code-playground/login"
          // color="inherit"
          variant="outlined"
          // className="nav-button"
          // sx={{
          //   mt: 3,
          //   mb: 2,
          //   borderRadius: "40px",
          //   margin: "0 auto",
          //   "&:hover": {
          //     borderColor: "#dac6c5",
          //     color: "#dac6c5",
          //     background: "#a0070a",
          //   },
          // }}
        >
          Login
          {/* LoginForm */}
        </Button>
        <Button
          id="nav-button"
          href="/code-playground/signup"
          variant="outlined"
          // color="inherit"
          // className="nav-button"
          // sx={{
          //   mt: 3,
          //   mb: 2,
          //   borderRadius: "40px",
          //   margin: "0 auto",
          //   marginLeft: "20px",
          //   "&:hover": {
          //     borderColor: "#dac6c5",
          //     color: "#dac6c5",
          //     background: "#a0070a",
          //   },
          // }}
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
          id="nav-button"
          onClick={logout}
          href="/code-playground/"
          // color="inherit"
          variant="outlined"
          // className="nav-button"
          // sx={{
          //   mt: 3,
          //   mb: 2,
          //   borderRadius: "40px",
          //   margin: "0 auto",
          //   "&:hover": {
          //     borderColor: "#dac6c5",
          //     color: "#dac6c5",
          //     background: "#a0070a",
          //   },
          // }}
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
          backgroundColor: "#dac6c5",
          color: "#a0070a",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{
              "&:hover": {
                borderColor: "rgba(160, 7, 10, .3)",
                color: "rgba(160, 7, 10, .3)",
              },
            }}
            href="/code-playground/"
          >
            <PaletteIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            align="left"
            onClick="/code-playground/"
          >
            CodePlayground
          </Typography>
          {isLoggedIn === true ? loggedIn() : loggedOut()}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
