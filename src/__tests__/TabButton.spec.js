import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import TabButton from '../TabButton'

it('should render correctly', () => {
  const component = renderer.create(
    <TabButton text='Wine' iconName='md-wine' />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
