import React from "react";
import { Link, makeStyles } from "@material-ui/core";

// This component adds yellow color and other styling to icons that it wraps

// this creates a function that then creates a classes object in styledIcon below
//calling classes.root in className of a component applies those styles to that component
const useStyles = makeStyles({
  root: {
    color: "#f2c944",
    fontSize: "1.2 em",
    textAlign: "left",
    fontWeight: "900",
    display: "flex",
    alignItems: "center",
    lineHeight: "2em",
    "&:hover": {
      background: "none",
    },
    "&:focus": {
      background: "none",
    },
  },
});

function StyledIcon({ children, href }) {
  const classes = useStyles();
  return (
    <Link
      underline="none"
      className={classes.root}
      // for now this is href - it may chnge to be an onClick property
      href={href}
    >
      {children}
    </Link>
  );
}

export default StyledIcon;
