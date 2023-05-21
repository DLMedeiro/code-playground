import React from "react";
import "../Styles/CarouselCard.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

function CarouselCard(props) {
  return (
    <Grid container spacing={0}>
      <Grid item xs={5}>
        <h4 className="Card-title">{props.name}</h4>
        <p className="Card-title">{props.caption}</p>
        <p>Technologies Used: {props.tech}</p>
      </Grid>
      <Grid item xs={7}>
        <img className="Card-image" src={props.src} alt={props.caption} />
        <Button
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            borderRadius: "40px",
            margin: "0 auto",
            "&:hover": {
              backgroundColor: "#31edfd",
              borderColor: "#31edfd",
              boxShadow: "none",
              color: "#6d0173",
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
          >
            Check it out here
          </Link>
        </Button>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            borderRadius: "40px",
            margin: "0 auto",
            "&:hover": {
              backgroundColor: "#31edfd",
              borderColor: "#31edfd",
              boxShadow: "none",
              color: "#6d0173",
            },
          }}
          style={{ marginTop: "1rem", marginLeft: "2rem" }}
          href={props.github}
        >
          <Link
            underline="none"
            href={props.github}
            color="white"
            target="_blank"
          >
            View the Github Repository
          </Link>
        </Button>
      </Grid>
      <Grid item xs={12} style={{ paddingTop: "1rem" }}>
        <small className="Card-small">
          Image {props.currNum} of {props.totalNum}
        </small>
      </Grid>
    </Grid>
  );
}

export default CarouselCard;
