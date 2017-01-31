import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Em from '../Em'

it('should render correctly', () => {
  const component = renderer.create(<Em>Text</Em>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
