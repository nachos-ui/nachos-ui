import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import H3 from '../H3'

it('should render correctly', () => {
  const component = renderer.create(<H3>Text</H3>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
