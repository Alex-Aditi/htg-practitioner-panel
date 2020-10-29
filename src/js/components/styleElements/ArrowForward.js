import React from "react";
import { Icon } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import StyledIcon from "./StyledIcon";

const textStyle = {
  textAlign: "right",
  padding: "2px 6px 0px 0px",
};

export default function ArrowForward({ text, onClick }) {
  return (
    <StyledIcon onClick={onClick}>
      <Typography variant="h6" style={textStyle}>
        {text}
      </Typography>
      <Icon className="fas fa-arrow-right"></Icon>
    </StyledIcon>
  );
}
