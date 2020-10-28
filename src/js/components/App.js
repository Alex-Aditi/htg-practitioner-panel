import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import HeaderFooter from "./HeaderFooter";
import Form from "./Form";
import { UserContext } from "../providers/UserProvider";
import SignUpFlow from "./SignUpFlow";

import SquareCard from "./SquareCard";
import ArrowForward from "./ArrowForward";
import ArrowBackward from "./ArrowForward";

const App = () => {
  const user = useContext(UserContext);
  return (
    <HeaderFooter>
      <div className="header">
        <div className="inner home">
          <Typography variant="h1" id="announce">
            Welcome to the Practitioner Panel
          </Typography>
          <div id="seek">
            {user ? <Form /> : <SignUpFlow />}
          </div>
          <div id="offer">
            <SquareCard title="Test Card">
              <Typography>
                This card is a sample of the cards that will be included in the form.
              </Typography>
              <ArrowForward text="Next Card"/> 
            </SquareCard>
          </div>
        </div>
      </div>
    </HeaderFooter>
  );
};

export default App;
