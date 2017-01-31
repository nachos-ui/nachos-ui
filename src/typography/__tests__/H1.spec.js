import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import H1 from '../H1'

it('should render correctly', () => {
  const component = renderer.create(<H1>Text</H1>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
