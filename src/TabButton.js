import React, { PropTypes } from 'react'
import SegmentedControlButton from './SegmentedControlButton'
import themeManager from './themeManager'

const theme = {
  ...themeManager.getStyle('SegmentedControlButton'),
  BUTTON_BORDER_COLOR: '#ddd',
  BUTTON_BORDER_RADIUS: 0,
  BUTTON_HEIGHT: 50,
  BUTTON_FONT_COLOR: '#bdc1cc',
  BUTTON_FONT_SIZE: 12,
  BUTTON_FONT_WEIGHT: '500',
  BUTTON_ICON_SIZE: 20,
  BUTTON_ICON_COLOR: '#bdc1cc',
}

themeManager.setSource('TabButton', () => theme)

const TabButton = (props) => {
  const tabProps = {
    ...props,
    theme: props.theme || themeManager.getStyle('TabButton'),
  }
  return <SegmentedControlButton {...tabProps} />
}

TabButton.propTypes = {
  uppercase: PropTypes.bool, // eslint-disable-line
  theme: PropTypes.object,
}

TabButton.defaultProps = {
  uppercase: true,
}

export default TabButton
