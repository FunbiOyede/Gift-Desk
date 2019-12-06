import * as ActionTypes from "../Actions/ActionTypes";
const initialStateWishlists = {
  name: "",
  title: "",
  Description: "",
  url: "",
  productName: "",
  price: 0
};

export const Wishlists = (state = initialStateWishlists, action) => {
  if (action.type === ActionTypes.GET_WISHLISTS) {
    console.log(action.Name);
    return {
      name: action.Name,
      title: action.Title,
      Description: action.Description,
      url: action.Url,
      productName: action.ProductName,
      price: action.Price
    };
  }
  return state;
};

export default Wishlists;
