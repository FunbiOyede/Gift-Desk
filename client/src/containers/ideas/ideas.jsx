import React from "react";
import TextField from "@material-ui/core/TextField";
import Navigation from "../../components/Navigation/Navigation";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import SaveIcon from "@material-ui/icons/Save";
const ideas = props => (
  <div>
    <Navigation />
    <div>
      <h3>for you </h3>
      <form style={form}>
        <TextField
          placeholder="E.g. Nike Fear Of God"
          label="item name"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Description"
          multiline
          rows="4"
          margin="normal"
          variant="outlined"
        />
        <TextField
          placeholder="placetobuy.com.ng"
          label="url"
          margin="normal"
          variant="outlined"
        />

        <TextField
          label="price"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
        />

        <Button
          variant="contained"
          style={{ background: "rgba(76, 128, 104, 0.78)", color: "white" }}
          size="large"
          startIcon={<SaveIcon />}
        >
          Create Wishlists
        </Button>
      </form>

      <div>
        <Link to="/idea">cancel</Link>
      </div>
    </div>
  </div>
);

let form = {
  display: "grid",
  width: "40%",
  margin: "0 auto"
};
export default ideas;
