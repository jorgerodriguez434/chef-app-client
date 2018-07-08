import * as constants from "../constants/actions.constants";
export const initialState = {
  //isLoggedIn: false,
  error: "none",
  ingredients: [],
  categories: [],
  token: "none",
  isAuthenticated: false,
  isPending: false,
  //error: { message: "", code: "" },
};

export const myAppReducer = (state = initialState, action) => {
  console.log(`THE ACTION ${action.type} DISPATCHED!`);
  console.log(`WITH THE PAYLOAD OF ${action.type}`);
  switch (action.type) {
    case constants.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: action.isLoggedIn
      });
    case constants.LOGIN_FAILED:
      return Object.assign({}, state, {
        error: action.error
      });
    case constants.ADD_INGREDIENT:
      return Object.assign({}, state, {
        ingredients: [...state.ingredients, action.ingredient]
      });
    case constants.ADD_CATEGORY:
      return Object.assign({}, state, {
        categories: [...state.categories, action.category]
      });
    case constants.REMOVE_INGREDIENT:
      return Object.assign({}, state, {
        ingredients: state.ingredients.filter(
          ingredient => state.ingredients.indexOf(ingredient) !== action.index
        )
      });
    case constants.SET_INGREDIENT:
      return Object.assign({}, state, {
        ingredient: action.ingredient
      });
    case constants.CLEAR_INGREDIENTS:
      return Object.assign({}, state, {
        ingredients: []
      });
    case constants.CLEAR_CATEGORIES:
      return Object.assign({}, state, {
        categories: []
      });
      case constants.SET_TOKEN:
      return Object.assign({}, state, {
        token: action.token
      });
    default:
      return state;
  }
};
