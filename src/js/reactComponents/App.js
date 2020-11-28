import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import HeaderFooter from "./navigation/HeaderFooter";
import Form from "./form/Form";
import { UserContext } from "./providers/UserProvider";
import SignUpFlow from "./login/SignUpFlow";

import SquareCard from "./UI/customComponents/SquareCard";
import ArrowBackward from "./UI/customComponents/ArrowBackward";
import ArrowForward from "./UI/customComponents/ArrowForward";

const App = () => {
  const user = useContext(UserContext);
  return (
    <HeaderFooter>
      <div className="header">
        <div className="inner home">
          <Typography variant="h1" id="announce">
            Welcome to the Practitioner Panel
          </Typography>
          <div id="seek">{user ? <Form /> : <SignUpFlow />}</div>
          <div id="offer">
            <SquareCard title="Test Card">
              <Typography>
                This card is a sample of the cards that will be included in the
                form.
              </Typography>
              <ArrowBackward text="Back" href="#" />
              <ArrowForward text="Next" href="#" />
            </SquareCard>
          </div>
        </div>
      </div>
    </HeaderFooter>
  );
};

export default App;
