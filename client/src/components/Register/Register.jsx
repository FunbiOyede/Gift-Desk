import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import styles from "./Register.module.css";
import HomeNav from "../Navigation/HomeNavigation";

import Aide from "../HOC/Aide";
import { connect } from "react-redux";
import { create_user } from "../../store/Actions/ActionCreators";
class Register extends Component {
  state = {
    Name: "",
    email: "",
    Password: ""
  };

  handleName = e => {
    this.setState({
      Name: e.target.value
    });
  };

  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  handlePassword = e => {
    this.setState({
      Password: e.target.value
    });
  };
  SubmitUsers = e => {
    e.preventDefault();
    this.props.getUsers(this.state.Name, this.state.email, this.state.Password);
  };
  render() {
    let RegisterComponent = (
      <Aide>
        <HomeNav />
        <div>
          <Typography
            variant="h6"
            style={{ fontWeight: 700, color: "rgb(56, 64, 72)" }}
          >
            Register
          </Typography>

          <form style={{ display: "grid", width: "40%", margin: "0 auto" }}>
            <TextField
              placeholder="Name"
              label="Name"
              margin="normal"
              variant="outlined"
              className={styles.Register}
              onChange={this.handleName}
            />
            <TextField
              placeholder="Email"
              label="Email"
              margin="normal"
              variant="outlined"
              type="email"
              className={styles.Register}
              onChange={this.handleEmail}
            />
            <TextField
              placeholder="Password"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              className={styles.Register}
              onChange={this.handlePassword}
            />

            <TextField
              placeholder="Confirm password"
              label="Confirm password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              className={styles.Register}
            />

            <button onClick={this.SubmitUsers} className={styles.Button}>
              Register
            </button>
            {/* <Button TypeOfForm="register" /> */}
          </form>
          <div>
            <Link className={styles.link} to="/login">
              Login
            </Link>
          </div>
        </div>
      </Aide>
    );
    if (this.props.isRegistered) {
      RegisterComponent = <Redirect from="/register" to="/dashboard" />;
    }
    return RegisterComponent;
  }
}

const mapStateToProps = state => {
  return {
    isRegistered: state.User.isRegsitered
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUsers: (name, email, password) =>
      dispatch(create_user(name, email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
