import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Carousel from '../Carousel'

it('should render correctly', () => {
  const component = renderer.create(
    <Carousel
      images={[
        'https://placehold.it/600/311112',
        'https://placehold.it/600/59C480',
      ]}
      height={400}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('should hide indicators', () => {
  const component = renderer.create(
    <Carousel
      images={[
        'https://placehold.it/600/311112',
        'https://placehold.it/600/59C480',
      ]}
      hideIndicators
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
