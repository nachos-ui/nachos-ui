import React from 'react'
import { View } from 'react-native'

import Carousel from '../src/Carousel'
import H4 from '../src/typography/H4'

// WEBPACK (CarouselExample)
const CarouselExample = () => {
  return (
    <View>
      <H4>Example:</H4>
      <View style={{ marginVertical: 15 }}>
        <Carousel
          images={[
            'https://placehold.it/300/311112',
            'https://placehold.it/300/59C480',
            'https://placehold.it/300/546C80',
            'https://placehold.it/300/D58554',
            'https://placehold.it/300/F0CD9B',
            'https://placehold.it/300/311112',
          ]}
        />
      </View>
    </View>
  )
}
// WEBPACK

const description = `
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`children\` | \`nodes\` | \`void\` | Include React components as slides instead of images  |
| \`style\` | \`object, array\` | \`void\` | Style of the Carousel compoment |
| \`hideIndicators\` | \`bool\` | \`false\` | Determines whether the indicator should be visible |
| \`indicatorSize\` | \`number\` | \`24\` | Size of indicator |
| \`indicatorStyle\` | \`object, array\` | \`{ color: '#bdc1cc' }\` | Style of the indicator |
| \`indicatorActiveStyle\` | \`object, array\` | \`{ color: '#2f8cff' }\` | Active style of the indicator |
| \`onChange\` | \`func\` | \`void\` | Called when a slide has been changed. It returns the index of an active slide. |
| \`width\` | \`number\` | \`300\` | Width of the Carousel |
| \`height\` | \`number\` | \`300\` | Height of the Carousel |
| \`images\` | \`array\` | \`[]\` | Array of image uri |
| \`theme\` | \`object\` | \`defaultTheme\` | An object describing a style of the component. See more in Theme section |
`

CarouselExample.styleguide = {
  ...CarouselExample.styleguide,
  title: 'Carousel',
  description,
}

export default CarouselExample
