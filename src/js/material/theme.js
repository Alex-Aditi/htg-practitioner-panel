import { createMuiTheme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  // this is a test that theming works, can be removed
  palette: {
    secondary: purple,
  },
});

export default theme;
