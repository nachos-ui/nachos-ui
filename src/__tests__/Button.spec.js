import 'react-native'
import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../Button'

it('should render correctly', () => {
  const component = renderer.create(<Button>Submit</Button>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('should render disabled', () => {
  const wrapper = shallow(<Button disabled>Submit</Button>)
  expect(wrapper.find('TouchableOpacity').prop('disabled')).toBe(
    true
  )
})

it('should call onPress callback', () => {
  const callback = jest.fn()
  const wrapper = shallow(<Button onPress={callback}>Submit</Button>)
  wrapper.find('TouchableOpacity').simulate('press')
  expect(callback).toBeCalled()
})
