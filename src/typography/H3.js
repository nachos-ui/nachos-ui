import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'
import themeManager from '../themeManager'

const theme = {
  ...themeManager.getStyle('Text'),
  FONT_COLOR: '#bdc1cc',
  FONT_SIZE: 20,
  FONT_WEIGHT: '500',
}

themeManager.setSource('H3', () => theme)

const H3 = (props) => {
  const textProps = {
    ...props,
    theme: props.theme || themeManager.getStyle('H3'),
  }
  return <Text {...textProps} />
}

H3.propTypes = { theme: PropTypes.object }

export default H3
