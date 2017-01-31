import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Switcher from '../Switcher'
import TabButton from '../TabButton'

it('should render correctly', () => {
  const component = renderer.create(
    <Switcher defaultSelected='walk'>
      <TabButton
        value='volume'
        text='Volume'
        iconName='md-volume-off'
      />
      <TabButton value='walk' text='Walk' iconName='md-walk' />
      <TabButton value='wine' text='Wine' iconName='md-wine' />
    </Switcher>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
