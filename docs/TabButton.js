import React, { Component } from 'react'
import { View } from 'react-native'

import Switcher from '../src/Switcher'
import TabButton from '../src/TabButton'

import B from '../src/typography/B'
import P from '../src/typography/P'
import H4 from '../src/typography/H4'

// WEBPACK (TabButtonExample)
class TabButtonExample extends Component {
  state = { valueOne: 'volume', valueTwo: 'walk' }
  render() {
    return (
      <View>
        <H4 style={{ marginBottom: 20 }}>Example:</H4>
        <Switcher
          onChange={valueOne => this.setState({ valueOne })}
          defaultSelected={this.state.valueOne}
        >
          <TabButton
            value='volume'
            text='Volume'
            iconName='md-volume-off'
          />
          <TabButton value='walk' text='Walk' iconName='md-walk' />
          <TabButton value='wine' text='Wine' iconName='md-wine' />
        </Switcher>

        <P style={{ marginVertical: 20 }}>
          <B>Selected value:</B>
          {' '}
          {this.state.valueOne || 'no selection'}
        </P>

        <Switcher
          onChange={valueTwo => this.setState({ valueTwo })}
          defaultSelected={this.state.valueTwo}
          direction='column'
        >
          <TabButton
            value='volume'
            text='Volume'
            iconName='md-volume-off'
          />
          <TabButton value='walk' text='Walk' iconName='md-walk' />
          <TabButton value='wine' text='Wine' iconName='md-wine' />
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
The **TabButton** is just a composition of the Button component. **You can pass all Button's props.**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`value\` | \`string\` | \`void\` | Defines a value associated with the component  |
| \`text\` | \`string\` | \`void\` | Defines a text value |
| \`uppercase\` | \`bool\` | \`true\` | Determines whether text should be uppercased  |
| \`theme\` | \`nodes\` | \`defaultTheme\` | An object describing a style of the component. See more in Theme section. |
`

TabButtonExample.styleguide = {
  ...TabButtonExample.styleguide,
  title: 'TabButton',
  description,
}

export default TabButtonExample
