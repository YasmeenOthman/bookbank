import React from "react";
import { render } from "react-dom";
import $ from "jquery";
import jwt_decode from "jwt-decode";
// import { Provider } from "react-redux";
// import store from "./store";
// import { connect } from "react-redux";
// import { increment, decrement, reset } from "./actionCreators";

import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import { Face, Fingerprint } from "@material-ui/icons";
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: theme.spacing.unit * 50
  }
});

class SignIn extends React.Component<{ classes: any }> {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.padding}>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Face />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="email"
                label="Email"
                type="email"
                fullWidth
                autoFocus
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Fingerprint />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="password"
                label="Password"
                type="password"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <Button
                disableFocusRipple
                disableRipple
                style={{ textTransform: "none" }}
                variant="text"
                color="primary"
              >
                Forgot password ?
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: "10px" }}>
            <Button
              variant="outlined"
              color="primary"
              style={{ textTransform: "none" }}
            >
              Login
            </Button>
          </Grid>
        </div>
      </Paper>
    );
  }

  login() {
    // event.preventDefault();
    const data = {
      email: $("#email").val(),
      password: $("#password").val()
    };
    var that = this;
    $.ajax({
      url: "/login",
      type: "POST",
      data: data,
      success: function(result) {
        localStorage.setItem("usertoken", result);
        const decoded = jwt_decode(result);
      }
    });
  }
}

export default withStyles(styles)(SignIn);
