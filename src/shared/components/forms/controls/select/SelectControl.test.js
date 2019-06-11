import React from 'react';
import {shallow} from 'enzyme';
import SelectControl from './SelectControl';

describe('Test handleChange method', () => {
    const dataMapEx = [
        {label: 'One', value: 1},
        {label: 'Two', value: 2},
        {label: 'Three', value: 3},
    ];

    it('test', () => {
        const comp = shallow(
            <SelectControl 
                id='age-1' 
                name='age'
                inputLabel='Age'
                dataMap={dataMapEx}/>);

        expect(comp.state.value).toEqual('');
    });
});
