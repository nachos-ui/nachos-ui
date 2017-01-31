import React, { PropTypes } from 'react'
import Text from './Text'
import themeManager from '../themeManager'

const theme = {
  ...themeManager.getStyle('Text'),
  FONT_WEIGHT: 'bold',
  PADDING_VERTICAL: 0,
}

themeManager.setSource('Strong', () => theme)

const Strong = (props) => {
  const textProps = {
    ...props,
    theme: props.theme || themeManager.getStyle('Strong'),
  }
  return <Text {...textProps} />
}

Strong.propTypes = { theme: PropTypes.object }

export default Strong
