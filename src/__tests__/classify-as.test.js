import React from 'react';
import {shallow} from 'enzyme';
import  ClassifyAs from "../components/classify-as";

describe('<AddForm />', () => {
    it('Renders without crashing', () => {
        shallow(<ClassifyAs/>);
    });
});