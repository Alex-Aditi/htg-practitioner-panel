import React from "react";
import { Icon, Typography, makeStyles } from "@material-ui/core";
import StyledIcon from "./StyledIcon";
// this component creates an arrow icon that is a link with a text label

// this creates a function that creates a classes object in ArrowBackward below
// calling classes.root in className of a component applies those styles to that component
const useStyles = makeStyles({
  root: {
    color: "#000",
    textAlign: "left",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    fontSize: "13px",
  },
});

export default function ArrowBackward({ label, href }) {
  const classes = useStyles();
  return (
    <StyledIcon href={href}>
      {/* the icon below is styled using the FontAwesome library - that is what fas fa- denotes*/}
      <Icon className="fas fa-arrow-left"></Icon>
      <Typography variant="h6" className={classes.root}>
        {label}
      </Typography>
    </StyledIcon>
  );
}
