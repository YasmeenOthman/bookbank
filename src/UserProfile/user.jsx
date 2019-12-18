import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import NavBar from '../HomePage/NavBar';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import RestoreIcon from '@material-ui/icons/Restore';
import FullWidthTabs from './tabs.jsx'
import { storage } from '../firebase/firebase';

import Container from '@material-ui/core/Container'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '80px',

  },
  root1: {
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
      fontSize: 20,
    },
    body1: {
      fontSize: 26,
    },
    h5: {
      fontSize: 30,
    },
    subtitle2: {
      fontSize: 26,
    }
  },
});




function UserProfile(props) {
  var token = localStorage.getItem("usertoken");
  console.log(token);
  const decoded = jwt_decode(token);
  var email = decoded.email;
  var username = decoded.userName;
  var id = decoded.userId;
  console.log(id)
  const classes = useStyles();


  //------------------variables for handle media-------------------
  const [imageAsFile, setImageAsFile] = React.useState('');
  const [imageAsUrl, setImageAsUrl] = React.useState('');

  //---------------------handle media file-------------------------
  console.log(imageAsFile);
  const handleImageAsFile = (e) => {
    e.preventDefault();
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  //-----------------Get url from Firebase-------------------------
  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    console.log('start of upload');

    //---------error handling------
    if (imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }

    //------uploadTask variable-----
    const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);

    //----grab the image from firebase as an imageUrl---
    uploadTask.on(
      'state_changed',
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log('snapshot in the next line !');
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage.ref('images').child(imageAsFile.name).getDownloadURL().then((fireBaseUrl) => {
          setImageAsUrl((fbUrl) => fireBaseUrl);
          console.log(imageAsUrl);
        });
      }
    );
  };


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
  }, []);

  const [user, setUser] = React.useState('');
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <NavBar />
      
    <Container>
      
        
        <Paper className={classes.paper}>
          <Grid container spacing={4}>
            <Grid item>
              <br /> <br /><br /><br /><br /><br />
              <Avatar className={classes.avatar} src={imageAsUrl} alt="Profile picture"></Avatar>
              <Button variant="contained" component="label">
                Edit your profile
						<input type="file" onChange={handleImageAsFile} style={{ display: 'none' }} />
              </Button>
              <Button variant="contained" onClick={handleFireBaseUpload}>
                Save Photo
					</Button>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={9}>
                <Grid item xs>

                  <Typography gutterBottom variant="h5">
                    USER PROFILE
                    </Typography>
                  <br />
                  <br />
                  <br />
                  <Typography variant="subtitle1" >
                    Name:{username}
                  </Typography>
                  <br />
                  <Typography variant="subtitle1" >
                    <b>Email:</b> {email}
                  </Typography>
                  <br />
                  <div >
                    <Link href={`/profile/${id}/AddDonatedBook`}>
                      <Button variant="contained">Add A BOOK</Button>
                    </Link>
                    <br/><br/><br/><br/>
                      < FullWidthTabs />
                    </div>
                  </Grid>
                </Grid>
            </Grid>
          </Grid>
        </Paper>
      
    </Container>
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(UserProfile);
