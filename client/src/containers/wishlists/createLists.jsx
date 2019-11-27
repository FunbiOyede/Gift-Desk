import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import SaveIcon from "@material-ui/icons/Save";
import Navigation from "../../components/Navigation/Navigation";

class createLists extends Component {
  state = {
    name: "",
    title: "",
    Description: "",
    url: "",
    productName: "",
    price: 0
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
  };

  render() {
    return (
      <React.Fragment>
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
            />
            <TextField
              placeholder="25th Birthday"
              label="title"
              margin="normal"
              variant="outlined"
              onChange={this.getTitle}
            />

            <TextField
              label="Description"
              multiline
              rows="4"
              margin="normal"
              variant="outlined"
              onChange={this.getDescription}
            />
            <TextField
              placeholder="placetobuy.com.ng"
              label="url"
              margin="normal"
              variant="outlined"
              onChange={this.getProductUrl}
            />
            <TextField
              placeholder="E.g. Nike Fear Of God"
              label="item name"
              margin="normal"
              variant="outlined"
              onChange={this.getProductName}
            />
            <TextField
              label="price"
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              variant="outlined"
              onChange={this.getProducPrice}
            />

            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
              onClick={this.saveDetails}
            >
              Create Wishlists
            </Button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
let form = {
  display: "grid",
  width: "40%",
  margin: "0 auto"
};
export default createLists;
