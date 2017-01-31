import React, { Component } from 'react'
import { View } from 'react-native'

import Switcher from '../src/Switcher'

import B from '../src/typography/B'
import P from '../src/typography/P'

import Button from '../src/Button'
import H4 from '../src/typography/H4'

// WEBPACK (SwitcherExample)
class SwitcherExample extends Component {
  state = {
    btnValue: null,
    segmentedControlBtn: null,
  }

  render() {
    const btnStyle = { margin: 10, borderRadius: 5 }
    return (
      <View>
        <H4>Example:</H4>
        <Switcher
          onChange={value => this.setState({ btnValue: value })}
        >
          <Button
            value='mute'
            iconName='md-volume-off'
            style={btnStyle}
          />
          <Button value='walk' iconName='md-walk' style={btnStyle} />
          <Button value='wine' iconName='md-wine' style={btnStyle} />
        </Switcher>

        <P style={{ marginTop: 20 }}>
          <B>Selected value:</B>
          {' '}
          {this.state.btnValue || 'no selection'}
        </P>
      </View>
    )
  }
}
// WEBPACK

const description = `
The **Switcher** component is a generic component for selecting one child at a given time.
It can work with Buttons, TabButtons, SegmentedControlButtons, Radio buttons and Checkboxes.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`onChange\` | \`func\` | \`void\` | Callback called when the selection has been changed |
| \`arrowPosition\` | \`string\` | \`left\` | Determines the position of the arrow |
| \`defaultSelected\` | \`string, number\` | \`-1\` | Determines the default selected child. It should match a value prop of a child or you can specify a numeric index |
| \`style\` | \`object, array\` | \`void\` | Style of the Switcher compoment |
| \`children\` | \`nodes\` | \`void\` | Include additional React components  |
| \`direction\` | \`enum\` | \`row\` | Determines flexDirection. One of: \`row, column\` |
| \`renderOption\` | \`function\` | \`void\` | A function that should return React component. You can use this prop to render custom options. See RadioGroup code for more information. |
`

SwitcherExample.styleguide = {
  ...SwitcherExample.styleguide,
  title: 'Switcher',
  description,
}

export default SwitcherExample
