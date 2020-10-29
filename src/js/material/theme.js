import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      // the following values are from the main site
      main: "#dec3fa", // button background-color
      light: "#c3abdc", // button border color
      dark: "#5a2a88", // nav color
    },
    secondary: {
      main: "#f2c944", // button background-color
      light: "#ffe17e", // link color
      dark: "#d5b13c", // button border color
    },
  },
  typography: {
    h1: {
      fontSize: "2.7 em",
      margin: "1.2em 0",
      fontWeight: "normal",
    },
    h3: {
      fontSize: "1.17 em",
      margin: "1em 0",
      fontWeight: "normal",
    },
    h6: {
      fontSize: "0.88em",
      lineHeight: "2em",
    },
  },
});

theme.props = {
  MuiButton: {
    disableElevation: true,
    variant: "contained",
  },
  MuiLink: {
    color: "inherit",
    underline: "always",
  },
  MuiAppBar: {
    position: "fixed",
    elevation: 0,
  },
  MuiToolBar: {
    disableGutters: true,
  },
};

theme.overrides = {
  MuiButton: {
    root: {
      borderRadius: 30,
      border: "1 px solid",
      padding: "1.6rem 2rem",
      margin: "1rem",
    },
    containedPrimary: {
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.light,
      "&:hover": {
        backgroundColor: "#d0b2ef",
      },
    },
    containedSecondary: {
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.dark,
      "&:hover": {
        backgroundColor: "#e9c03c",
      },
    },
    text: {
      fontSize: "16px",
      color: theme.palette.primary.main,
      fontWeight: "normal",
      "&:hover": {
        color: "#fff",
        background: "none",
      },
      "&:focus": {
        color: "#fff",
        background: "none",
      },
    },
  },
  MuiLink: {
    root: {
      fontFamily: theme.typography.fontFamily,
    },
    underlineAlways: {
      color: theme.palette.text.primary,
      textDecorationColor: "transparent",
      borderBottomColor: theme.palette.secondary.light,
      borderBottom: ".2rem solid",
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
        textDecorationColor: theme.palette.secondary.light,
      },
      "&:focus": {
        backgroundColor: theme.palette.secondary.light,
        textDecorationColor: theme.palette.secondary.light,
      },
    },
    underlineNone: {
      color: "#fff",
      textTransform: "uppercase",
      fontSize: "13px",
      padding: "1.7em 1em",
      letterSpacing: "0.05rem",
      "&:hover": {
        backgroundColor: "#6c4097",
      },
      "&:focus": {
        backgroundColor: "#6c4097",
      },
    },
  },
  MuiAppBar: {
    root: {
      height: "3.5rem",
      padding: "0px 32px",
      display: "flex",
    },
    colorPrimary: {
      color: "#fff",
      backgroundColor: theme.palette.primary.dark,
    },
  },
};

export default theme;
