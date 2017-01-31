import React, { Component } from 'react'
import { View } from 'react-native'

import Slider from '../src/Slider'

import B from '../src/typography/B'
import P from '../src/typography/P'
import H4 from '../src/typography/H4'

// WEBPACK (SliderExample)
class SliderExample extends Component {
  state = {
    sliderValue: 0.3,
  }

  handleSliderChange = (sliderValue) => {
    this.setState({ sliderValue })
  }

  render() {
    return (
      <View>
        <H4>Example:</H4>
        <Slider
          value={this.state.sliderValue}
          onValueChange={this.handleSliderChange}
        />
        <P>
          Value: <B>{this.state.sliderValue.toFixed(2)}</B>
        </P>
      </View>
    )
  }
}
// WEBPACK

const description = `
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`value\` | \`number\` | \`0\` | Specifies a value of the Slider compoment |
| \`maxValue\` | \`number\` | \`0\` | Specifies a maximum value of the Slider compoment |
| \`minValue\` | \`number\` | \`0\` | Specifies a minimum value of the Slider compoment |
| \`style\` | \`object, array\` | \`void\` | Style of the Slider compoment |
| \`knobStyle\` | \`object, array\` | \`void\` | Style of the Sliders's knob |
| \`width\` | \`number\` | \`300\` | Determines a width of the Slider compoment |
| \`height\` | \`number\` | \`6\` | Determines a height of the Slider compoment |
`

SliderExample.styleguide = {
  ...SliderExample.styleguide,
  title: 'Slider',
  description,
}

export default SliderExample
