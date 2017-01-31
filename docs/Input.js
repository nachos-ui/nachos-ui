import React, { Component } from 'react'
import { View } from 'react-native'

import Input from '../src/Input'
import H4 from '../src/typography/H4'

// WEBPACK (InputExample)
class InputExample extends Component {
  state = { value: null }
  render() {
    const inputStyle = { margin: 15 }
    return (
      <View>
        <H4>Example:</H4>
        <Input
          style={inputStyle}
          placeholder='Your name'
          value={this.state.value}
          onChangeText={value => this.setState({ value })}
        />
        <Input style={inputStyle} disabled value='Disabled input' />
        <Input
          status='warn'
          style={inputStyle}
          placeholder='Your name'
          value={this.state.value}
          onChangeText={value => this.setState({ value })}
        />
        <Input
          status='error'
          style={inputStyle}
          placeholder='Your name'
          value={this.state.value}
          onChangeText={value => this.setState({ value })}
        />
        <Input
          status='valid'
          style={inputStyle}
          placeholder='Your name'
          value={this.state.value}
          onChangeText={value => this.setState({ value })}
        />
        <Input
          icon='ios-beer'
          style={inputStyle}
          placeholder='Your name'
          value={this.state.value}
          onChangeText={value => this.setState({ value })}
        />
      </View>
    )
  }
}
// WEBPACK
const description = `
You can use any of [TextInput](https://facebook.github.io/react-native/docs/textinput.html) props you want.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`value\` | \`string\` | \`''\` | Specifies the value of the Input element|
| \`placeholder\` | \`string\` | \`void\` | Specifies the placeholder value of the Input element|
| \`style\` | \`object, array\` | \`void\` | Style of the Input's View component |
| \`inputStyle\` | \`object, array\` | \`void\` | Style of the TextInput |
| \`icon\` | \`string\` | \`void\` | Add custom [Ionicons](http://ionicframework.com/docs/v2/ionicons/) inside the Input component |
| \`status\` | \`enum\` | \`normal\` | One of: \`normal, valid, error, warn \`|
| \`width\` | \`number\` | \`void\` | Determines a width of the Input compoment |
| \`height\` | \`number\` | \`46\` | Determines a height of the Input compoment |
| \`onChangeText\` | \`func\` | \`void\` | Callback that is called when the input has been changed |
| \`theme\` | \`object\` | \`defaultTheme\` | An object describing a style of the component. See more in Theme section |
`

InputExample.styleguide = {
  ...InputExample.styleguide,
  title: 'Input',
  description,
}

export default InputExample
