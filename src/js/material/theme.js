import { createMuiTheme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'c3abdc', // button border color
      light: '#dec3fa', // button background-color
      dark: '#5a2a88',
    },
    secondary: {
      main: '#f2c944', // button background-color
      light: '#ffe17e', // link color
      dark: '#d5b13c', // button border color
    },
  },
});


export default theme;
