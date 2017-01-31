import React, { Component } from 'react'
import { View } from 'react-native'

import Checkbox from '../src/Checkbox'
import H4 from '../src/typography/H4'

// WEBPACK (CheckboxExample)
class CheckboxExample extends Component {
  state = {
    firstChecked: true,
    secondChecked: true,
  }

  handleFirstCheckboxChange = (firstChecked) => {
    this.setState({ firstChecked })
  }

  handleSecondCheckboxChange = (secondChecked) => {
    this.setState({ secondChecked })
  }

  render() {
    const checkboxStyle = { margin: 15 }
    return (
      <View>
        <H4>Example:</H4>
        <View style={{ flexDirection: 'row' }}>
          <Checkbox
            style={checkboxStyle}
            checked={this.state.firstChecked}
            onValueChange={this.handleFirstCheckboxChange}
          />
          <Checkbox
            style={checkboxStyle}
            kind='circle'
            checked={this.state.secondChecked}
            onValueChange={this.handleSecondCheckboxChange}
          />
          <Checkbox style={checkboxStyle} checked disabled />
        </View>
      </View>
    )
  }
}
// WEBPACK

const description = `
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`activeOpacity\` | \`number\` | \`0.8\` | Determines the opacity of the Checkbox when touch is active |
| \`disabled\` | \`bool\` | \`false\` | Determines whether the Checkbox should be disabled |
| \`kind\` | \`enum\` | \`rounded\` | One of: \`circle, rounded\` |
| \`style\` | \`object, array\` | \`void\` | Style of the component |
| \`disabledStyle\` | \`object, array\` | \`{ opacity: 0.3 }\` | Disable style of the component |
| \`checked\` | \`bool\` | \`false\` | Determines whether the Checkbox should be checked |
| \`checkType\` | \`enum\` | \`icon\` | Determines a style of the tick. One of: \`icon, circle\` |
| \`iconName\` | \`string\` | \`void\` | Specifies [Ionicons](http://ionicframework.com/docs/v2/ionicons/) icon name  |
| \`theme\` | \`object\` | \`defaultTheme\` | An object describing a style of the component. See more in Theme section |
| \`onValueChange\` | \`func\` | \`void\` | Fires a callback when the value of the Checkbox has been changed |
`

CheckboxExample.styleguide = {
  ...CheckboxExample.styleguide,
  title: 'Checkbox',
  description,
}

export default CheckboxExample
