import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    
  },
  button1: {
marginleft: 10,
  }
}));

var dummy = [
  {
    requester: 'Yasmin',
	  owner: 'Nour', // the who donated the book
	  bookName: 'Kill your Darlings', // Id of the BluePrint book
  },
  {
    requester: 'tat',
	  owner: 'Alaa', // the who donated the book
	  bookName: 'hi', 
  }
]
export default function BooksRequested() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
                {dummy.map((book) => (
                 <Paper className={classes.paper}>
                 <Grid container spacing={2}>
                   <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                    {book.requester} requested {book.bookName}
                   </Typography> 
                </Grid>
                <Grid item>
                    <Button variant="contained" component="label" className={classes.button1}>
                  Accept
                </Button>
                <Button variant="contained" component="label" className={classes.button2}>
                  Ignore
                </Button>
                </Grid>
                </Grid>
                </Grid>
        </Grid>
      </Paper>
      
                ))
                }      
    </div>
  );
}
