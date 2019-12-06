import React from 'react';
//import './App.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding:'80px',
      
    },
    root1:{
      margin: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 1000,
      maxHeight: 1000,
    },
    image: {
      width: '90%',
      height: '100%',
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      // maxHeight: '100%',
    },
  }),
);

const theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontSize:20,
    },
    body1: {
      fontSize:26,
    },
    h5:{
      fontSize: 30,
    },
    subtitle2:{
      fontSize:26,
    }
  },
});

const Item: React.FC = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root} >
      <Paper className={classes.paper}>
        <Grid container spacing={4}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://d2sofvawe08yqg.cloudfront.net/redux-book/hero?1549474190" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={9}>
              <Grid item xs>
                
                <Typography gutterBottom variant="h5">
                  THE COMPLETE REDUX BOOK
                </Typography>
                 <br/> 
                 <br/>
                 <br/>
                <Typography variant="subtitle1" >
                By: <a href="/"> AMANI ELRAYES</a> 
                </Typography>
                <br/>
                
                <Typography variant="subtitle1" >
                  University: Al-Azhar-Gaza
                </Typography>
                <br/>
                <Typography variant="subtitle1" >
                  Department: Computer Science 
                </Typography>
                <br/>
               
                <Typography variant="subtitle1" >
                  Avalability: Yes
                </Typography>
                <br/>
                <br/>
                <br/>
                
                
                
              </Grid>
              <Grid item>
              <div >
                <Button variant="contained" className={classes.root1}>Send Message</Button>
                
                <Button variant="contained">Send Request For Owner</Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    </ThemeProvider>
  );
}
  

export default Item;


