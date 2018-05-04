import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Indicator from '../Indicator'
import {View} from 'react-native'

it('should render correctly', () => {
  const component = renderer.create(
    <Indicator position='left top' value='12'>
      <View />
    </Indicator>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
