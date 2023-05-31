import React from "react";
import "../Styles/CarouselCard.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import GitHubIcon from "@mui/icons-material/GitHub";

function CarouselCard(props) {
  return (
    <Grid container spacing={0}>
      <Grid item xs={5} style={{ paddingLeft: "15px" }}>
        <h2 className="Card-title">{props.name}</h2>
        <h4 className="card-h4">Description</h4>
        <p className="card-p">{props.caption}</p>
        <h4 className="card-h4">Technologies</h4>
        <p className="card-p"> {props.tech}</p>
      </Grid>
      <Grid item xs={7}>
        <img className="Card-image" src={props.src} alt={props.caption} />
        <Button
          // variant="outlined"
          color="inherit"
          sx={{
            mt: 3,
            mb: 2,
            margin: "0 auto",
          }}
          style={{ marginTop: "1rem" }}
          href={props.active}
        >
          <Link
            underline="none"
            href={props.active}
            target="_blank"
            className="drawing-board-button"
            sx={{
              borderBottom: "2px solid transparent",
              "&:hover": {
                borderBottom: "2px solid #2b71bb",
              },
            }}
          >
            <PlayCircleOutlineIcon sx={{ marginRight: "5px" }} />
            View Site
          </Link>
        </Button>
        <Button
          color="inherit"
          sx={{
            mt: 3,
            mb: 2,
            margin: "0 auto",
          }}
          style={{ marginTop: "1rem", marginLeft: "1rem" }}
          href={props.github}
        >
          <Link
            underline="none"
            href={props.github}
            target="_blank"
            className="drawing-board-button"
            sx={{
              borderBottom: "2px solid transparent",
              "&:hover": {
                borderBottom: "2px solid #2b71bb",
              },
            }}
          >
            <GitHubIcon sx={{ marginRight: "5px" }} />
            Source Code
          </Link>
        </Button>
      </Grid>
      {/* <Grid item xs={12} style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
        <small className="Card-small">
          Image {props.currNum} of {props.totalNum}
        </small>
      </Grid> */}
    </Grid>
  );
}

export default CarouselCard;
