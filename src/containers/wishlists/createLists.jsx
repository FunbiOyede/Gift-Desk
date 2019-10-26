import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";

import SaveIcon from "@material-ui/icons/Save";

class createLists extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>Create a new wish list</h3>
        <div>
          <form>
            <TextField
              placeholder="Uncle Jack"
              label="Who is this wish list for?"
              margin="normal"
              variant="outlined"
            />
            <TextField
              placeholder="25th Birthday"
              label="title"
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
              placeholder="E.g. Nike Fear Of God"
              label="item name"
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

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>

            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
            >
              Create Wishlists
            </Button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default createLists;
