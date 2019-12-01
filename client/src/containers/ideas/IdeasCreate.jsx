import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
class IdeasCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navigation />
        <div>
          <h2>yup ideas create</h2>
          <h4>Is this idea for you?</h4>
          <Link to="/ideas">Yes, for me</Link>
          <Link to="/ideasTwo">No, for someone else</Link>
        </div>
      </div>
    );
  }
}

export default IdeasCreate;
