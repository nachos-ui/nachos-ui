import React, { Component } from 'react'
import { View } from 'react-native'

import Switcher from '../src/Switcher'
import SegmentedControlButton from '../src/SegmentedControlButton'

import B from '../src/typography/B'
import P from '../src/typography/P'
import H4 from '../src/typography/H4'

// WEBPACK (SegmentedControlButtonExample)
class SegmentedControlButtonExample extends Component {
  state = { valueOne: null, valueTwo: null }
  render() {
    return (
      <View>
        <H4 style={{ marginBottom: 20 }}>Example:</H4>
        <Switcher
          onChange={valueOne => this.setState({ valueOne })}
          direction='row'
        >
          <SegmentedControlButton value='access' text='Access' />
          <SegmentedControlButton value='feed' text='Feed' />
          <SegmentedControlButton
            value='invitation'
            text='Invitation'
          />
        </Switcher>

        <P style={{ marginVertical: 20 }}>
          <B>Selected value:</B>
          {' '}
          {this.state.valueOne || 'no selection'}
        </P>

        <Switcher
          onChange={valueTwo => this.setState({ valueTwo })}
          direction='column'
        >
          <SegmentedControlButton value='access' text='Access' />
          <SegmentedControlButton value='feed' text='Feed' />
          <SegmentedControlButton
            value='invitation'
            text='Invitation'
          />
        </Switcher>

        <P style={{ marginVertical: 20 }}>
          <B>Selected value:</B>
          {' '}
          {this.state.valueTwo || 'no selection'}
        </P>
      </View>
    )
  }
}
// WEBPACK

const description = `
**SegmentedControlButton** is just composition of the Button component. **You can pass all Button's props.**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`value\` | \`string\` | \`void\` | Defines a value associated with the component  |
| \`text\` | \`string\` | \`void\` | Defines a text value for the Button |
| \`uppercase\` | \`bool\` | \`true\` | Determines whether text values should be uppercased  |
| \`theme\` | \`object\` | \`defaultTheme\` | An object describing a style of the component. See more in Theme section |
`

SegmentedControlButtonExample.styleguide = {
  ...SegmentedControlButtonExample.styleguide,
  title: 'SegmentedControlButton',
  description,
}

export default SegmentedControlButtonExample
