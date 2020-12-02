import React from "react";
import { withStyles, Link, Grid, Typography } from "@material-ui/core";

const StyledLink = withStyles({
  root: {
    fontSize: "11px",
    color: "#000000",
    textDecoration: "none",
    borderBottom: "0px transparent",
    backgroundColor: "none",
    textTransform: "none",
    display: "block",
    padding: "1.5em",
    marginTop: "1em",
    "&:hover": {
      background: "none",
      backgroundSize: 0,
      backgroundColor: "none",
      textDecoration: "none",
    },
  },
})(Link);

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
  CopyrightText: [
    "Copyright © CURE Concordia 2020, Inc. All rights reserved.",
    "Droit d'auteur © CURE Concordia 2020, Inc. Tous droits réservés.",
  ],
};

const FooterNavLink = ({ linkText, underline = true }) => {
  return underline ? (
    <Grid item xs={2}>
      <li>
        <Link>{linkText}</Link>
      </li>
    </Grid>
  ) : (
    <Grid item xs={2}>
      <li>
        <StyledLink>{linkText}</StyledLink>
      </li>
    </Grid>
  );
};

export default function Footer() {
  return (
    <Grid container style={{ borderTop: "2px solid lightgrey" }}>
      <Grid container spacing={3} className="wrapper footer">
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <ul className="footer-social">
              <FooterNavLink
                underline={false}
                linkText={staticText.EmailSignUpText[1]}
              />
              <span className="fb">f</span>
            </ul>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Copyright>{staticText.CopyrightText[1]}</Copyright>
        </Grid>
      </Grid>
    </Grid>
  );
}
