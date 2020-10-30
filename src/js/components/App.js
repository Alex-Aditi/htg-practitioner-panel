import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import HeaderFooter from "./HeaderFooter";
import Form from "./Form";
import SignUpFlow from './SignUpFlow';
import { UserContext } from "../providers/UserProvider";

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
