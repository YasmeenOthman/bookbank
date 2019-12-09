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
import jwt_decode from "jwt-decode";


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
        width: '100px',
        height: '100px'
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
    var token = localStorage.getItem("usertoken");
    console.log(token);
    const decoded = jwt_decode(token);
    var email = decoded.email;

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
            <br/> <br/><br/><br/><br/><br/>
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
                     <b>Email:</b> {email}          
                    </Typography>
                    <br/>
                    <div >
                    <Button variant="contained">Add A BOOK</Button>
                    </div>
                  </Grid>
                  <Grid item>

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