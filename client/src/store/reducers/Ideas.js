import * as ActionTypes from "../Actions/ActionTypes";

export const Ideas = (state, action) => {
  if (action.type === ActionTypes.GET_USER_IDEAS) {
    console.log(action.ItemName);
  }
  return state;
};
