import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import themeManager from './themeManager'

const defaultTheme = {
  BUTTON_BORDER_COLOR: '#ddd',
  BUTTON_BORDER_RADIUS: 0,
  BUTTON_HEIGHT: 50,
  BUTTON_FONT_COLOR: '#bdc1cc',
  BUTTON_FONT_SIZE: 12,
  BUTTON_FONT_WEIGHT: '500',
  BUTTON_ICON_SIZE: 20,
  BUTTON_ICON_COLOR: '#bdc1cc',
  BUTTON_BACKGROUND: '#fff',
  BUTTON_BORDER_WIDTH: 1,
  BUTTON_SELECTED_BACKGROUND: '#2f8cff',
  BUTTON_SELECTED_FONT_COLOR: '#fff',
  BUTTON_SELECTED_BORDER_COLOR: '#2f8cff',
  BUTTON_ICON_POSITION: 'left',
  BUTTON_ACTIVE_ICON_COLOR: '#fff',
}

const SegmentedControlButton = (props) => {
  const {
    value,
    text,
    style,
    textStyle,
    // NOTE: injected by a Switcher
    direction,
    first,
    last,
    selected,
    onChange,
  } = props

  const theme = props.theme ||
    themeManager.getStyle('SegmentedControlButton')
  const baseStyle = defaultStyle(theme)

  // NOTE: function onChange is injected by the Switcher component
  const switcherProp = onChange &&
    {
      onPress: () => {},
      onPressOut: onChange.bind(null, value),
    }

  // NOTE: Clone props and then delete Component specific props so we can
  // spread the rest
  const { ...rest } = props
  delete rest.direction
  delete rest.first
  delete rest.last
  delete rest.value
  delete rest.text
  delete rest.onChange
  delete rest.style
  delete rest.textStyle
  delete rest.theme
  delete rest.kind

  return (
    <Button
      iconColor={theme.BUTTON_ICON_COLOR}
      iconActiveColor={theme.BUTTON_ACTIVE_ICON_COLOR}
      iconSize={theme.BUTTON_ICON_SIZE}
      iconPosition={theme.BUTTON_ICON_POSITION}
      kind='squared'
      {...rest}
      {...switcherProp}
      style={[
        baseStyle.base,
        first ? baseStyle.first[direction] : {},
        last ? baseStyle.last[direction] : {},
        selected ? baseStyle.states.selected : {},
        style,
      ]}
      textStyle={[
        baseStyle.baseText,
        selected ? baseStyle.states.selectedText : {},
        textStyle,
      ]}
    >
      {text}
    </Button>
  )
}

SegmentedControlButton.defaultStyle = (theme = defaultTheme) => {
  return {
    base: {
      height: theme.BUTTON_HEIGHT,
      padding: 0,
      paddingHorizontal: 0,
      borderWidth: theme.BUTTON_BORDER_WIDTH,
      borderColor: theme.BUTTON_BORDER_COLOR,
      backgroundColor: theme.BUTTON_BACKGROUND,
    },
    baseText: {
      color: theme.BUTTON_FONT_COLOR,
      fontSize: theme.BUTTON_FONT_SIZE,
      fontWeight: theme.BUTTON_FONT_WEIGHT,
    },
    states: {
      selected: {
        backgroundColor: theme.BUTTON_SELECTED_BACKGROUND,
        borderColor: theme.BUTTON_SELECTED_BORDER_COLOR,
      },
      selectedText: {
        color: theme.BUTTON_SELECTED_FONT_COLOR,
      },
    },
    first: {
      row: {
        borderBottomLeftRadius: theme.BUTTON_BORDER_RADIUS,
        borderTopLeftRadius: theme.BUTTON_BORDER_RADIUS,
        borderRightWidth: 0,
      },
      column: {
        borderTopLeftRadius: theme.BUTTON_BORDER_RADIUS,
        borderTopRightRadius: theme.BUTTON_BORDER_RADIUS,
        borderBottomWidth: 0,
      },
    },
    last: {
      row: {
        borderBottomRightRadius: theme.BUTTON_BORDER_RADIUS,
        borderTopRightRadius: theme.BUTTON_BORDER_RADIUS,
        borderLeftWidth: 0,
      },
      column: {
        borderBottomLeftRadius: theme.BUTTON_BORDER_RADIUS,
        borderBottomRightRadius: theme.BUTTON_BORDER_RADIUS,
        borderTopWidth: 0,
      },
    },
  }
}

SegmentedControlButton.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  text: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  uppercase: PropTypes.bool,
  theme: PropTypes.object,
  // NOTE: injected by a Switcher
  direction: PropTypes.oneOf(['row', 'column']),
  onChange: PropTypes.func,
  first: PropTypes.bool,
  last: PropTypes.bool,
  selected: PropTypes.bool,
}

SegmentedControlButton.defaultProps = {
  uppercase: false,
}

export default SegmentedControlButton
