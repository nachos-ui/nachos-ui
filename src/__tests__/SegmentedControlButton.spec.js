import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import SegmentedControlButton from '../SegmentedControlButton'

it('should render correctly', () => {
  const component = renderer.create(
    <SegmentedControlButton text='Feed' />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
