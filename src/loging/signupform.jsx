import React from "react";
import $ from "jquery";
// import { func } from "prop-types";
// import jwt_decode from "jwt-decode";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  saveUserInfo() {
    var registerInfo = {
      username: $("#username").val(),
      email: $("#email").val(),
      password: $("#password").val()
    };
    // console.log(registerInfo);
    $.ajax({
      url: "http://localhost:8000/signup",
      method: "POST",
      data: registerInfo,
      dataType: "json",
      success: function (data) {
        console.log(data);
        alert("you have been signed up successfully plz login now ");
        window.location.href = "http://localhost:3000/login";
      }
      // error: function (err) {
      //   alert("Already exist");
      // }
    });
  }

  render() {
    return (
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

        </div>
        <div
          className="auth"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <form className="ui form" style={{ marginTop: "10px" }}>
            <div className="field">
              <label className="em">User-name</label>

              <span className="required" style={{ color: "red" }}>
                *
              </span>
              <br />
              <input
                id="username"
                placeholder="User-name"
                style={{ width: 250, height: 30 }}
              />
            </div>
            <br />
            <div className="field">
              <label className="em">Email</label>

              <span className="required" style={{ color: "red" }}>
                *
              </span>
              <br />
              <input
                id="email"
                placeholder="email"
                style={{ width: 250, height: 30 }}
              />
            </div>
            <br />
            <div className="field">
              <label className="pass">Password</label>

              <span className="required" style={{ color: "red" }}>
                *
              </span>
              <br />
              <input
                type="password"
                id="password"
                placeholder="password"
                style={{ width: 250, height: 30 }}
              />
            </div>
            <br />
            <div>
              <button
                onClick={this.saveUserInfo.bind(this)}
                type="button"
                className="ui button"
                style={{
                  backgroundColor: "#F08080",
                  width: 100,
                  height: 30,
                  marginLeft: "80px"
                }}
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
