import React from "react";
import { withStyles, Link, Grid, Typography } from "@material-ui/core";

// remaining relevant styles from style.css
// look for classNames with these style classes in the returned component below
// .wrapper {
//   margin: 0 auto;
// }

// .footer-social {
//   list-style: none;
//   margin-top: 1.5em;
//   margin-bottom: 1.5em;
//   font-size: 11px;
//   display: -webkit-box;
//   display: -moz-box;
//   display: -ms-flexbox;
//   display: -webkit-flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
// }

// .fb {
//   color: #f2c944;
//   font-family: "SelawikRegular", Helvetica, Arial, sans-serif;
//   font-size: 30px;
//   font-weight: bold;
//   padding-top: 0;
// }

// const StyledLink = withStyles({
//   root: {
//     fontSize: "11px",
//     color: "#000000",
//     textDecoration: "none",
//     borderBottom: "0px transparent",
//     backgroundColor: "none",
//     textTransform: "none",
//     display: "block",
//     padding: "1.5em",
//     marginTop: "1em",
//     "&:hover": {
//       background: "none",
//       backgroundSize: 0,
//       backgroundColor: "none",
//       textDecoration: "none",
//     },
//   },
// })(Link);

const Copyright = withStyles({
  root: {
    fontSize: "11px",
    textAlign: "center",
    paddingBottom: "1em",
    paddingTop: "5em",
    width: "100%",
    height: "30px",
  },
})(Typography);

const staticText = {
  EmailSignUpText: [
    "Sign up for email updates",
    "S'abonner aux courriels mise à jour ",
  ],
  SeekingText: ["Seeking Services", "Recherche de Services"],
  OfferingText: ["Offering Services", "Offrez Vos Services"],
  WhyText: ["Why Does This Exist?", "Pourquoi cette ressource existe-t-elle?"],
  AboutText: ["About Us", "À propos"],
  ResourcesText: ["Resources", "Ressources"],
  // CopyrightText: [
  //   "Copyright © CURE Concordia 2020, Inc. All rights reserved.",
  //   "Droit d'auteur © CURE Concordia 2020, Inc. Tous droits réservés.",
  // ],
};

export default function Footer() {
  return (
    <Grid container style={{ borderTop: "2px solid lightgrey" }}>
      <Grid container spacing={3} className="wrapper footer">
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <ul className="footer-social">
              <Link underline="hover">{staticText.EmailSignUpText[1]}</Link>
              <span className="fb">f</span>
            </ul>
          </Grid>
        </Grid>
        {/* <Grid container item xs={12}>
          <Copyright>{staticText.CopyrightText[1]}</Copyright>
        </Grid> */}
      </Grid>
    </Grid>
  );
}
