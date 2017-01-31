import React, { PropTypes } from 'react'
import Text from './Text'
import themeManager from '../themeManager'

const theme = {
  ...themeManager.getStyle('Text'),
  FONT_COLOR: '#bdc1cc',
  FONT_SIZE: 22,
  FONT_WEIGHT: '500',
}

themeManager.setSource('H2', () => theme)

const H2 = (props) => {
  const textProps = {
    ...props,
    theme: props.theme || themeManager.getStyle('H2'),
  }
  return <Text {...textProps} />
}

H2.propTypes = { theme: PropTypes.object }

export default H2
