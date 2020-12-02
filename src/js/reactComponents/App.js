import React, { useContext } from "react";
import HeaderFooter from "./navigation/HeaderFooter";
import Form from "./form/Form";
import { UserContext } from "./providers/UserProvider";
import SignUpFlow from "./login/SignUpFlow";

const App = () => {
  const user = useContext(UserContext);
  return <HeaderFooter>{user ? <Form /> : <SignUpFlow />}</HeaderFooter>;
};

export default App;
