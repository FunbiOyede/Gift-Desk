import * as ActionTypes from "../Actions/ActionTypes";

const initialState = {
  isRegsitered: false
};
const User = (state = initialState, action) => {
  if (action.type === ActionTypes.POST_SUCCESS) {
    return {
      ...state,
      isRegsitered: true
    };
  }
  return state;
};

export default User;
