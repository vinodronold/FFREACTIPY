import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Toolbar from './Toolbar'
import { clsToolbar } from '../../constants/ui'

describe('<Toolbar />', () => {
    const testToolbar = shallow(<Toolbar />)
    it('should have one header', () => {
        expect(testToolbar.find('header')).toHaveLength(1)
    })    
    it('should have header with fixed class - ' + `header.${clsToolbar}--fixed`, () => {
        expect(testToolbar.find(`header.${clsToolbar}--fixed`)).toHaveLength(1)
    })    
    it('should have one row class - ' + `div.${clsToolbar}__row`, () => {
        expect(testToolbar.find(`div.${clsToolbar}__row`)).toHaveLength(1)
    })    
    it('should have two sections', () => {
        expect(testToolbar.find('section')).toHaveLength(2)
    })    
    it('should match the Last Snapshot', () => {
        expect(toJson(testToolbar)).toMatchSnapshot()
    })
})