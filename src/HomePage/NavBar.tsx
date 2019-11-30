import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typograohy from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';


//---------------styling for navbar--------------
const userStyles = makeStyles({
  root: {
    width: 1170,
    margin: '0 auto'
  },
  firstNav: {
    background: 'white'
  },
  secondNav: {
    background: '#77b748'
  }
});
//-----------------nav bar class-------------
export default function NavBar(){
  const classes = userStyles();
    return( 
           <AppBar position="static">
             {/* first nav bar */}
             <Toolbar className={classes.firstNav}>
               <div className={classes.root}>
               <Grid container >
                 <Grid container >
                         
                 </Grid>
                 <Grid container >

                 </Grid>
               </Grid>
               </div>      
             </Toolbar>
             
             {/* second nav bar */}
             <Toolbar className={classes.secondNav}>

             </Toolbar>
           </AppBar>
        
    )
}