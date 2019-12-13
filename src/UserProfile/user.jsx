import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavBar from '../HomePage/NavBar';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {useState,useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import RestoreIcon from '@material-ui/icons/Restore';

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
    var username = decoded.userName;
    var id = decoded._id;
    console.log(id)
    const classes = useStyles();
 

    useEffect(() => {
      var path = window.location.href;
      console.log(path)
      var myPath = path.split('/');
      var userId = myPath[4];
      axios.get(`http://localhost:8000/profile/${userId}`)
      .then(res => {
        setUser(res.data);
        console.log(res.data)
    })
      .catch(err => {
        console.log(err);
      })
    },[]);

    const [user, setUser] = React.useState('');
    const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
                    Name:{username} 
                    </Typography>
                    <br/>
                    <Typography variant="subtitle1" >
                     <b>Email:</b> {email}          
                    </Typography>
                    <br/>
                    <div >
                    <Button variant="contained">Add A BOOK</Button>
                    <BottomNavigation value={value} onChange={handleChange}>
                  <BottomNavigationAction label="recent books added" value="recents" icon={<RestoreIcon />} />
                  </BottomNavigation>

                    </div>
                  </Grid>
                  {/* <List >  */}
                  {/* {ownerBook.map((user1) => ( */}
                {/* <ListItem > */}
                  {/* <ListItemText key={user1.id}/> {user1.bookName} </ListItem> */}
                {/* ))} */}
                 {/* </List> */}
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