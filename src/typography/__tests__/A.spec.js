import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import A from '../A'

it('should render correctly', () => {
  const component = renderer.create(
    <A href='http://avocode.com'>This is a link</A>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
