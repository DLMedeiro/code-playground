import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "../Styles/imageFade.scss";
import ImageCarousel from "./ImageCarousel";

import HeroImage from "../images/pexels-stas-knop-3283142 (1).jpg";
import axios from "axios";

export default function Home() {
  return (
    <Grid
      container
      spacing={0}
      className="drawing-board-container"
      sx={{
        padding: "50px 0",
        // height: "120vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        className="drawing-board-grid"
        item
        // xs={10}
        // style={{
        //   borderColor: "#a0070a",
        //   backgroundColor: "#e1cccb",
        //   background: "transparent",
        //   color: "#a0070a",
        //   borderRadius: "20px",
        // }}
      >
        <ImageCarousel />
      </Grid>
    </Grid>
  );
}
