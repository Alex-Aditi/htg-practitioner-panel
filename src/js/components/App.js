import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import HeaderFooter from "./HeaderFooter";
import Form from "./Form";
import { UserContext } from "../providers/UserProvider";
import SignUpFlow from "./SignUpFlow";

import SquareCard from "./styleElements/SquareCard";
import ArrowBackward from "./styleElements/ArrowBackward";
import ArrowForward from "./styleElements/ArrowForward";

const App = () => {
  const user = useContext(UserContext);
  return (
    <>
    {user ? <Form /> : 
      <HeaderFooter>
        <div className="header">
          <div className="inner home">
            <Typography variant="h1" id="announce">
              Welcome to the Practitioner Panel
            </Typography>
            <div id="seek"><SignUpFlow /></div>
          </div>
        </div>
      </HeaderFooter>
    }
    </>
  );
};

export default App;
