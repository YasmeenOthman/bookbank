import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';


//---------Lastest Books Added----------

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            background: 'rgb(119, 183, 71)',
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,

        },
        imgBook: {
            height: 385,
            marginBottom: 10,
            maxWidth: '100%'
        },
        h2: {
            color: 'gray',
            marginBottom: 20
        },

    }),
);

export const LastBook = () => {
    const classes = useStyles();
    const [books, setBooks] = useState([])
    const allInfo = async () => {
        axios.get('http://localhost:8000/')
            .then(({ data }) => {
                let books = data.recentBooks;
                setBooks(books);
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        allInfo();
    }, [])

    return (
        <Container>
            <h2 className={classes.h2}>Latest Books Added</h2>
            <Grid container direction="row"
                justify="center"
                alignItems="center" spacing={3}>
                {books.map((book) => (
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={book.id}>
                        <Paper className={classes.paper}>
                            <img alt="img" src={book.bookCover} className={classes.imgBook}></img>
                            <Link href={`/university/${book.universityId}/book/${book.id}`} style={{ color: 'white' }}>
                                <h3 style={{ marginBottom: 5 }}>{book.bookName}</h3>
                            </Link>
                            <Link href={`/university/${book.universityId}/book/${book.id}`} style={{ color: 'white' }}>
                                <p style={{ marginBottom: 5 }}>university name</p>
                            </Link>
                            <Link href={`/university/${book.universityId}/book/${book.id}`} style={{ color: 'white' }}>
                                <Button style={{ color: 'white', border: '1px solid white' }} variant="outlined">Default</Button>
                            </Link>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
export default LastBook;