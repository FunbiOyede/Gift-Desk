import * as ActionTypes from "./ActionTypes";
import axios from "axios";

/********************************************** Anything that has to do with creating,fetching, updating and deleting a wishlists *******************/

/*****************************************************
 *
 * 1. ==> POST
 */

/**
 * @function post_wishlists
 * @description a sync function that  starts the posting process for wishlists
 */
export const post_wishlists = () => {
  return {
    type: ActionTypes.POST_WISHLIST
  };
};

/**
 * @param {*} response
 * @function post_wishlists_success
 * @description a sync function that  get response from server
 */

export const post_wishlists_success = response => {
  return {
    type: ActionTypes.POST_WISHLIST_SUCCESS,
    response: response
  };
};

/**
 * @param {*} response
 * @function post_wishlists_failed
 * @description a sync function that gets failed responses
 */
export const post_wishlists_failed = response => {
  return {
    type: ActionTypes.POST_WISHLIST_FAILED,
    response: response
  };
};

/**
 *
 * @param  {...any} wishlists
 * @function  create_wishlists
 * @returns {object}
 * @description handles wishlists information
 * async function makes a post request for creating a new wishlists
 */
export const create_wishlists = (...wishlists) => {
  return dispatch => {
    dispatch(post_wishlists());
    const wishlist = {
      Name: wishlists[0],
      Title: wishlists[1],
      Description: wishlists[2],
      Url: wishlists[3],
      ItemName: wishlists[4],
      Price: wishlists[5]
    };
    axios
      .post("http://localhost:5000/vivid/wishlists/create", wishlist)
      .then(response => {
        dispatch(post_wishlists_success(response));
      })
      .catch(error => {
        dispatch(post_wishlists_failed(error));
      });
  };
};

/*****************************************************
 * 2. ==> GET
 *
 */
/**
 * @function fetch_wishlists
 * @description a sync function that tarts the fetching process for wishlists
 */
export const fetch_wislists = () => {
  return {
    type: ActionTypes.FETCH_WISHLISTS
  };
};

/**
 *
 * @param {*} response
 * @function fetch_wishlists_success
 * @description a sync function that  get response from server
 */
export const fetch_wishlists_success = response => {
  return {
    type: ActionTypes.FETCH_WISHLISTS_SUCCESS,
    response: response
  };
};

/**
 *
 * @param {*} response
 * @function fetch_wishlists_failure
 * @description a sync function that  get response from server
 */

export const fetch_wishlists_failure = response => {
  return {
    type: ActionTypes.FETCH_WISHLISTS_FAILED,
    response: response
  };
};

/**
 * @description fetches wishlits aync
 */
export const get_wishlists = () => {
  return dispatch => {
    dispatch(fetch_wislists());
    axios
      .get("http://localhost:5000/vivid/wishlists")
      .then(response => {
        dispatch(fetch_wishlists_success(response.data));
      })
      .catch(error => {
        dispatch(fetch_wishlists_failure(error));
      });
  };
};

/*****************************************************
 * 3. ==> DELETE
 *
 */

/**
 * @function delete_wishlists
 * @description a sync function that starts the process for  deleting wishlists
 */
export const delete_wislists = () => {
  return {
    type: ActionTypes.DELETE_WISHLISTS
  };
};

/**
 *
 * @param {*} response
 * @function delete_wishlists_success
 * @description a sync function that  get success response from server
 */
export const delete_wishlists_success = WishlistsId => {
  return {
    type: ActionTypes.DELETE_WISHLISTS_SUCCESS,
    wishId: WishlistsId
  };
};

/**
 *
 * @param {*} response
 * @function delete_wishlists_failure
 * @description a sync function that  get a failed response from server
 */

export const delete_wishlists_failure = response => {
  return {
    type: ActionTypes.DELETE_WISHLISTS_FAILED,
    response: response
  };
};

export const deleteWishlists = id => {
  return dispatch => {
    dispatch(delete_wislists());
    axios
      .delete(`http://localhost:5000/vivid/wishlists/delete/${id}`)
      .then(response => {
        console.log(response.data);
        dispatch(delete_wishlists_success(id));
      })
      .catch(error => {
        dispatch(delete_wishlists_failure(error));
      });
  };
};

/***************************************Anything that has to do with creating,deleting and updating ideas */

export const create_ideas = (...ideas) => {
  return {
    type: ActionTypes.GET_USER_IDEAS,
    ItemName: ideas[0],
    Description: ideas[1],
    Url: ideas[2],
    Price: ideas[3]
  };
};

/********************************************** Anything that has to do with a user Authentication *******************/

/**
 * @function post_user_data
 * @description sync function
 */
export const post_user_data = () => {
  return {
    type: ActionTypes.POST_USER_DETAILS
  };
};

/**
 * @function post_user_success
 * @description gets success response from server
 * sync function
 */
export const post_user_success = response => {
  return {
    type: ActionTypes.POST_SUCCESS,
    response: response
  };
};

/**
 *
 * @param {string} name
 * @param {string} email
 * @param {*} password
 * @function get_user_details
 * @returns {object}
 * @description aynsc function makes a post request for creating a new user
 */

export const create_user = (name, email, password) => {
  return dispatch => {
    dispatch(post_user_data());
    const user_details = {
      Name: name,
      Email: email,
      Password: password
    };
    axios
      .post("http://localhost:5000/vivid/user/create", user_details)
      .then(res => {
        dispatch(post_user_success(res));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
