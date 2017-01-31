import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Badge from '../Badge'

it('should render correctly', () => {
  const component = renderer.create(<Badge value={4} color='red' />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
