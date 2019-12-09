import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Navigation from "../../components/Navigation/Navigation";
import { create_wishlists } from "../../store/Actions/ActionCreators";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Aide from "../../components/HOC/Aide";
import styles from "./createLists.module.css";
class createLists extends Component {
  state = {
    name: "",
    title: "",
    Description: "",
    url: "",
    productName: "",
    price: 0,
    errorMessage: ""
  };

  getName = e => {
    this.setState({
      name: e.target.value
    });
  };

  getTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  getDescription = e => {
    this.setState({
      Description: e.target.value
    });
  };

  getProductUrl = e => {
    this.setState({
      url: e.target.value
    });
  };

  getProductName = e => {
    this.setState({
      productName: e.target.value
    });
  };

  getProducPrice = e => {
    this.setState({
      price: parseInt(e.target.value, 10)
    });
  };
  saveDetails = e => {
    e.preventDefault();
    this.props.handleWishlists(
      this.state.name,
      this.state.title,
      this.state.Description,
      this.state.url,
      this.state.productName,
      this.state.price
    );

    if (this.props.PostError) {
      this.props.history.push("/wishlists");
      this.setState({
        errorMessage: "unable to create wishlists"
      });
    }

    this.setState({
      name: "",
      title: "",
      Description: "",
      url: "",
      productName: "",
      price: ""
    });
  };

  render() {
    return (
      <Aide>
        <Navigation />
        <h3>Create a new wish list</h3>

        <div>
          <form style={form}>
            <TextField
              placeholder="Uncle Jack"
              label="Who is this wish list for?"
              margin="normal"
              variant="outlined"
              onChange={this.getName}
              value={this.state.name}
            />
            <TextField
              placeholder="25th Birthday"
              label="title"
              margin="normal"
              variant="outlined"
              onChange={this.getTitle}
              value={this.state.title}
            />
            <TextField
              label="Description"
              multiline
              rows="4"
              margin="normal"
              variant="outlined"
              onChange={this.getDescription}
              value={this.state.Description}
            />

            <TextField
              placeholder="placetobuy.com.ng"
              label="url"
              margin="normal"
              variant="outlined"
              onChange={this.getProductUrl}
              value={this.state.url}
            />
            <TextField
              placeholder="E.g. Nike Fear Of God"
              label="item name"
              margin="normal"
              variant="outlined"
              onChange={this.getProductName}
              value={this.state.productName}
            />
            <TextField
              label="price"
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              type="number"
              variant="outlined"
              onChange={this.getProducPrice}
              value={this.state.price.toString()}
            />
            <Button
              variant="contained"
              style={{ background: "rgb(47, 108, 172)", color: "white" }}
              size="large"
              startIcon={<SaveIcon />}
              onClick={this.saveDetails}
            >
              Create Wishlists
            </Button>
          </form>
          <div>
            <p style={{ color: "red" }}>{this.state.errorMessage}</p>
          </div>
          <div style={{ margin: "30px" }}>
            <Link to="/wishlists" className={styles.links}>
              cancel
            </Link>
          </div>
        </div>
      </Aide>
    );
  }
}
let form = {
  display: "grid",
  width: "40%",
  margin: "0 auto"
};

const mapStateToProps = state => {
  return {
    PostError: state.Wish.errorPost
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleWishlists: (name, title, description, url, productName, price) =>
      dispatch(
        create_wishlists(name, title, description, url, productName, price)
      )
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(createLists)
);
