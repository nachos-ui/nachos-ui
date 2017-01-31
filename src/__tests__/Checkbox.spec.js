import 'react-native'
import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Checkbox from '../Checkbox'

it('should render correctly', () => {
  const component = renderer.create(<Checkbox checked />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('should render disabled', () => {
  const wrapper = shallow(<Checkbox disabled />)
  expect(wrapper.find('TouchableOpacity').prop('disabled')).toBe(
    true
  )
})

it('should call onChange callback', () => {
  const callback = jest.fn()
  const wrapper = shallow(<Checkbox onValueChange={callback} />)
  wrapper.find('TouchableOpacity').simulate('press')
  expect(callback).toBeCalled()
})
