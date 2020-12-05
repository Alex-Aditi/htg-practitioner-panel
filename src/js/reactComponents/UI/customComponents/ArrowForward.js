import React from "react";
import { Icon } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import StyledIcon from "./StyledIcon";

const textStyle = {
  color: "#000",
  textAlign: "right",
  letterSpacing: "0.05em",
  padding: "2px 6px 0px 0px",
};

export default function ArrowForward({ text, href }) {
  return (
    <StyledIcon href={href}>
      <Typography variant="h6" style={textStyle}>
        {text}
      </Typography>
      <Icon className="fas fa-arrow-right"></Icon>
    </StyledIcon>
  );
}
