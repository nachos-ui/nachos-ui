import React from 'react'
import { View } from 'react-native'

import Spinner from '../src/Spinner'
import H4 from '../src/typography/H4'

// WEBPACK (SpinnerExample)
const SpinnerExample = () => {
  return (
    <View>
      <H4>Example:</H4>
      <View style={{ margin: 15 }}>
        <Spinner />
      </View>
    </View>
  )
}
// WEBPACK

const description = `
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`duration\` | \`number\` | \`450\` | Specifies a duration of the animation |
| \`size\` | \`number\` | \`25\` | Specifies a size of the one spinner's circle  |
| \`color\` | \`string\` | \`#2f8cff\` | Specifies a color of spinner's circle |
| \`theme\` | \`object\` | \`defaultTheme\` | An object describing a style of the component. See more in Theme section |
`

SpinnerExample.styleguide = {
  ...SpinnerExample.styleguide,
  title: 'Spinner',
  description,
}

export default SpinnerExample
