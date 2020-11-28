import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "@material-ui/core";

import App from "./reactComponents/App";
import UserProvider from "./reactComponents/providers/UserProvider";
import theme from "./reactComponents/UI/theme";

render(
  <UserProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </UserProvider>,
  document.getElementById("root")
);
