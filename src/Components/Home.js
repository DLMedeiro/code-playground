import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "../Styles/imageFade.scss";

import HeroImage from "../images/pexels-stas-knop-3283142 (1).jpg";
import axios from "axios";

export default function Home() {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        padding: "78px 0",
        height: "90vh",
        display: "flex",
        // flexDirection: 'column', -> not needed?
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12} sx={{ fontSize: "2rem" }}>
        <h1>Looking for Motivation?</h1>
        <p>Start tracking your progress and reaching your goals today!</p>

        <Link to="login" style={{ textDecoration: "none", margin: "1rem" }}>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              borderRadius: "40px",
              margin: "0 auto",
            }}
          >
            Log In
          </Button>
        </Link>
        <Link to="demo" style={{ textDecoration: "none", margin: "1rem" }}>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              borderRadius: "40px",
              margin: "0 auto",
            }}
          >
            Try out a demo
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <span className="faded faded-all">
          <img src={HeroImage} alt="bored dog" style={{ width: "100%" }}></img>
        </span>
      </Grid>
    </Grid>
  );
}
