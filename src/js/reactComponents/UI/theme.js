import { createMuiTheme } from "@material-ui/core";

// this function takes an object with theme values as an argument
// and then returns a new theme that overrides the default Mui theme;
// this theme object is later provided as a prop to the themeProvider (see src\js\entrypoint.js)
// where values are not specified here, the site uses the default MUi theme values;
// https://material-ui.com/customization/theming/

const theme = createMuiTheme({
  // palette is the color scheme of the theme
  // based on underlying Material design principles, some MUI components will use primary or secondary color scheme as a default
  // most components, primary or secondary, will default to the "main" attribute of their scheme object
  //
  // primary or secondary can be forced on a component by a prop, e.g. color="primary"
  // there are other scheme objects from material UI to further customize if need be (error, success, etc)
  // https://material-ui.com/customization/palette/

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
  // these customise some typographic components
  // for most others our site simply uses the Mui defaults
  //
  // typography components are called in this fashion <Typography variant="h1">SomeText</Typography>
  //
  // https://material-ui.com/customization/typography/

  typography: {
    h1: {
      fontSize: "2.7 em",
      // margin: "1.2em 0",
      marginBottom: "1.2em",
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

//what the rest of this file is:
//before we export the theme (at the bottom of the file) we override
//custom values on the theme object returned by the function call above

//Each of these components could receive any of these values as props on call
//e.g. for MuiButton below we could individually call <Button disableElevation={true} variant="contained">Some Button Text</Button>
//
//this theme.props here makes each of these components ALWAYS receive
//these props without that being explicitly called each time we use it
//
//this effectively makes all of these props default behaviour on our site
theme.props = {
  // there is api documentation for each type of component, e.g. https://material-ui.com/api/button/
  MuiButton: {
    // this removes a drop shadow elevation effect from buttons
    disableElevation: true,
    // this is a material button style - it means every button will have a border and be slightly rounded etc
    variant: "contained",
  },
  MuiLink: {
    // this ensures that the text color of the link will be the same as it's parent's text value
    // (essentially so it will match the surrounding text)
    color: "inherit",
    // this changes the default MUI component returned by <Link> to an underlined link by default
    // more detail here: https://material-ui.com/api/link/
    underline: "always",
  },
  // this is the navbar
  MuiAppBar: {
    // this fixes the app bar always at the top of the screen, even if the user scrolls down
    position: "fixed",
    // this also takes away drop shadow elevation effect
    elevation: 0,
  },
  MuiToolBar: {
    // this takes away added padding from the left and right side of the parent component that contains the app bar
    disableGutters: true,
  },
};

//this is all simple css values (in jsx syntax)
//this forces itself on the cascade as if it were in a stylesheet with !important indicated
//to make sure it always overrides any other styling and thus becomes a default behaviour of the indicated component
theme.overrides = {
  // there is api documentation for each type of component, e.g. https://material-ui.com/api/button/
  MuiButton: {
    root: {
      borderRadius: 30,
      border: "1 px solid",
      padding: "1.6rem 2rem",
      margin: "1rem",
    },
    containedPrimary: {
      //we have access to any values that were defined in the initial call to createMuiTheme above
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
      // this creates the yellow underline on links
      borderBottomColor: theme.palette.secondary.light,
      borderBottom: ".2rem solid",
      // this creates the effect of a yellow highlight on hovered links
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
        textDecorationColor: theme.palette.secondary.light,
      },
      // this creates the effect of a yellow highlight on focused links
      "&:focus": {
        backgroundColor: theme.palette.secondary.light,
        textDecorationColor: theme.palette.secondary.light,
      },
    },
    //
    // underlineNone: {
    //   color: "#fff",
    //   textTransform: "uppercase",
    //   fontSize: "13px",
    //   padding: "1.7em 1em",
    //   letterSpacing: "0.05rem",
    //   "&:hover": {
    //     backgroundColor: "#6c4097",
    //   },
    //   "&:focus": {
    //     backgroundColor: "#6c4097",
    //   },
    // },
  },
  // this is the navbar
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
