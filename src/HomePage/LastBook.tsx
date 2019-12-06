import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
//---------Lastest Books Added----------
const items = [
    {
        id: 1,
        url: 'https://www.washingtonpost.com/graphics/2019/entertainment/books/best-books-of-2019/img/750/UGWDXKABSAI6VFIYDZ3KXQEIWY.jpg',
    },
    {
        id: 2,
        url: 'https://graceandtruthbooks.com/wp-content/uploads/JTTB.Scott300-300x390.png',
    },
    {
        id: 3,
        url: 'https://www.sophiainstitute.com/images/uploads/products/9781622823499.jpg',
    },
    {
        id: 4,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DoAXbea0WLIQ-gRCwY5efiIegDA1fkkIEEr9sLNXd6uu0QX-&s',
    },
];
const useStyles = makeStyles((theme: Theme) =>
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

export default function LastBook() {
    const classes = useStyles();


    return (
        <Container>
            <h2 className={classes.h2}>Latest Books Added</h2>
            <Grid container direction="row"
                justify="center"
                alignItems="center" spacing={3}>
                {items.map(item => (
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={item.id}>
                        <Paper className={classes.paper}>
                            <img alt="img" src={item.url} className={classes.imgBook}></img>
                            <Link href="#" style={{color: 'white'}}>
                                <h3 style={{marginBottom:5}}>Book name</h3>
                            </Link>
                            <Link href="#" style={{color: 'white'}}>
                                <p style={{marginBottom:5}}>university name</p>
                            </Link>
                            <Link href="#" style={{color: 'white'}}>
                            <Button style={{color: 'white',border: '1px solid white'}} variant="outlined">Default</Button>
                            </Link>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}