import React from 'react';
import { Icon } from "@material-ui/core";
import { Link, withStyles, makeStyles } from '@material-ui/core';


const StyledIcon = withStyles({
    root: {
        color: '#f2c944',
        fontSize: '1.2 em',
        textAlign: 'right',
        fontWeight: '900',
        display: 'inline-block',
        lineHeight: '2em',
        paddingRight: '2px',
        marginTop: 0,
        '&:hover': {
            background: 'none'
        }
    }
})(Link)

const StyledText = makeStyles((theme) => ({
    
}))

export default function ArrowForward({ text }) {
    return (
        <div>
            <StyledIcon underline="none">
                <span>{text}</span>
                <Icon className="fas fa-arrow-right"></Icon>
            </StyledIcon>
        </div>
    )
}
