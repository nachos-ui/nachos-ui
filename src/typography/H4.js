import React, { PropTypes } from 'react'
import Text from './Text'
import themeManager from '../themeManager'

const theme = {
  ...themeManager.getStyle('Text'),
  FONT_COLOR: '#bdc1cc',
  FONT_SIZE: 17,
  FONT_WEIGHT: '500',
}

themeManager.setSource('H4', () => theme)

const H4 = (props) => {
  const textProps = {
    ...props,
    theme: props.theme || themeManager.getStyle('H4'),
  }
  return <Text {...textProps} />
}

H4.propTypes = { theme: PropTypes.object }

export default H4
