import React, { Component } from "react";
import axios from "axios";
class Setting extends Component {
  // state = {};
  componentDidMount() {
    axios
      .get("http://localhost:5000/")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        Your Settings
        <p>Update your details and profile photo</p>
      </div>
    );
  }
}

export default Setting;
