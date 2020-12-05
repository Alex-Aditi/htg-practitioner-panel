import React from "react";
import { Icon, Typography, makeStyles } from "@material-ui/core";
import StyledIcon from "./StyledIcon";

const useStyles = makeStyles({
  root: {
    color: "#000",
    textAlign: "right",
    letterSpacing: "0.05em",
    padding: "2px 6px 0px 0px",
  },
});

export default function ArrowForward({ text, href }) {
  const classes = useStyles();
  return (
    <StyledIcon href={href}>
      <Typography variant="h6" className={classes.root}>
        {text}
      </Typography>
      <Icon className="fas fa-arrow-right"></Icon>
    </StyledIcon>
  );
}
