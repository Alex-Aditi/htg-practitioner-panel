import React from "react";
import { Icon } from "@material-ui/core";
import { Link, Typography, withStyles } from "@material-ui/core";

const StyledIcon = withStyles({
  root: {
    color: "#f2c944",
    fontSize: "1.2 em",
    textAlign: "right",
    fontWeight: "900",
    display: "inline-flex",
    lineHeight: "2em",
    paddingLeft: "2px",
    marginTop: 0,
    "&:hover": {
      background: "none",
    },
    "&:focus": {
      background: "none",
    },
  },
})(Link);

const textStyle = {
  color: '#000',
  textAlign: 'right',
  letterSpacing: '0.05em',
  padding: '2px 6px 0px 0px'
};

export default function ArrowBackward({ text, href }) {
  return (
    <div style={{justifyContent: 'center'}}>
      <StyledIcon underline="none" href={href}>
        <Icon className="fas fa-arrow-left"></Icon>
        <Typography variant="h6" style={textStyle}>{text}</Typography>
      </StyledIcon>
    </div>
  );
}
