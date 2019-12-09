import * as ActionTypes from "../Actions/ActionTypes";
const initialStateWishlists = {
  Wishlists: [],
  error: false
};

export const Wishlists = (state = initialStateWishlists, action) => {
  if (action.type === ActionTypes.FETCH_WISHLISTS_SUCCESS) {
    return {
      ...state,
      Wishlists: [...action.response]
    };
  }
  if (action.type === ActionTypes.FETCH_WISHLISTS_FAILED) {
    return {
      ...state,
      error: true
    };
  }
  return state;
};

export default Wishlists;
