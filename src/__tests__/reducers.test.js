import { myAppReducer } from "../reducers/index";
import { addIngredient, addCategory } from "../actions";

describe("myAppReducer", () => {
  it("Should set the initial state when nothing is passed in", () => {
    const state = myAppReducer(undefined, { type: "__UNKNOWN" });
    expect(state).toEqual({
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
    });
  });

  it("Should add new ingredient", () => {
    let state;
    state = myAppReducer(state, addIngredient("lettuce"));
    state = myAppReducer(state, addIngredient("tomato"));
    expect(state).toEqual({
      ingredients: ["lettuce", "tomato"],
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
    });
  });

  it("Should add a new category", () => {
    let state;
    state = myAppReducer(state, addCategory("no-meat"));
    state = myAppReducer(state, addCategory("no-gluten"));
    expect(state).toEqual({
      ingredients: [],
      categories: ["no-meat", "no-gluten"],
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
    });
  });


});
