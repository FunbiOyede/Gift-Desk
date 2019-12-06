import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
class Register extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder=" Confirm password" />
          <Button TypeOfForm="register" />
        </form>
        <div>
          <Link
            style={{
              color: "blue",
              textAlign: "center",
              textDecoration: "none"
            }}
            to="/login"
          >
            Login{" "}
          </Link>
        </div>
      </div>
    );
  }
}

export default Register;
