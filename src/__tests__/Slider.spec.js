import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Slider from '../Slider'

it('should render correctly', () => {
  const component = renderer.create(<Slider value={0.5} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
