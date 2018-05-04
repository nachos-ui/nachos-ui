import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'
import themeManager from '../themeManager'

const theme = {
  ...themeManager.getStyle('Text'),
  FONT_COLOR: '#bdc1cc',
  FONT_WEIGHT: '500',
}

themeManager.setSource('H6', () => theme)

const H6 = (props) => {
  const textProps = {
    ...props,
    theme: props.theme || themeManager.getStyle('H6'),
  }
  return <Text {...textProps} />
}

H6.propTypes = { theme: PropTypes.object }

export default H6
