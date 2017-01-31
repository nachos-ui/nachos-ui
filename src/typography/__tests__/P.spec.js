import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import P from '../P'

it('should render correctly', () => {
  const component = renderer.create(<P>Text</P>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
