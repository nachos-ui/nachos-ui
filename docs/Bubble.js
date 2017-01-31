import React from 'react'
import { View } from 'react-native'

import Bubble from '../src/Bubble'
import H4 from '../src/typography/H4'

// WEBPACK (BubbleExample)
const BubbleExample = () => {
  const bubbleStyle = { margin: 10 }
  return (
    <View>
      <H4>Example:</H4>
      <View style={{ marginVertical: 15, flexDirection: 'row' }}>
        <Bubble style={bubbleStyle}>Hey, What’s Up?</Bubble>
        <Bubble
          style={bubbleStyle}
          arrowPosition='top'
          color='#ff9c00'
        >
          What’s cooking?
        </Bubble>
      </View>
    </View>
  )
}
// WEBPACK

const description = `
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`arrowPosition\` | \`enum\` | \`left\` | Determines the position of the arrow. One of: \`'top', 'left', 'bottom', 'right'\` |
| \`color\` | \`string\` | \`'#2f8cff'\` | Background color of the Bubble compoment |
| \`style\` | \`object, array\` | \`void\` | Style of the Bubble compoment |
| \`theme\` | \`object\` | \`defaultTheme\` | An object describing a style of the component. See more in Theme section.  |
`

BubbleExample.styleguide = {
  ...BubbleExample.styleguide,
  title: 'Bubble',
  description,
}

export default BubbleExample
