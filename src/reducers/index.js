import * as constants from "../constants/actions.constants";
export const initialState = {
  isLoggedIn: false,
  error: "none",
  ingredients: [],
  categories: ["hi"]
};

export const myAppReducer = (state = initialState, action) => {
  console.log(`THE ACTION ${action.type} DISPATCHED!`);
  console.log(`WITH THE PAYLOAD OF ${action.type}`);
  switch (action.type) {
    case constants.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: action.isLoggedIn
      });
    case constants.LOGIN_ERROR:
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
    default:
      return state;
  }
};

//guesses: [...state.ingredients, action.ingredient]
