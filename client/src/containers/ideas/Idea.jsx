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
          <Link to="/CreateIdeas">New Idea</Link>

          {/* based of if the ideas column is empty */}
          <p>You dont have any ideas yet</p>
          <h3>Create one</h3>
          <Link to="/CreateIdeas">Create idea</Link>
        </div>
      </div>
    );
  }
}

export default Idea;
