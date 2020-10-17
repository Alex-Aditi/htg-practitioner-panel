import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "@material-ui/core";

import App from "./components/App";
import theme from "./material/theme";

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
