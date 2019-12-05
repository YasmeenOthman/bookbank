import React from "react";
import { render } from "react-dom";
import $ from "jquery";
import jwt_decode from "jwt-decode";
import SignUp from "./signupform";
// import { Provider } from "react-redux";
// import store from "./store";
// import { connect } from "react-redux";
// import { increment, decrement, reset } from "./actionCreators";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: (
        <div
          style={{
            marginTop: 250
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img
              className="logo"
              style={{ width: "70px" }}
              src="https://previews.123rf.com/images/tanyastock/tanyastock1609/tanyastock160901582/62841748-user-icon-human-person-symbol-avatar-login-sign-blue-circle-button-with-flat-web-icon-vector.jpg"
            ></img>
            <h2 style={{ marginBottom: "10px" }}>Welcome to Book-Bank</h2>
            <p className="join">
              New to Book-Bank?
              <a href="#">Join</a>{" "}
            </p>
          </div>
          <div
            className="auth"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <form
              onSubmit={this.loginFunction.bind(this)}
              className="ui form"
              style={{ marginTop: "10px" }}
            >
              <div className="field">
                <label className="em">Email</label>

                <span className="required" style={{ color: "red" }}>
                  *
                </span>
                <br />
                <input id="email" placeholder="email" />
              </div>

              <div className="field">
                <label className="pass">Password</label>

                <span className="required" style={{ color: "red" }}>
                  *
                </span>
                <br />
                <input type="password" id="password" placeholder="password" />
              </div>
              <div>
                <button
                  type="submit"
                  className="ui button"
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    backgroundColor: "#F08080",
                    width: 40
                  }}
                >
                  Login
                </button>
                <span className="choose"> or </span>
                <button
                  type="button"
                  className="ui button"
                  style={{ backgroundColor: "#F08080" }}
                  onClick={this.redirect.bind(this)}
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      )
    };
  }

  redirect() {
    this.setState({
      component: <SignUp />
    });
  }

  loginFunction() {
    var data = {
      email: $("#email").val(),
      password: $("#password").val()
    };
    var that = this;
    $.ajax({
      url: "/login",
      method: "POST",
      data: data,
      datatype: "json",
      success: response => {
        localStorage.setItem("usertoken", response);
        const decoded = jwt_decode(response);
        this.setState({
          email: decoded.password
        });
      }
    });
  }
  render() {
    return this.state.component;
  }
}

export default SignIn;
