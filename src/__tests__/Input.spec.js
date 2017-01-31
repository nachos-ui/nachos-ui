import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Input from '../Input'

it('should render correctly', () => {
  const component = renderer.create(<Input value='Your name' />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('should render disabled', () => {
  const component = renderer.create(
    <Input value='Your name' disabled />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
