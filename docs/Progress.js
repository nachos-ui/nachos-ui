import React, { Component } from 'react'
import { View } from 'react-native'

import Progress from '../src/Progress'
import H4 from '../src/typography/H4'
import H5 from '../src/typography/H5'

// WEBPACK (ProgressExample)
class ProgressExample extends Component {
  state = {
    progressValue: 0.5,
  }

  componentDidMount() {
    this._interval = setInterval(
      () => {
        if (this.state.progressValue >= 1) {
          return this.setState({ progressValue: 0 })
        }
        this.setState({
          progressValue: this.state.progressValue + 0.01,
        })
      },
      80
    )
  }

  componentWillUnmount() {
    clearInterval(this._interval)
  }

  render() {
    const progressStyle = { margin: 15 }
    return (
      <View>
        <H4>Example:</H4>
        <Progress
          progress={this.state.progressValue}
          style={progressStyle}
        />
        <H5>
          Progress: {Math.round(this.state.progressValue * 100)}
        </H5>
      </View>
    )
  }
}
// WEBPACK

const description = `
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`progress\` | \`number\` | \`0\` | Specifies a progress |
| \`style\` | \`object, array\` | \`void\` | Style the Progress compoment |
| \`width\` | \`number\` | \`300\` | Determines a width of the Progress compoment |
| \`height\` | \`number\` | \`6\` | Determines a height of the Progress compoment |
| \`color\` | \`string\` | \`#2f8cff\` | Specifies a color of the progress line |
`

ProgressExample.styleguide = {
  ...ProgressExample.styleguide,
  title: 'Progress',
  description,
}

export default ProgressExample
