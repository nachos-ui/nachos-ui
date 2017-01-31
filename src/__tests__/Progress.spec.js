import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Progress from '../Progress'

it('should render correctly', () => {
  const component = renderer.create(<Progress progress={0.5} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
