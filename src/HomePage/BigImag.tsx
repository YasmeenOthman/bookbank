import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import BookNum from './BookNum';
//------------Maste image component-------
const userStyle = makeStyles({
    root: {
        padding: 0,
        maxWidth: '100%'
    },
    image: {
        width: '100%',
        maxHeight: 490,
        marginBottom: 200
    },
    button: {
        color: 'gray',
        fontSize: 11,
        borderRadius: 0,
        marginRight: 5,
        "&:hover": {
            backgroundColor: "transparent",
        }
    },
    butContainer: {
        position : 'relative'
    },
    butGrid :{
        position : 'absolute',
        top: 395
    }

})
export default function BigImag() {
    const classes = userStyle();
    return (
        <Container className={classes.root}>
            <div className={classes.butContainer}>
                <img alt="empty" src="http://exprostudio.com/html/book_library/images/slider/img-01.jpg" className={classes.image}></img>
                <Grid
                    className={classes.butGrid}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <BookNum />
                </Grid>
            </div>
        </Container>
    );
} 