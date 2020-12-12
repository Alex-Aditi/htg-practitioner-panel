import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "@material-ui/core";

import App from "./reactComponents/App";
import UserProvider from "./reactComponents/providers/UserProvider";
import theme from "./reactComponents/UI/theme";
import FormSectionStateProvider from "./reactComponents/providers/FormSectionStateProvider";

render(
  <UserProvider>
    <FormSectionStateProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </FormSectionStateProvider>
  </UserProvider>,
  document.getElementById("root")
);
