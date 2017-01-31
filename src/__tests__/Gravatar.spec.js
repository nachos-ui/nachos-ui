import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Gravatar from '../Gravatar'

it('should render correctly', () => {
  const component = renderer.create(
    <Gravatar email='test@test.com' />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
