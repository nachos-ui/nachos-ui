import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'
import themeManager from '../themeManager'

const theme = {
  ...themeManager.getStyle('Text'),
  FONT_COLOR: '#bdc1cc',
  FONT_SIZE: 15,
  FONT_WEIGHT: '500',
}

themeManager.setSource('H5', () => theme)

const H5 = (props) => {
  const textProps = {
    ...props,
    theme: props.theme || themeManager.getStyle('H5'),
  }
  return <Text {...textProps} />
}

H5.propTypes = { theme: PropTypes.object }

export default H5
