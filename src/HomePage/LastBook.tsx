import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
//---------Lastest Books Added----------
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function LastBook() {
  const classes = useStyles();

  
  return (
    <Container>
      <Grid container direction="row"
  justify="center"
  alignItems="center" spacing={1}>
        <Grid item>
        <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item>
        <Paper className={classes.paper}>
            <img alt="img" src="https://www.washingtonpost.com/graphics/2019/entertainment/books/best-books-of-2019/img/750/UGWDXKABSAI6VFIYDZ3KXQEIWY.jpg">
                
            </img>
        </Paper>
        </Grid>
        <Grid item>
        <Paper className={classes.paper}>item</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}