import React from "react";
import { Card, Typography, makeStyles } from "@material-ui/core";
import ArrowForward from './ArrowForward';
import ArrowBackward from './ArrowBackward';

const useStyles = makeStyles({
  root: {
    border: "1px solid grey",
    padding: "2em",
    margin: "5em 0em",
    height: "fit-content",
    backgroundColor: "#fff",
    overflow: "hidden",
    display: "block",
  },
});

function buttonChildren(arrows) {
  switch(arrows) {
    case "both":
      return (
        <>
          <ArrowForward />
          <ArrowBackward />
        </>
      );
    case "back":
      return (
        <>
          <ArrowBackward />
        </>
      );
    case "next": 
      return (
        <>
          <ArrowForward />
        </>
      );
    default:
      <></>
  }
}

export default function SquareCard({ title, children, arrows }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <Typography variant="h3" style={{ marginTop: 0 }}>
          {title}
        </Typography>
        {children}
        {buttonChildren(arrows)}
      </Card>
    </div>
  );
}
