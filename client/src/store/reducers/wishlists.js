import * as ActionTypes from "../Actions/ActionTypes";
const initialStateWishlists = {
  Wishlists: [],
  error: false,
  errorPost: false
};

export const Wishlists = (state = initialStateWishlists, action) => {
  if (action.type === ActionTypes.POST_WISHLIST_FAILED) {
    return {
      ...state,
      errorPost: true
    };
  }
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

  if (action.type === ActionTypes.DELETE_WISHLISTS_SUCCESS) {
    const updatedWishlists = state.Wishlists.filter(
      result => result.id !== action.wishId
    );
    return {
      ...state,
      Wishlists: updatedWishlists
    };
  }
  return state;
};

export default Wishlists;
