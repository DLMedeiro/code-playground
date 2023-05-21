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
      sx={{
        padding: "50px 0",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={8}
        style={{
          backgroundColor: "rgba(79, 55,115, .9)",
          color: "white",
          borderRadius: "20px",
        }}
      >
        <ImageCarousel />
      </Grid>

    </Grid>
  );
}
