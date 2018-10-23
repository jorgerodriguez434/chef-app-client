import * as constants from "../constants/actions.constants";
export const initialState = {
  ingredients: [],
  categories: [],
  token: "none",
  data: "no data",
  displayRedux: "landing",
  isAuthenticated: false,
  isPending: false,
  error: { message: "", code: "" },
  username: "",
  reduxDishName: "",
  reduxDishImage: "",
  reduxId: ""
};

export const myAppReducer = (state = initialState, action) => {
  // console.log(`THE ACTION ${action.type} DISPATCHED!`);
  // console.log(`WITH THE PAYLOAD OF ${action.type}`);
  switch (action.type) {
    case constants.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isPending: true
      });

    case constants.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        isPending: false
      });

    case constants.LOG_OUT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isPending: false
      });
    case constants.LOGIN_FAILED:
      return Object.assign({}, state, {
        isPending: false,
        error: {
          message: `Username or password is incorrect!`,
          code: 400
        }
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
      case constants.UPDATE:
      return Object.assign({}, state, {
        data: "update"
      });
      case constants.SET_DISPLAY:
      return Object.assign({}, state, {
        displayRedux: action.display
      });
      case constants.SET_USERNAME:
      return Object.assign({}, state, {
        username: action.username
      });

      case constants.SET_DISHNAME:
      return Object.assign({}, state, {
        reduxDishName: action.dishName
      });
      case constants.SET_IMAGE:
      return Object.assign({}, state, {
        reduxDishImage: action.image
      });
      case constants.SET_ID:
      return Object.assign({}, state, {
        reduxId: action.id
      });
    default:
      return state;
  }
};