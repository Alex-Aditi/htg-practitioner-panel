import React from "react";
import { Icon } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import StyledIcon from './StyledIcon';

const textStyle = {
  textAlign: "left",
  padding: "0px 0px 2px 6px",
};

export default function ArrowBackward({ text, onClick }) {
  return (
      <StyledIcon onClick={onClick}>
        <Icon className="fas fa-arrow-left"></Icon>
        <Typography variant="h6" style={textStyle}>
          {text}
        </Typography>
      </StyledIcon>
  );
}
