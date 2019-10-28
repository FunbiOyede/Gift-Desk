import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
class Wishlists extends Component {
  RedirectToCreateWishLists = () => {
    this.props.history.push("/create");
  };
  render() {
    return (
      <div>
        <Navigation />

        <h3>Wish lists</h3>
        <p>You have {this.props.child} upcoming wish lists</p>
        <div>
          <button onClick={this.RedirectToCreateWishLists}>
            New Wishlists
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Wishlists);
