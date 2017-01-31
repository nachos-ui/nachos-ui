import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Strong from '../Strong'

it('should render correctly', () => {
  const component = renderer.create(<Strong>Text</Strong>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
