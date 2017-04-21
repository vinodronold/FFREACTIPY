import React from 'react'
import { shallow } from 'enzyme'
import Toolbar from './Toolbar'

test('Toolbar', () => {
    const testToolbar = shallow(<Toolbar/>)
    expect(true).toEqual(true)
})