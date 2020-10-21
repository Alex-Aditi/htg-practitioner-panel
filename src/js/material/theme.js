import { createMuiTheme } from "@material-ui/core";
import { Autorenew, FullscreenExit, GpsFixed } from "@material-ui/icons";

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
  },
  MuiLink: {
    color: 'textPrimary',
    underline: 'always',
  },
  MuiAppBar: {
    position: 'fixed',
    elevation: 0,
  },
  MuiToolBar: {
    disableGutters: true
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
      },
    },
    containedSecondary: {
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.dark,
      '&:hover': {
        backgroundColor: '#e9c03c'
      },
    },
  },
  MuiLink: {
    underlineAlways: {
      textDecorationColor: 'transparent',
      borderBottomColor: theme.palette.secondary.light,
      borderBottom: '.2rem solid',
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
        textDecorationColor: theme.palette.secondary.light,
      },
      '&:focus': {
        backgroundColor: theme.palette.secondary.light,
        textDecorationColor: theme.palette.secondary.light,
      },
    }
  },
  MuiAppBar: {
    root: {
      height: '3.5rem',
    },
    colorPrimary: {
      color: '#fff',
      backgroundColor: theme.palette.primary.dark,
    }
  }
};

export default theme;
