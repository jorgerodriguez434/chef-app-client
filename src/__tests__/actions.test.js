import * as constants from "../constants/actions.constants";
import * as actions from "../actions";

describe('addIngredient', () => {
    it('Should return the action', () => {
        const ingredient = 'lettuce';
        const action = actions.addIngredient(ingredient);
        expect(action.type).toEqual(constants.ADD_INGREDIENT);
        expect(action.ingredient).toEqual(ingredient);
    });
});

describe('addCategory', () => {
    it('Should return the action', () => {
        const category = 'meat';
        const action = actions.addCategory(category);
        expect(action.type).toEqual(constants.ADD_CATEGORY);
        expect(action.category).toEqual(category);
    });
});

describe('requestLogin', () => {
    it('Should return the action', () => {
        const action = actions.requestLogin();
        expect(action.type).toEqual(constants.LOGIN_REQUEST);
    });
});

describe('setLoginSuccess', () => {
    it('Should return the action', () => {
        const action = actions.requestLogin();
        expect(action.type).toEqual(constants.LOGIN_REQUEST);
    });
});