import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      // the following values are from the main site
      main: '#dec3fa', // button background-color
      light: '#c3abdc', // button border color
      dark: '#5a2a88', // nav color
    },
    secondary: {
      main: '#f2c944', // button background-color
      light: '#ffe17e', // link color
      dark: '#d5b13c', // button border color
    },
  },
});

theme.props = {
  MuiButton: {
    disableElevation: true,
    variant: 'contained'
  }
};

theme.overrides = {
  MuiButton: {
    root: {
      borderRadius: 30,
      border: '1 px solid',
      padding: '1.6rem 2rem',
      margin: '1rem'
    },
    containedPrimary: {
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.light,
      '&:hover': {
        backgroundColor: '#d0b2ef'
      }
    },
    containedSecondary: {
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.dark,
      '&:hover': {
        backgroundColor: '#e9c03c'
      }
    },
  }
};

export default theme;
