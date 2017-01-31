import React, { Component } from 'react'
import { View } from 'react-native'

import RadioGroup from '../src/RadioGroup'

import B from '../src/typography/B'
import P from '../src/typography/P'
import H4 from '../src/typography/H4'

// WEBPACK (RadioGroupExample)
class RadioGroupExample extends Component {
  state = { value: null }
  render() {
    return (
      <View>
        <H4 style={{ marginBottom: 20 }}>Example:</H4>
        <RadioGroup
          onChange={value => this.setState({ value })}
          defaultSelected='gr'
          options={['Red', 'Green', 'Blue']}
        />

        <P style={{ marginVertical: 20 }}>
          <B>Selected value:</B> {this.state.value || 'no selection'}
        </P>
      </View>
    )
  }
}
// WEBPACK

const description = `
**RadioGroup** uses Switchers's renderOption prop to render custom option component.
Check the code to understand the implementation.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`onChange\` | \`func\` | \`void\` | Callback called when the selection has been changed |
| \`options\` | \`array **(required)**\` | \`void\` | Defines visible text options |
| \`values\` | \`array\` | \`void\` | Defines values for onChange callback |
| \`defaultSelected\` | \`string, number \` | \`void\` | Defines a default selection. It matches values from \`options\` and \`values\` props.   |
| \`style\` | \`object, array\` | \`void\` | Style of the compoment |
| \`textStyle\` | \`object, array\` | \`void\` | Text style of the compoment |
`

RadioGroupExample.styleguide = {
  ...RadioGroupExample.styleguide,
  title: 'RadioGroup',
  description,
}

export default RadioGroupExample
