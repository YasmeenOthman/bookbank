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
import axios from 'axios';
import {useState,useEffect} from 'react';
// import {connect} from 'react-redux';
// import BookApi from "../ItemPage1/mockData/book"



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
        // maxHeight: 1000,
      },
      image: {
        width: '80%',
        // height: '100%',
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        // maxHeight: '100%',
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
  

  export default function Item() {
    const classes = useStyles();
    const [owner, setOwner] = React.useState('');

    const [book,setBook] = useState([]);

    useEffect(() => {
      var path = window.location.href;
      console.log()
      var univId = parseInt(path[32]);
      var bookId = parseInt(path[path.length - 1]);

      axios.get(`http://localhost:8000/university/${univId}/book/${bookId}`)
      .then(res => {
        // console.log(res.data);
        setBook(res.data.bluePrintBook);
        // console.log(res.data.donatedBooksOwners)
        setOwnerBook(res.data.donatedBooksOwners);
    })
      .catch(err => {
        console.log(err);
      })
    },[]);
    

  const handleChange = event => {
    setOwner(event.target.value);
  };

    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root} >
        <NavBar/>
          <Paper className={classes.paper}>
            <Grid container spacing={4}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={book.bookCover}/> 
                </ButtonBase>
                </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={9}>
                  <Grid item xs>
                    
                    <Typography gutterBottom variant="h5">
                      {book.bookName}
                    </Typography>
                     <br/> 
                     <br/>
                    <br/>
                    <Typography variant="subtitle1" >
                    <b> University:</b> {book.universityId} 
                    </Typography>
                    <br/>
                    <Typography variant="subtitle1" >
                     <b>Description:</b>  {book.bookDescription}
                    </Typography>
                    <br/>
                    <Typography variant="subtitle1" >
                    <b>Choose the Owner name you want to borrow the book from:</b> 
                    </Typography>
                    <br/>
    
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Owner</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={owner}
          onChange={handleChange}>
          <MenuItem value={10}>{book.Name}</MenuItem>
          <MenuItem value={20}>Tasnem</MenuItem>
          <MenuItem value={30}>Yasmen</MenuItem>
        </Select>
      </FormControl>
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
 

  // const mapStateToProps =(state) => {
  //     return {
  //       bookItem: state.book.bookName,
  //       bookUniversity:state.book.UniversityName
  //     };
  // }
  // export default connect(mapStateToProps)(Item);