import React from "react";
import { Icon } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import StyledIcon from "./StyledIcon";

const textStyle = {
  color: "#000",
  textAlign: "left",
  letterSpacing: "0.05em",
  padding: "0px 0px 2px 6px",
};

export default function ArrowBackward({ text, href }) {
  return (
    <StyledIcon href={href}>
      <Icon className="fas fa-arrow-left"></Icon>
      <Typography variant="h6" style={textStyle}>
        {text}
      </Typography>
    </StyledIcon>
  );
}
