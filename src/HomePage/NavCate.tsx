import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

//-----------------drawer component------------
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    display: 'contents',
    color: 'gray'
  },
  menu: {
    color: 'white',
    marginLeft: -11,
    paddingLeft: 0
  },
  h1:{
    margin: 19,
    border: '1px solid #77b748',
    textAlign: 'center',
    color: '#77b748'
  }
});
export default function NavCate() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      left: false, 
    });
  
    type DrawerSide = 'left';
    const toggleDrawer = (side: DrawerSide, open: boolean) => (
      event: React.KeyboardEvent | React.MouseEvent,
    ) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
  
      setState({ ...state, [side]: open });
    };
  
    const sideList = (side: DrawerSide) => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <h1 className={classes.h1}>BOOK BANK</h1>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
            <Link href={"/"+text} className={classes.link}>
              <ListItemIcon><ArrowForwardIosIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
             <Link href={"/"+text} className={classes.link}>
              <ListItemIcon><ArrowForwardIosIcon /></ListItemIcon>
              <ListItemText primary={text} />
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
    );
  // eslint-disable-next-line
    return (
      <div>
        <Button onClick={toggleDrawer('left', true)}><MenuIcon fontSize="large" className={classes.menu}/></Button>
        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
          {sideList('left')}
        </Drawer>
      </div>
    );
  }