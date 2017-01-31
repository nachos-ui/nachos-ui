import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import H6 from '../H6'

it('should render correctly', () => {
  const component = renderer.create(<H6>Text</H6>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
