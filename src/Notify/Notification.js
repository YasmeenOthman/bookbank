import React, { Component, Fragment } from 'react';
//I am going to use user profile
import {connect } from 'react-redux';
import { IconButton, Menu } from '@material-ui/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { MenuItem } from 'material-ui';
import Typography from 'material-ui/styles/typography';
// import {markNotificationsRead} from 

class Notifications extends Component {
  state = {
    anchorEl: null //what is anchorE1??
  };

  handleOpem = (event) => {
    this.setState({ anchorEl: event.target });
  }

  handleClose = () => { 
    this.setState({ anchorEl: null })
  }

  onMenuOpened = () => {
    //array of ids of notification that is read 
    let unreadNotificationsIds = this.props.notifications
      .filter(not => !not.read)
      .map(not => not.notificationId);
    this.props.markNotificationsRead(unreadNotificationsIds);
  }

  render(){
    const notification = this.props.notifications;
    const anchorEl = this.state.anchorEl
    dayjs.extend(relativeTime)
    let notificationsIcon //check this!!
    if (notifications && notifications.length > 0) {
      notifications.filter((not) => not.read === false).length > 0
        ? (notificationsIcon = (
            <Badge
              badgeContent={
                notifications.filter((not) => not.read === false).length
              }
              color="secondary"
            >
              <NotificationsIcon />
            </Badge>
          ))
        : (notificationsIcon = <NotificationsIcon />);
    } else {
      notificationsIcon = <NotificationsIcon />;
    }
    let notificationMarkup = 
    notifications && notifications.length > 0 ? (
      notifications.map(not => {
        const verb = not.type === 'accept' ? 'accepted' : "ignored";
        const time = dayjs(not.createdAt).fromNow() //createdAt (inschema)
        const iconColor = not.read ? 'primary' : 'secondary';
        // const icon = not.type === 'like' ? (
        //   <FavouriteIcon color={iconColor} style={{ marginRight: 10}}
        return (
          <MenuItem key={not.createdAt} onClick={this.handleClose}>
              {icone}
                <Typography
                  component={Link}
                  color='default'
                  variant='body1'
                  to={`/profile/${not.recipient}`} // the totorial used scream/not.screamId 
                  >
                    {not.sender} {verb}
                  </Typography>
          </MenuItem>
          )
      })
      ) : (
        <MenuItem onClick={this.handleClose}>
          You have no requested books yet
        </MenuItem>
      )

    return (
      <Fragment>
        <Tooltip placement="top" title="Notifications">
          <IconButton aria-owns={anchorEl ? 'simple-menu' : undefinded}
          aria-haspopup= "true"
          onClick={this.handleOpen}
          >
              {notificationsIcon}
          </IconButton>
        </Tooltip>
        <Menu
        anchorEl={anchorE1}
        open={Boolean(anchorEl)}
        onClose={this.handleClose}
        onEntered={this.onMenuOpened} //this triggered when the menu is opened
        >
          {notificationMarkup}
        </Menu>
      </Fragment>
    )
  }
}
    
Notification.propsTypes = {
  markNotificationsRead: PropsTypes.func.isRequires,
  notifications: PropTypes.object.isRequires
}
const mapStateTopProps = state => ({
  notifications: state.user.notifications
})

export default connect(mapStateToProps, {markNotificationsRead})(Notifications)
