import React from 'react'
import { View } from 'react-native'

import Card from '../src/Card'
import H4 from '../src/typography/H4'

// WEBPACK (CardsExample)
const CardsExample = () => {
  const cardStyle = { margin: 15, width: 280 }
  return (
    <View>
      <H4>Example:</H4>
      <Card
        footerContent='The avocado is a tree that is native to Mexico'
        image='https://upx.cz/BsN'
        style={cardStyle}
      />
      <Card
        footerContent='Agaves are a type of succulent plant from Mexico'
        image='https://upx.cz/BsD'
        style={cardStyle}
      />
    </View>
  )
}
// WEBPACK

const description = `
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`width\` | \`number\` | \`320\` | Determines the width of the Card |
| \`height\` | \`number\` | \`285\` | Determines the height of the Card |
| \`style\` | \`object\` | \`void\` | Style of the Card compoment |
| \`bodyContent\` | \`node\` | \`void\` | Custom React compoment |
| \`bodyStyle\` | \`object\` | \`void\` | Style of the Card's body |
| \`image\` | \`string\` | \`void\` | The image source of Card's body that will be used as a backgroud |
| \`imageStyle\` | \`object\` | \`void\` | Custom style of the Image (when image prop is used) |
| \`footerContent\` | \`node, string\` | \`void\` | Custom React component or string can be used as a footer content  |
| \`footerStyle\` | \`object\` | \`void\` | Style of the Card's footer |
| \`theme\` | \`object\` | \`defaultTheme\` | An object describing a style of the component. See more in Theme section |
`

CardsExample.styleguide = {
  ...CardsExample.styleguide,
  title: 'Card',
  description,
}

export default CardsExample
