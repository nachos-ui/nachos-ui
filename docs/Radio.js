import React, { Component } from 'react'
import { View } from 'react-native'

import Switcher from '../src/Switcher'
import Radio from '../src/Radio'
import H4 from '../src/typography/H4'

// WEBPACK (RadioExample)
class RadioExample extends Component {
  state = { value: null }
  render() {
    const radioStyle = { margin: 10 }
    return (
      <View>
        <H4>Example:</H4>
        <Switcher
          defaultSelected='bus'
          onChange={value => this.setState({ value })}
        >
          <Radio value='car' style={radioStyle} />
          <Radio value='bus' style={radioStyle} />
        </Switcher>
      </View>
    )
  }
}
// WEBPACK

const description = `
**Radio** is just composition of the Checkbox component. **You can pass all Checkbox's props.**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`value\` | \`string\` | \`undefied\` | Defines a value associated with the component  |
`

RadioExample.styleguide = {
  ...RadioExample.styleguide,
  title: 'Radio',
  description,
}

export default RadioExample
