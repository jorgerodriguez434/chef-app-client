import React from 'react';
import {shallow} from 'enzyme';
import  ButtonGroup from "../components/button-group";

describe('<AddForm />', () => {
    it('Renders without crashing', () => {
        shallow(<ButtonGroup/>);
    });
});