import React from "react";
import { Card, makeStyles } from "@material-ui/core";

// this component adds card border and background and padding/margin around any content that it receives as a child

// this creates a function that then creates a classes object in styledIcon below
//calling classes.root in className of a component applies those styles to that component
const useStyles = makeStyles({
  root: {
    border: "1px solid grey",
    // possibly different adding needed for signupflow cards and form cards
    // padding: "1em",
    padding: "3em",
    margin: "3em 0",
    height: "fit-content",
    backgroundColor: "#fff",
    overflow: "hidden",
    display: "block",
  },
});

export default function SquareCard({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        {children}
      </Card>
    </div>
  );
}
