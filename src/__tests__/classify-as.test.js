import React from 'react';
import {shallow} from 'enzyme';
import  ClassifyAs from "../components/classify-as";

describe('<ClassifyAs />', () => {
    it('Renders without crashing', () => {
        shallow(<ClassifyAs/>);
    });
});