import * as constants from "../constants/actions.constants";

export const setLoginSuccess = isLoggedIn => ({
  type: constants.LOGIN_SUCCESS,
  isLoggedIn
});

export const setLoginError = error => ({
  type: constants.LOGIN_ERROR,
  error
});

export const addIngredient = ingredient => ({
  type: constants.ADD_INGREDIENT,
  ingredient
});

export const addCategory = category => ({
  type: constants.ADD_CATEGORY,
  category
});

export const clearThings= () => ({
  type: constants.CLEAR_THINGS
});

export const removeIngredient = index => ({
  type: constants.REMOVE_INGREDIENT,
  index
});
