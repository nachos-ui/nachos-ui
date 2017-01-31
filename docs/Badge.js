import React from 'react'
import { View } from 'react-native'

import Badge from '../src/Badge'
import H4 from '../src/typography/H4'

// WEBPACK (BadgeExample)
const BadgeExample = () => {
  return (
    <View>
      <H4>Example:</H4>
      <View style={{ margin: 15, flexDirection: 'row' }}>
        <Badge value={123} style={{ marginRight: 15 }} />
        <Badge value={4} color='red' />
      </View>
    </View>
  )
}
// WEBPACK

const description = `
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`color\` | \`string\` | \`null\` | Background color of the Badge compoment |
| \`value\` | \`string, number\` | \`void\` | The value that's shown inside the compoment |
| \`style\` | \`object, array\` | \`void\` | Style of the Badge compoment |
| \`textStyle\` | \`object, array\` | \`void\` | Style of the Text inside the Badge compoment |
| \`theme\` | \`object\` | \`defaultTheme\` | An object describing a style of the component. See more in Theme section.  |
`

BadgeExample.styleguide = {
  ...BadgeExample.styleguide,
  title: 'Badge',
  description,
}

export default BadgeExample
