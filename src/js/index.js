import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "@material-ui/core";

import App from "./components/App";
import UserProvider from "./providers/UserProvider";
import theme from "./material/theme";

render(
  <UserProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </UserProvider>,
  document.getElementById("root")
);
