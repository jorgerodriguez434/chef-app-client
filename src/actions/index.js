import * as constants from "../constants/actions.constants";

export const requestLogin = () => ({
  type: constants.LOGIN_REQUEST,
}); 

export const setLoginSuccess = () => ({
  type: constants.LOGIN_SUCCESS,
});

export const setLogOut = () => ({
  type: constants.LOG_OUT
});

export const setLoginFailed =  () => ({
  type: constants.LOGIN_FAILED
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

export const setIngredient = ingredient => ({
  type: constants.SET_INGREDIENT,
  ingredient
});

export const clearIngredients = () => ({
  type: constants.CLEAR_INGREDIENTS
});

export const clearCategories = () => ({
  type: constants.CLEAR_CATEGORIES
});

export const setToken = token => ({
  type: constants.SET_TOKEN,
  token
});

