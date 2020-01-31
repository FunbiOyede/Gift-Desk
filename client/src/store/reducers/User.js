import * as ActionTypes from "../Actions/ActionTypes";

const initialState = {
  isRegsitered: false,
  userId: ""
};
const User = (state = initialState, action) => {
  if (action.type === ActionTypes.POST_SUCCESS) {
    return {
      ...state,
      isRegsitered: true,
      userId: action.response.data.id
    };
  }
  return state;
};

export default User;
