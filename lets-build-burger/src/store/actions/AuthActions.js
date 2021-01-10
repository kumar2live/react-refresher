import axios from "axios";

import * as appActionTypes from "./AppActionTypes";
import { SIGN_UP_URL, SIGN_IN_URL } from "../../utils/app-urls";

export const authStart = () => {
  return {
    type: appActionTypes.AUTH_START,
  };
};

export const authSuccess = ({ idToken, localId }) => {
  return {
    type: appActionTypes.AUTH_SUCCESS,
    token: idToken,
    userId: localId,
  };
};

export const authFailed = (error) => {
  return {
    type: appActionTypes.AUTH_FAILED,
    error: error,
  };
};

export const authLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiryDate");
  localStorage.removeItem("userId");
  return {
    type: appActionTypes.AUTH_LOG_OUT,
  };
};

export const checkAuthTimeOut = (timeData) => {
  return (dispatch) => {
    setTimeout(() => dispatch(authLogout()), timeData * 1000);
  };
};

export const authMeIn = (email, password, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart);

    const url = isSignUp ? SIGN_UP_URL : SIGN_IN_URL;
    const authData = { email, password, returnSecureToken: true };

    console.log("authData: ", authData);

    axios
      .post(url, authData)
      .then((response) => {
        console.log("auth response: ", response);
        const expDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expiryDate", expDate);
        localStorage.setItem("userId", response.data.localId);

        dispatch(authSuccess(response.data));
        dispatch(checkAuthTimeOut(response.data.expiresIn));
      })
      .catch((error) => {
        console.log("auth error: ", error);
        dispatch(authFailed(error.response.data.error));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: appActionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const checkAuthState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(authLogout());
    } else {
      const expiryDate = localStorage.getItem("expiryDate");
      if (expiryDate <= new Date()) {
        dispatch(authLogout());
      } else {
        const userId = localStorage.getItem("userId");
        const timeData =
          (new Date(expiryDate).getTime() - new Date().getTime()) / 1000;
        dispatch(authSuccess({ idToken: token, localId: userId }));
        dispatch(checkAuthTimeOut(timeData));
      }
    }
  };
};
