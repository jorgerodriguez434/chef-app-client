import React from 'react';
import {shallow} from 'enzyme';
import Ingredients from "../components/ingredients";

describe('<AddForm />', () => {
    it('Renders without crashing', () => {
        shallow(<Ingredients ingredients={['lettuce', 'tomato', 'bacon']}  />);
    });
});