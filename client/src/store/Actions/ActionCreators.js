import * as ActionTypes from "./ActionTypes";

/**
 *
 * @param  {...any} wishlists
 * @function  @get_wishlists
 * @returns {object}
 * @description handles wishlists information
 */
export const get_wishlists = (...wishlists) => {
  return {
    type: ActionTypes.GET_WISHLISTS,
    Name: wishlists[0],
    Title: wishlists[1],
    Description: wishlists[2],
    Url: wishlists[3],
    ProductName: wishlists[4],
    Price: wishlists[5]
  };
};
