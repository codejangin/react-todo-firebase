import React, { Component } from "react";
import firebase from "./firebase";

class Login extends Component {
  state = {
    username: "",
    password: "",
    isLoggedIn: false,
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    this.setState({
      [name]: value, // [] name will change
    });
  };

  onClickHandler = (e) => {
    e.preventDefault();
    if (this.state.username === "" || this.state.password === "") {
      return;
    }
    firebase
      .doSignInWithEmailAndPassword(this.state.username, this.state.password)
      .then((res) => {
        console.log(res);
        localStorage.setItem("isLoggedIn", true);
        this.props.login();
      });
  };

  onKeyUpHandler = (e) => {
    if (e.keyCode === 13) {
      this.passWord.focus();
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="container">
        <div className="box-container">
          <div className="box">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    Username
                  </span>
                </div>
                <input
                  ref={(input) => {
                    this.userName = input;
                  }}
                  onKeyUp={this.onKeyUpHandler}
                  name="username"
                  value={username}
                  onChange={this.onChangeHandler}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon2">
                    Password
                  </span>
                </div>
                <input
                  ref={(input) => {
                    this.passWord = input;
                  }}
                  name="password"
                  value={password}
                  onChange={this.onChangeHandler}
                  type="password"
                  className="form-control"
                />
              </div>
              <div className="input-group mb-3">
                <button
                  onClick={this.onClickHandler}
                  className="btn btn-primary btn-lg btn-block"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
