import React from "react";
import { Icon, Typography, makeStyles } from "@material-ui/core";
import StyledIcon from "./StyledIcon";

const useStyles = makeStyles({
  root: {
    color: "#000",
    textAlign: "left",
    letterSpacing: "0.05em",
    padding: "0px 0px 2px 6px",
  }
});

export default function ArrowBackward({ text, href }) {
  const classes = useStyles();
  return (
    <StyledIcon href={href}>
      <Icon className="fas fa-arrow-left"></Icon>
      <Typography variant="h6" className={classes.root}>
        {text}
      </Typography>
    </StyledIcon>
  );
}
