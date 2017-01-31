import React from 'react'
import { View, Image } from 'react-native'

import Indicator from '../src/Indicator'
import H4 from '../src/typography/H4'

// WEBPACK (IndicatorExample)
const IndicatorExample = () => {
  const imageStyle = {
    width: 50,
    height: 50,
    borderRadius: 10,
  }
  const indicatorStyle = {
    marginRight: 30,
  }

  return (
    <View>
      <H4>Example:</H4>
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <Indicator
          position='right top'
          value='12'
          style={indicatorStyle}
        >
          <Image
            style={imageStyle}
            source={{
              uri: 'https://facebook.github.io/react/img/logo_og.png',
            }}
          />
        </Indicator>
        <Indicator
          position='right top'
          value='2'
          type='success'
          style={indicatorStyle}
        >
          <Image
            style={imageStyle}
            source={{
              uri: 'https://d3vv6lp55qjaqc.cloudfront.net/items/130d3E0o0E0I31460H0n/Untitled-1.png',
            }}
          />
        </Indicator>
      </View>
    </View>
  )
}
// WEBPACK

const description = `
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`color\` | \`string\` | \`void\` | Background color of the Indicator compoment |
| \`children\` | \`node\` | \`void\` | Children React components  |
| \`position\` | \`enum\` | \`'right top'\` | Specifies the position of the indicator. One of: \`'left top', 'right top', 'left bottom', 'right bottom'\` |
| \`style\` | \`object\` | \`void\` | Style of the Indicator compoment |
| \`type\` | \`enum\` | \`'normal'\` | Defines a semantic color of the indicator. One of: \`'normal', 'success', 'warning'\` |
| \`value\` | \`string, number\` | \`void\` | The value that's shown inside the compoment |
| \`theme\` | \`object\` | \`defaultTheme\` | An object describing a style of the component. See more in Theme section |
`

IndicatorExample.styleguide = {
  ...IndicatorExample.styleguide,
  title: 'Indicator',
  description,
}

export default IndicatorExample
