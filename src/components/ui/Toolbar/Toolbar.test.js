import React from 'react'
import { shallow } from 'enzyme'
import Toolbar from './Toolbar'

test('Toolbar', () => {
    const testToolbar = shallow(<Toolbar />);
    console.log(testToolbar);
    //expect(testToolbar.find(Toolbar).length).tobe(3)
})