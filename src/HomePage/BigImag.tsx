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
        maxHeight: 440,
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
        top: 370
    }

})
export default function BigImag() {
    const classes = userStyle();
    return (
        <Container className={classes.root}>
            <div className={classes.butContainer}>
                <img alt="empty" src="https://ww2.kqed.org/forum/wp-content/uploads/sites/43/2019/08/open-book-with-library-bookshelf-toned-background-picture-id1165510711.jpg" className={classes.image}></img>
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