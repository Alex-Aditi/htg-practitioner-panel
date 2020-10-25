import React, { useContext } from "react";
import HeaderFooter from "./HeaderFooter";
import Form from "./Form";
import { UserContext } from "../providers/UserProvider";
import SignUpFlow from "./SignUpFlow";
const App = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <HeaderFooter>{user ? <Form /> : <SignUpFlow />}</HeaderFooter>
    </div>
  );
};

export default App;
