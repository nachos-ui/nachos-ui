import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import H5 from '../H5'

it('should render correctly', () => {
  const component = renderer.create(<H5>Text</H5>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
