import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import H4 from '../H4'

it('should render correctly', () => {
  const component = renderer.create(<H4>Text</H4>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
