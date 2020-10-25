import React, { useContext } from "react";
import HeaderFooter from "./HeaderFooter";
import Form from "./Form";
import { UserContext } from "../providers/UserProvider";
const App = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <HeaderFooter>{user ? <Form /> : "there is no user"}</HeaderFooter>
    </div>
  );
};

export default App;
