import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import jwt_decode from 'jwt-decode';

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





export default function BooksRequested() {
  const classes = useStyles();
  const [data, setdata] = useState([]);
  const [books, setbooks] = useState([]);
  const [requester,setrequester]=useState([]);
  const [request,setrequest]=useState([]);
  const [blueprint, setBlueprint] = useState([])
  var token = localStorage.getItem("usertoken");
  const decoded = jwt_decode(token);
  var email = decoded.email;
  var username = decoded.userName;
  var userIdFromToken = decoded.userId;
 
  useEffect(() => {
    var path = window.location.href;
    console.log(path)
    var myPath = path.split('/');
    var univId = myPath[4];
  
    axios
      .get(`http://localhost:8000/profile/${userIdFromToken}/requestedBooks`)
      .then((res) => {

        setbooks(res.data.bluePrintBooks);
        setrequester(res.data.requesters);
        setrequest(res.data.request)
        setBlueprint(res.data.requestedBooksfromUser)
        setdata(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const handleaccept = (event) => {
  //   console.log(Blueprint)
	// 	event.preventDefault();
	// 	axios
	// 		.post(`http://localhost:8000/profile/${userIdFromToken}/requestedBooks/${donatedBookId}/AcceptRequest`, {
  //       userId: userIdFromToken,
  //       donatedBookId: blueprint.requestedBooksfromUser.bookdonatedId
	// 		})
	// 		.then((response) => {
	// 			console.log(response.data);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// 		alert("You added New Book")
	// };
 
  return (
    <div>
    <div className={classes.root}>         
                 <Paper className={classes.paper}>
                 <Grid container spacing={2}>
                   <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                {requester.map((requester1) => (
                  requester1.userName                    
                ))}  requested {books.map((book1) => (
                    book1.bookName   
                ))}

              </Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained" component="label" className={classes.button1} 
                    // onClick={handleaccept}
                    // var bookdonatedId = {bluePrintBooks.map((book) => (
                    //  book.donatedBookId                       
                    // ))}
                    >
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
                  
    </div>
    </div>
  )
}
