import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      border: '1px solid grey',
      padding: '1em',
      height: 'fit-content',
      backgroundColor: '#fff',
      overflow: 'hidden',
      display: 'block',
    },
  });
  

export default function SquareCard({ title, children }) {

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root} variant="outlined">
                <Typography variant="h3" style={{marginTop: 0}}>{title}</Typography>
                {children}
            </Card>
        </div>
    )
}
