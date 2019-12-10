import React ,{ useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    searchBar: {
      background: 'transparent',
      boxShadow: 'none',

    },

    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
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
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  }),
);

export const SearchAppBar = (posts) => {
  const [searchValue, setSearchValue] = useState('');
  const classes = useStyles();
  console.log(searchValue)
  let x =[]
  posts.posts.data ?
    x = posts.posts.data.recentBooks
    : x = [];

    console.log(x)
    const handleChange = event => setSearchValue(event.target.value);
    const regex = new RegExp(searchValue, 'gi' )
    var searchItems =  x.filter(function(hero) {
      if(x){
        if(searchValue){
        return hero.bookName.match(regex);
        }
      }
      
    });
    console.log(searchItems)

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.searchBar}>
        <Toolbar>
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
      </AppBar>
      
      <div>
        {x?
        <div>
        {searchItems.map((item) => (<div key={item._id}>{item.bookName}</div>))}
        
        </div>
        :<div></div>}
      </div>
    </div>
  );
}
const mapStateOfProps = state => ({
    posts: state.posts.items
})
export default connect(mapStateOfProps)(SearchAppBar);