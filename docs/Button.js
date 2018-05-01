import React from 'react'
import { View } from 'react-native'

import Button from '../src/Button'
import H4 from '../src/typography/H4'

// WEBPACK (ButtonExample)
const ButtonExample = () => {
  const btnStyle = { margin: 3 }
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <H4>Example:</H4>
      <Button type='success' style={btnStyle}>Success</Button>
      <Button type='danger' style={btnStyle}>Danger</Button>
      <Button style={btnStyle}>Primary</Button>

      <Button kind='squared' type='success' style={btnStyle}>
        Success
      </Button>
      <Button kind='squared' type='danger' style={btnStyle}>
        Danger
      </Button>
      <Button
        kind='squared'
        iconName='md-cloud-download'
        style={btnStyle}
      >
        Primary
      </Button>

      <H4 align='center'>Disabled style</H4>
      <Button type='success' disabled style={btnStyle}>
        Success
      </Button>
      <Button kind='squared' type='danger' disabled style={btnStyle}>
        Danger
      </Button>
    </View>
  )
}
// WEBPACK

const description = `
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`activeOpacity\` | \`number\` | \`0.8\` | Determines the opacity of the Button when touch is active |
| \`disabled\` | \`bool\` | \`false\` | Determines whether the Button should be disabled |
| \`children\` | \`string, nodes\` | \`void\` | Add string of text or additional React components  |
| \`style\` | \`object, array\` | \`void\` | Style the Button compoment |
| \`textStyle\` | \`object, array\` | \`void\` | Style the Button's Text compoment |
| \`disabledStyle\` | \`object, array\` | \`{ opacity: 0.3 }\` | Disable style of Button |
| \`disabledTextStyle\` | \`object, array\` | \`void\` | Disable style of Button's text |
| \`type\` | \`enum\` | \`primary\` | One of: \`primary, danger, success, naked\` |
| \`kind\` | \`enum\` | \`rounded\` | One of: \`rounded, squared\` |
| \`onPress\` | \`func\` | \`void\` | Called when the touch is released |
| \`onPressIn\` | \`func\` | \`void\` | Function |
| \`onPressOut\` | \`func\` | \`void\` | Function |
| \`onLongPress\` | \`func\` | \`void\` | Function |
| \`iconName\` | \`string\` | \`void\` | Specifies an icon name. It uses [Ionicons](http://ionicframework.com/docs/v2/ionicons/)  |
| \`iconSize\` | \`number\` | \`void\` | Specifies an icon size |
| \`iconColor\` | \`string\` | \`void\` | Specifies an icon color |
| \`iconActiveColor\` | \`string\` | \`void\` | Specifies a selected icon color |
| \`iconPosition\` | \`enum\` | \`'right'\` | One of: \`left, right\` |
| \`uppercase\` | \`bool\` | \`'true'\` | Determines whether text should be uppercased  |
| \`theme\` | \`object\` | \`defaultTheme\` | An object describing a style of the component. See more in Theme section.  |
`

ButtonExample.styleguide = {
  ...ButtonExample.styleguide,
  title: 'Button',
  description,
}

export default ButtonExample
