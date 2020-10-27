import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import React, { useContext } from "react";
import HeaderFooter from "./HeaderFooter";
import Form from "./Form";
import { UserContext } from "../providers/UserProvider";
import SignUpFlow from "./SignUpFlow";

const App = () => {
  const user = useContext(UserContext);
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
        {user ? <Form /> : <SignUpFlow />}
          </div>
        </div>
      </HeaderFooter>
  );
};

export default App;
