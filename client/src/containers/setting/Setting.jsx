import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import TextField from "@material-ui/core/TextField";
class Setting extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div>
          <h4
            style={{
              color: "rgb(34, 34, 34)",
              fontWeight: "lighter",
              fontSize: "2.25rem"
            }}
          >
            Update Profile
          </h4>
          <form style={form}>
            <TextField
              placeholder="change email"
              label="email"
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="password"
              multiline
              margin="normal"
              variant="outlined"
              placeholder="change password"
            />
          </form>
        </div>
      </div>
    );
  }
}

let form = {
  display: "grid",
  width: "40%",
  margin: "0 auto"
};
export default Setting;
