import React from "react";
import { Link, withStyles } from "@material-ui/core";
import clsx from 'clsx';

const styles = {
  root: {
    color: "#f2c944",
    fontSize: "1.2 em",
    textAlign: "left",
    fontWeight: "900",
    display: "inline-flex",
    lineHeight: "2em",
    marginTop: 0,
    "&:hover": {
      background: "none",
    },
    "&:focus": {
      background: "none",
    },
  },
};

function StyledIcon(props) {
    const { classes, children, className, ...other } = props;
    return (
        <Link underline="none" className={clsx(classes.root, className)} {...other}>
            {children}
        </Link>
    )
}

export default withStyles(styles)(StyledIcon);