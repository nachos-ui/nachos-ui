import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import H2 from '../H2'

it('should render correctly', () => {
  const component = renderer.create(<H2>Text</H2>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
