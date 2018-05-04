import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'
import themeManager from '../themeManager'

const theme = {
  ...themeManager.getStyle('Text'),
  FONT_STYLE: 'italic',
  PADDING_VERTICAL: 0,
}

themeManager.setSource('Em', () => theme)

const Em = (props) => {
  const textProps = {
    ...props,
    theme: props.theme || themeManager.getStyle('Em'),
  }
  return <Text {...textProps} />
}

Em.propTypes = { theme: PropTypes.object }

export default Em
