//this might end up being multiple files etc
import React from "react";

import HeaderFooter from './HeaderFooter';
import SquareCard from "./styleElements/SquareCard";

import { Button, Grid, Typography } from "@material-ui/core";

const GridStyles = {
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center'
}

const Form = () => {
  return (
    <>
      <HeaderFooter>
        <Grid container style={GridStyles}>
          <Grid item xs={8}>
            {/* The following text is placeholder */}
            <SquareCard title="WELCOME TO THE FORM">
              <Typography>This is what the form is about, please read the guidelines and agree with them before clicking begin. I&#39;m baby +1 cloud bread XOXO mlkshk, chambray leggings taiyaki. Wayfarers hashtag four loko flexitarian butcher pop-up narwhal austin selfies meggings salvia. Live-edge mixtape lumbersexual artisan migas bicycle rights, lyft deep v +1 pug hella post-ironic. Hashtag neutra cliche marfa, ramps sartorial organic venmo selfies occupy etsy VHS hoodie echo park.</Typography>
              <Typography variant="h5">Professional Guidelines</Typography>
              <Typography>Cat ipsum dolor sit amet, curl up and sleep on the freshly laundered towels yet purr for find empty spot in cupboard and sleep all day yet dream about hunting birds. Sit in a box for hours cough hairball on conveniently placed pants but spill litter box, scratch at owner, destroy all furniture, especially couch. Jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water skid on floor, crash into wall for cat sit like bread and stare out cat door then go back inside funny little cat chirrup noise shaking upright tail when standing next to you spot something, big eyes, big eyes, crouch, shake butt</Typography>
              <Typography>CHECKBOX for agreeing with Professional guidelines</Typography>
              <Button color="primary">Begin</Button>
            </SquareCard>
          </Grid>
        </Grid>
      </HeaderFooter>
    </>
  );
};

export default Form;
