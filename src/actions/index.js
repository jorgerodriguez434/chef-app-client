import * as constants from "../constants/actions.constants";

export const setLoginSuccess = isLoggedIn => ({
  type: constants.LOGIN_SUCCESS,
  isLoggedIn
});

export const setLoginError = error => ({
  type: constants.LOGIN_ERROR,
  error
});
