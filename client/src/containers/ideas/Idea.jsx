import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
class Idea extends Component {
  state = {};
  render() {
    return (
      // based on props if the ideas table is empty
      <div>
        <Navigation />
        <div>
          <button>New Idea</button>
          <p>You dont have any ideas yet</p>
          <h3>Create one</h3>
          <Link to="/ideasCreate">Create idea</Link>
        </div>
      </div>
    );
  }
}

export default Idea;
