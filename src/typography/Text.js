import React from 'react'
import PropTypes from 'prop-types'
import { Text as RNText } from 'react-native'

import themeManager from '../themeManager'

const defaultTheme = {
  FONT_COLOR: '#333',
  FONT_SIZE: 14,
  FONT_WEIGHT: 'normal',
  FONT_STYLE: 'normal',
  PADDING_VERTICAL: 10,
  TEXT_ALIGN: 'left',
}

themeManager.setSource('Text', () => defaultTheme)

const defaultStyle = (theme) => {
  return {
    fontSize: theme.FONT_SIZE,
    fontWeight: theme.FONT_WEIGHT,
    fontStyle: theme.FONT_STYLE,
    color: theme.FONT_COLOR,
    paddingVertical: theme.PADDING_VERTICAL,
  }
}

const Text = (props) => {
  const theme = props.theme || themeManager.getStyle('Text')
  const baseStyle = defaultStyle(theme)
  const { ...textProps } = props
  textProps.style = [
    { textAlign: props.align, ...baseStyle },
    textProps.style,
  ]

  // NOTE: delete Component specific props
  delete textProps.theme
  delete textProps.align

  return <RNText {...textProps} />
}

Text.propTypes = {
  align: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  theme: PropTypes.object,
}

Text.defaultProps = { align: 'left' }

export default Text
