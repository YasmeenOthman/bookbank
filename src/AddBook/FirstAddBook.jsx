import React, { useState, useEffect }  from "react";
import Container from "@material-ui/core/Container";
import NavBar from "../HomePage/NavBar";
import { createStyles, fade,makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchPosts } from '../actions/postActions';
import {fetchBooks}  from '../actions/bookActions';


const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 350
    },
    textfield: {
        minWidth: 350
    },
    root: {
        flexGrow: 1,
        paddingLeft:0
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      searchBar: {
        background: 'transparent',
        boxShadow: 'none',
        minWidth: 300,
        paddingLeft: 0
      },
      paper: {
        // background: 'rgb(0, 179, 0)',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        //   marginLeft: theme.spacing(20),
        marginRight: theme.spacing(50),
        width: 'auto',
        },
        paddingLeft: 0
      },
      searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      result: {
        position: 'absolute',
        background: 'white',
        color: 'gray',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        borderRadius: 4
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 290,
        //   '&:focus': {
        //     width: 350,
        //   },
        },
      },
      imgBook: {
        height: 250,
        marginBottom: 10,
        maxWidth: '100%'
    },
    allSearch:{
      paddingLeft:0
    }
}));


export  const FirstAddBook = (props) => {
  useEffect(() => {
    props.fetchPosts();
  }, [])
    const classes = useStyles();
    const [university, setUni] = React.useState("");
    const [univ,setUniv] = React.useState([]);
    const [name,setName]= React.useState("");
    const [searchValue, setSearchValue] = useState('');//Hooks for Search function
    const [uniBooks,setuniBooks]=useState("");
    
    let allBooks = []
    props.posts.data ?
    allBooks = props.posts.data.recentBooks
    : allBooks = [];
    console.log(allBooks)

    const handleChange = event => setSearchValue(event.target.value);
    RegExp.quote = function(searchValue) {
    return searchValue.replace(/([.?*+^$[\]\\(){}|-])/gi, "\\$1");
    };
    const regex = new RegExp(RegExp.quote(searchValue), 'gi')
    var searchItems = allBooks.filter(function (hero) {
    if (allBooks) {
      if (searchValue) {
        return hero.bookName.match(regex);
      }
    }

    });
    console.log(searchItems)
    React.useEffect(() =>{
        axios.get(`http://localhost:8000/university/`)
        .then(res => {
          setUniv(res.data);
      })
        .catch(err => {
          console.log(err);
        })
      }, []);

      const onUniChange = event => {
        var path = window.location.href;
        var x = [...path];
        var y = x.length-1;
        var myId = x[y];
        var univId = myId;
        console.log("The University is:  ",event.target.value);
        setUni(event.target.value);
      };


      return (
       <div>
          <NavBar />
          <br/>
          <Container>
          <h2>Add New Book</h2>
          <br />
          <br />
          <br />
          <form noValidate autoComplete="off" >
              <div>
              <FormControl variant="filled" className={classes.formControl}>
              <InputLabel>
                University
              </InputLabel>

              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={university}
                onChange={onUniChange}
              >
                {univ.map((univ1) => (
                <MenuItem key={univ1.id} value={univ1.universityName}>{univ1.universityName}</MenuItem>
                 ))}
              </Select>

              <div>
              <br/>
              <br/>
              
            </div>
            </FormControl>
            <Typography>
              Enter the Name of Book
              </Typography>
            <Toolbar className={classes.allSearch}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={searchValue}
                onChange={handleChange}
              />
            </div>
          </Toolbar>
          <br/>
          <br/>
          <br/>
          <div className={classes.result}>
        {allBooks ?
          <Grid container className={classes.root}>
            <Paper className={classes.paper}>
                <img alt="img"  className={classes.imgBook}></img>
                <h3 style={{marginBottom:5}}>Book Name</h3>
                <h3 style={{marginBottom:5}}>Book Description</h3>
                <Button style={{color: 'Black',border: '1px solid white'}} variant="outlined">Add this Book </Button>        
            </Paper>
          </Grid>
          : <div></div>}
            </div>
            </div>
          </form>  
          </Container>
   
       </div>
      );

}

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(FirstAddBook);