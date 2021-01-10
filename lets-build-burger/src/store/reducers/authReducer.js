import * as appActionTypes from "../actions/AppActionTypes";

const initialState = {
  token: null,
  userId: null,
  errorData: null,
  isLoading: false,
  authRedirectPath: "/",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case appActionTypes.AUTH_START:
      return { ...state, isLoading: true, errorData: null };
    case appActionTypes.AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorData: null,
        token: action.token,
        userId: action.userId,
      };
    case appActionTypes.AUTH_FAILED:
      return { ...state, isLoading: false, errorData: action.error };
    case appActionTypes.AUTH_LOG_OUT:
      return { ...state, isLoading: false, token: null, userId: null };
    case appActionTypes.SET_AUTH_REDIRECT_PATH:
      return { ...state, authRedirectPath: action.path };

    default:
      return { ...state };
  }
};

export default reducer;
