import React from 'react';
import {shallow} from 'enzyme';
import  {AddIngredients} from "../components/add-ingredients";

describe('<AddForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddIngredients ingredients={['lettuce', 'tomato', 'bacon']} />);
    });
});