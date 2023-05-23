import React from "react";
import "../Styles/CarouselCard.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

function CarouselCard(props) {
  return (
    <Grid container spacing={0}>
      <Grid item xs={5}>
        <h2 className="Card-title">{props.name}</h2>
        <h4 className="card-h4">Description</h4>
        <p className="card-p">{props.caption}</p>
        <h4 className="card-h4">Technologies</h4>
        <p className="card-p"> {props.tech}</p>
      </Grid>
      <Grid item xs={7}>
        <img className="Card-image" src={props.src} alt={props.caption} />
        <Button
          variant="outlined"
          color="inherit"
          sx={{
            mt: 3,
            mb: 2,
            borderRadius: "40px",
            margin: "0 auto",
            "&:hover": {
              backgroundColor: "rgba(160, 7, 10, .3)",
              borderColor: "rgba(160, 7, 10, .3)",
              boxShadow: "none",
            },
          }}
          style={{ marginTop: "1rem" }}
          href={props.active}
        >
          <Link
            underline="none"
            href={props.active}
            color="white"
            target="_blank"
            style={{ color: "#a0070a" }}
          >
            Check it out here
          </Link>
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          sx={{
            mt: 3,
            mb: 2,
            borderRadius: "40px",
            margin: "0 auto",
            // borderColor: "#3581B8",
            "&:hover": {
              color: "#dac6c5",
              backgroundColor: "rgba(160, 7, 10, .3)",
              borderColor: "rgba(160, 7, 10, .3)",
              boxShadow: "none",
            },
          }}
          style={{ marginTop: "1rem", marginLeft: "2rem" }}
          href={props.github}
        >
          <Link
            underline="none"
            href={props.github}
            target="_blank"
            style={{ color: "#a0070a" }}
          >
            View the Github Repository
          </Link>
        </Button>
      </Grid>
      <Grid item xs={12} style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
        <small className="Card-small">
          Image {props.currNum} of {props.totalNum}
        </small>
      </Grid>
    </Grid>
  );
}

export default CarouselCard;
