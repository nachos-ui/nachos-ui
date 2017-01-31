import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import RadioGroup from '../RadioGroup'

it('should render correctly', () => {
  const component = renderer.create(
    <RadioGroup
      defaultSelected='gr'
      options={['Red', 'Green', 'Blue']}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
