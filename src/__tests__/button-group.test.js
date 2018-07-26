import React from 'react';
import {shallow} from 'enzyme';
import  ButtonGroup from "../components/button-group";

describe('<ButtonGroup />', () => {
    it('Renders without crashing', () => {
        shallow(<ButtonGroup/>);
    });
});