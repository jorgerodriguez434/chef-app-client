import React from 'react';
import {shallow} from 'enzyme';
import {Dish} from "../components/dish";
import { clearIngredients, clearCategories, setDishName, setDishImage } from '../actions';

describe('<Dish />', () => {
    it('Renders without crashing', () => {
        shallow(<Dish/>);
    });

    it('Dispatches clearIngredients action from setUpdate instance', () => {
        const dispatch = jest.fn();
         const component = shallow(<Dish dispatch={dispatch} stateIngredients={['lettuce', 'tomato', 'bacon']} stateCategories={['meat']}/>);
         const instance = component.instance();
        instance.setUpdate();
        expect(dispatch).toHaveBeenCalledWith(clearIngredients());
    });

    it('Dispatches clearCategories action from setUpdate instance', () => {
        const dispatch = jest.fn();
         const component = shallow(<Dish dispatch={dispatch} stateIngredients={['lettuce', 'tomato', 'bacon']} stateCategories={['meat']}/>);
         const instance = component.instance();
        instance.setUpdate();
        expect(dispatch).toHaveBeenCalledWith(clearCategories());
    }); 

    it('Dispatches setDishName action from setUpdate instance', () => {
        const dispatch = jest.fn();
         const component = shallow(<Dish dispatch={dispatch} stateIngredients={['lettuce', 'tomato', 'bacon']} stateCategories={['meat']} stateName="cool burger"/>);
          const instance = component.instance();
         instance.setUpdate();
         expect(dispatch).toHaveBeenCalledWith(setDishName("cool burger"));
         expect(component.state('name')).toEqual('cool burger');
       
    }); 

    it('Dispatches setDisImage action from setUpdate instance', () => {
        const dispatch = jest.fn();
         const component = shallow(<Dish dispatch={dispatch} stateIngredients={['lettuce', 'tomato', 'bacon']} stateCategories={['meat']} dishImage="cool-image.jpg"/>);
          const instance = component.instance();
         instance.setUpdate();
         expect(dispatch).toHaveBeenCalledWith(setDishImage("cool-image.jpg"));
         expect(component.state('image')).toEqual('cool-image.jpg');
    
    });
});
