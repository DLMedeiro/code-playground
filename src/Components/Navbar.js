import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user-slice";
import ToysIcon from "@mui/icons-material/Toys";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

export default function Navbar() {
  const pages = ["Login", "Create Account", "Logout"];
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userActions.logout());
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function loggedOutLg() {
    return (
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex", fontSize: "2rem" },
        }}
      >
        <Button
          href="/login"
          key="login"
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "#2b71bb", display: "block", fontSize: "1rem" }}
        >
          <div id="nav-button">Login</div>
        </Button>
        <Button
          href="/signup"
          key="signup"
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "#2b71bb", display: "block", fontSize: "1rem" }}
        >
          <div id="nav-button">Create Account</div>
        </Button>
      </Box>
    );
  }
  function loggedInLg() {
    return (
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Button
          id="nav-button"
          href="/"
          key="login"
          onClick={logout}
          sx={{ my: 2, color: "#2b71bb", display: "block" }}
        >
          Logout
        </Button>
      </Box>
    );
  }
  function loggedOutSm() {
    return (
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <MenuItem key="login" onClick={handleCloseNavMenu}>
          <Typography textAlign="center">
            <Button href="/login" key="login" onClick={handleCloseNavMenu}>
              Login
            </Button>
          </Typography>
        </MenuItem>
        <MenuItem key="signup" onClick={handleCloseNavMenu}>
          <Typography textAlign="center">
            <Button href="/signup" key="signup" onClick={handleCloseNavMenu}>
              Create Account
            </Button>
          </Typography>
        </MenuItem>
      </Menu>
    );
  }
  function loggedInSm() {
    return (
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <MenuItem key="logout" onClick={handleCloseNavMenu}>
          <Typography textAlign="center">
            <Button href="/" variant="outlined" key="login" onClick={logout}>
              Logout
            </Button>
          </Typography>
        </MenuItem>
      </Menu>
    );
  }

  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar
      position="static"
      style={{
        backgroundColor: "#fff",
        color: "#2b71bb",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              "&:hover": {
                borderColor: "rgba(43, 113, 187, .3)",
                color: "rgba(43, 113, 187, .3))",
              },
            }}
            href="/"
          >
            <ToysIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {isLoggedIn === true ? loggedInSm() : loggedOutSm()}
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            align="left"
            onClick="/"
          >
            CodePlayground
          </Typography>

          {/* Full Screen */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              "&:hover": {
                borderColor: "rgba(43, 113, 187, .3)",
                color: "rgba(43, 113, 187, .3))",
              },
            }}
            href="/"
          >
            <ToysIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            align="left"
            onClick="/"
          >
            CodePlayground
          </Typography>
          {isLoggedIn === true ? loggedInLg() : loggedOutLg()}

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
