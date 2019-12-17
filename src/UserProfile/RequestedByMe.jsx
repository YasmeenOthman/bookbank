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
      // background: 'rgb(0, 179, 0)',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width: 250,
      margin: 'auto'
  },
  imgBook: {
      height: 55,
      marginBottom: 10,
      maxWidth: '100%'
  },
  h2: {
      color: 'gray',
      marginBottom: 20
  },
  root1:{
    marginTop: 50,
    textAlign: 'center',
    marginBottom: 100,
    fontSize:30
  }
})
);



export default function RequestedByMe() {

  const [books, setbooks] = useState([]);
  const [data, setData] = useState([])
  const [owner,setOwners]=useState([]);
  const [blueprint,setblueprints]=useState([]);
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
        setbooks(res.data.requestedBooks);
        setblueprints(res.data.bluePrintBooks)
        setData (res.data)

        // setbooks(res.data)
				console.log('nouuuur', res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
      
  var bookname = blueprint.bookName;
  return (
    <div>
                 { !books.isAccepted ? (
               
                   blueprint.map((book1) => (
                    <Container>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={books._id}>
                    <Paper className={classes.paper}>
                      <img alt="img" src={book1.bookCover} className={classes.imgBook} />
                
                        <h3 style={{ marginBottom: 5 }}>{book1.bookName}</h3>
         
                        <Button style={{ color: 'Black', border: '1px solid white' }} variant="outlined">
                          Status: Accepted
                        </Button>
    
                    </Paper>
                  </Grid>
                  </Grid>
                </Container>
                   ))
                 ):(
                  blueprint.map((book1) => (
                    <Container>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={books._id}>
                    <Paper className={classes.paper}>
                      <img alt="img" src={book1.bookCover} className={classes.imgBook} />
         
                        <h3 style={{ marginBottom: 5 }}>{book1.bookName}</h3>
       
                        <Button style={{ color: 'Black', border: '1px solid white' }} variant="outlined">
                          Status: Ignored
                        </Button>
                    </Paper>
                  </Grid>
                  </Grid>
                  </Container>
                   ))
                 )}
</div>           
        )
 }
