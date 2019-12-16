import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import jwt_decode from 'jwt-decode';
import { Theme } from '@material-ui/core/styles/createMuiTheme'

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



export default function RequestedByMe() {

  const [books, setbooks] = useState([]);
  const [owner,setOwners]=useState([]);
  const classes = useStyles();
  var token = localStorage.getItem("usertoken");
  const decoded = jwt_decode(token);
  var email = decoded.email;
  var username = decoded.userName;
  var id = decoded.userId;
  
  // var request = function () {
  //   if (books.isAccepted === true) {
  //     return "Accepted"
  //   } else if (books.isAccepted === false && books.isIgnored === false) {
  //     return "Ignored"
  //   } else {
  //     return "pending"
  //   }
  // }


	useEffect(() => {
		var path = window.location.href;
		console.log(path)
		var myPath = path.split('/');
		var univId = myPath[4];

		axios
			.get(`http://localhost:8000/profile/${id}/booksRequestedByTheUser`)
			.then((res) => {
        setOwners(res.data.namesOfOwners);
        setbooks(res.data.requestedBooks)
        // setbooks(res.data)
				console.log('nouuuur', res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
      

  return (
    <Container>
    <div className={classes.root}>
                 
                 { !books.isAccepted ? (
                    owner.map((owner1) => (
                      <Paper className={classes.paper}>
                      <Grid container spacing={2}>
                      <Grid item xs={12} sm container>
                   <Grid item xs container direction="column" spacing={2}>
                   <Grid item xs>
                       <Typography gutterBottom variant="subtitle1">
                           {`${owner1.userName} accepted your request`}                              
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
                 ) : (
                  owner.map((owner1) => (
                    <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                          <Grid item xs={12} sm container>
                       <Grid item xs container direction="column" spacing={2}>
                       <Grid item xs>
                           <Typography gutterBottom variant="subtitle1">
                               {`${owner1.userName} ignored your request`}                              
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
                 )}
                   
    </div>
    </Container> 
  )
}
       
    
                    /* { book.isAccepted ? 
                    (
                      owner.map((owner1) => (
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm container>
                       <Grid item xs container direction="column" spacing={2}>
                       <Grid item xs>
                           <Typography gutterBottom variant="subtitle1">
                               {`${owner1.userName} accepted your request`}                              
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
                      )
                    ) : (
                      owner.map((owner1) => (
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm container>
                       <Grid item xs container direction="column" spacing={2}>
                       <Grid item xs>
                           <Typography gutterBottom variant="subtitle1">
                               {`${owner1.userName} accepted your request`}                              
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
                      ))
                    )
                   )
                } 
                      </Paper>      
    </div>
    </Container> 
  );
} */
