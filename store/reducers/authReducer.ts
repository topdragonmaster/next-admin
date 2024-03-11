import { LOGIN_SUCCESS, LOGOUT } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  username: null,
  email: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        email: action.payload.email,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        email: null,
      };
    default:
      return state;
  }
};

export default authReducer;
