//this might end up being multiple files etc
import { Button, Link, makeStyles, Typography } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import React from "react";

// this is a test to make sure local styling works on build - it can be removed
//also i dont know if this exact syntax is the best practice for local styling in material-ui I just borrowed it from a quick tutorial for the test
const useStyles = makeStyles({
  borderButton: {
    border: "10px solid black",
  },
});

const Form = () => {
  const classes = useStyles();
  return (
    <>
      <Typography>
        <Link href="#">This is a link!</Link>
      </Typography>
      {/* all these Buttons are tests to make sure material-ui builds and styles correctly - they can be removed */}
      <Button>THIS IS A STANDARD BUTTON</Button>
      <Button color="primary">
        THIS IS A THEMED BUTTON USING PRIMARY COLOR STYLE FROM src/js/theme.js
      </Button>
      <Button color="secondary">
        <InsertEmoticonIcon />
        THIS IS A THEMED BUTTON USING SECONDARY COLOR STYLE FROM src/js/theme.js
      </Button>
      <Button className={classes.borderButton}>
        THIS IS A CUSTOM-sTYLED BUTTON USING LOCALLY DEFINED STYLES IN
        js/components/App.js
      </Button>
    </>
  );
};

export default Form;
