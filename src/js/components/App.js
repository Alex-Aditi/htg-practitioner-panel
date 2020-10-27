import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import HeaderFooter from "./HeaderFooter";

// this is a test to make sure local styling works on build - it can be removed
//also i dont know if this exact syntax is the best practice for local styling in material-ui I just borrowed it from a quick tutorial for the test
const useStyles = makeStyles({
  borderButton: {
    border: "10px solid black",
  },
});

const App = () => {
  const classes = useStyles();
  return (
      <HeaderFooter>
        <div className="header">
          <div className="inner home">
            <Typography variant="h1" id="announce">
              Welcome to the Practitioner Panel
            </Typography>
            <Button color="primary" id="seek">
              THIS IS A THEMED BUTTON USING PRIMARY COLOR STYLE FROM src/js/theme.js
            </Button>
            <Button color="secondary" id="offer">
              <InsertEmoticonIcon />
              THIS IS A THEMED BUTTON USING SECONDARY COLOR STYLE FROM
              src/js/theme.js
            </Button>
            <Button className={classes.borderButton} id="newsletter">
              THIS IS A CUSTOM-sTYLED BUTTON USING LOCALLY DEFINED STYLES IN
              js/components/App.js
            </Button>
          </div>
        </div>
      </HeaderFooter>
  );
};

export default App;
