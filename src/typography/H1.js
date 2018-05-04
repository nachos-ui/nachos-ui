import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'
import themeManager from '../themeManager'

const theme = {
  ...themeManager.getStyle('Text'),
  FONT_COLOR: '#bdc1cc',
  FONT_SIZE: 28,
  FONT_WEIGHT: '500',
}

themeManager.setSource('H1', () => theme)

const H1 = (props) => {
  const textProps = {
    ...props,
    theme: props.theme || themeManager.getStyle('H1'),
  }
  return <Text {...textProps} />
}

H1.propTypes = { theme: PropTypes.object }

export default H1
