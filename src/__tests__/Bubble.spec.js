import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Bubble from '../Bubble'

it('should render correctly', () => {
  const component = renderer.create(<Bubble>Hey, What’s Up?</Bubble>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
