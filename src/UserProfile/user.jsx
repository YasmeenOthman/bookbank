import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import NavBar from '../HomePage/NavBar';
import InputLabel from '@material-ui/core/InputLabel';
import Avatar from '@material-ui/core/Avatar';
import {useState,useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
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
        maxWidth: 1500,
      },
      avatar: {
        margin: 'auto',
        Width: '500',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
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
  
  function UserProfile(props) {
    const classes = useStyles();
    const [user, setUser] = React.useState('');
    useEffect(() => {
      var path = window.location.href;
      console.log()
      var userId = parseInt(path[path.length - 1]);
      axios.get(`http://localhost:8000/profile/${userId}`)
      .then(res => {
        setUser(res.data);
        console.log(res.data)
    })
      .catch(err => {
        console.log(err);
      })
    },[]);

    var token = localStorage.getItem("usertoken");
    console.log(token)

  // const handleChange = event => {
  //   setOwner(event.target.value);
  // };
    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root} >
        <NavBar/>
          <Paper className={classes.paper}>
            <Grid container spacing={4}>
            <Grid item>
            <Avatar className={classes.avatar}></Avatar>
                </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={9}>
                  <Grid item xs>
                    
                    <Typography gutterBottom variant="h5">
                      USER PROFILE
                    </Typography>
                     <br/> 
                     <br/>
                    <br/>
                    <Typography variant="subtitle1" >
                    Name:{user.userName} 
                    </Typography>
                    <br/>
                    <Typography variant="subtitle1" >
                     <b>Email:</b> {user.email}          
                    </Typography>
                    <br/>
                    <Typography variant="subtitle1" >

                    </Typography>
                    <br/>
    

                  </Grid>
                  <Grid item>
                  <div >
                    <Button variant="contained" className={classes.root1}>Send Message</Button>
                    <Button variant="contained">Send Request</Button>
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

  const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(UserProfile);