import React from 'react';
import { makeStyles, Link, Grid } from '@material-ui/core';
import '../../static/style.css';

const staticText = {
    EmailSignUpText: [
      "Sign up for email updates",
      "S'abonner aux courriels mise à jour "
    ],
    SeekingText: ["Seeking Services", "Recherche de Services"],
    OfferingText: ["Offering Services", "Offrez Vos Services"],
    WhyText: [
      "Why Does This Exist?",
      "Pourquoi cette ressource existe-t-elle?"
    ],
    AboutText: ["About Us", "À propos"],
    ResourcesText: ["Resources", "Ressources"],
    CopyrightText: [
      "Copyright © CURE Concordia 2020, Inc. All rights reserved.",
      "Droit d'auteur © CURE Concordia 2020, Inc. Tous droits réservés."
    ],
  };

const FooterNavLink = ({ linkText }) => {
    return (
        <li>
            <Link>{linkText}</Link>
        </li>
    )
}

export default function Footer() {
    return (
        <Grid container  style={{"borderTop": "2px solid lightgrey"}}>
                <Grid container spacing={1} className="wrapper">
                    <Grid container item xs={12}>
                        <ul className="footer-social">
                                <FooterNavLink linkText={staticText.EmailSignUpText[1]} id="email"/>
                                <span className="fb">f</span>
                        </ul>
                    </Grid>
                    <Grid container item xs={12}>
                        <ul className="footer-nav">
                            
                                <FooterNavLink linkText={staticText.SeekingText[1]} />
                                <FooterNavLink linkText={staticText.OfferingText[1]} />
                                <FooterNavLink linkText={staticText.WhyText[1]} />
                                <FooterNavLink linkText={staticText.AboutText[1]} />
                                <FooterNavLink linkText={staticText.ResourcesText[1]} />
                        </ul>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <div className="copyright">
                        {staticText.CopyrightText[1]}
                    </div>
                </Grid>
        </Grid>
    )
}
