import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import themeManager from './themeManager'

const defaultTheme = {
  BUTTON_FONT_COLOR: '#fff',
  BUTTON_ROUNDED_RADIUS: 25,
  BUTTON_ROUNDED_HEIGHT: 50,
  BUTTON_ROUNDED_FONT_SIZE: 12,
  BUTTON_SQUARED_HEIGHT: 50,
  BUTTON_SQUARED_FONT_SIZE: 12,
  BUTTON_STATE_SUCCESS: '#94de45',
  BUTTON_STATE_DANGER: '#ff9c00',
  BUTTON_STATE_PRIMARY: '#2f8cff',
  BUTTON_ICON_SIZE: 25,
  BUTTON_ICON_COLOR: '#fff',
  BUTTON_ACTIVE_ICON_COLOR: 'rgba(0, 0, 0, 0.5)',
}

const Button = (props) => {
  const {
    activeOpacity,
    disabled,
    children,
    style,
    textStyle,
    disabledStyle,
    disabledTextStyle,
    type,
    kind,
    uppercase,
    iconName,
    iconSize,
    iconColor,
    iconActiveColor,
    iconPosition,
    onPress,
    onPressIn,
    onPressOut,
    onLongPress,
    // NOTE: injected by a Switcher
    selected,
    onChange,
    value,
  } = props

  const theme = props.theme || themeManager.getStyle('Button')
  const baseStyle = defaultStyle(theme)

  // NOTE: function onChange is injected by the Switcher component
  const switcherProp = onChange &&
    {
      onPress: () => {},
      onPressOut: onChange.bind(null, value),
    }

  const touchableProps = {
    onPress,
    onPressIn,
    onPressOut,
    onLongPress,
  }

  const btnStyles = [
    baseStyle.baseBtn,
    baseStyle.kind[kind].btn,
    baseStyle.states[type],
    style,
  ]

  const textStyles = [
    baseStyle.baseText,
    baseStyle.kind[kind].text,
    textStyle,
    disabled ? disabledTextStyle : {},
  ]

  let leftIcon
  let rightIcon
  if (iconName) {
    const icon = (
      <Icon
        name={iconName}
        size={iconSize || theme.BUTTON_ICON_SIZE}
        color={
          selected
            ? iconActiveColor || theme.BUTTON_ACTIVE_ICON_COLOR
            : iconColor || theme.BUTTON_ICON_COLOR
        }
      />
    )
    leftIcon = iconPosition === 'left' && icon
    rightIcon = iconPosition === 'right' && icon
  }

  let content
  if (children) {
    content = (
      <Text style={textStyles}>
        {uppercase ? children.toUpperCase() : children}
      </Text>
    )
  }

  return (
    <View
      style={[baseStyle.container, disabled ? disabledStyle : {}]}
    >
      <TouchableOpacity
        {...touchableProps}
        {...switcherProp}
        disabled={disabled}
        style={btnStyles}
        activeOpacity={activeOpacity}
        accessibilityTraits='button'
        accessibilityComponentType='button'
      >
        <View style={baseStyle.innerContainer}>
          {leftIcon}
          {content}
          {rightIcon}
        </View>
      </TouchableOpacity>
    </View>
  )
}

Button.defaultStyle = (theme = defaultTheme) => {
  return {
    container: { flex: 1 },
    baseBtn: {
      justifyContent: 'center',
      padding: 10,
      paddingHorizontal: 20,
    },
    baseText: {
      alignSelf: 'center',
      color: theme.BUTTON_FONT_COLOR,
      paddingHorizontal: 8,
      fontWeight: '600',
    },
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    kind: {
      rounded: {
        btn: {
          borderRadius: theme.BUTTON_ROUNDED_RADIUS,
          height: theme.BUTTON_ROUNDED_HEIGHT,
        },
        text: {
          fontSize: theme.BUTTON_ROUNDED_FONT_SIZE,
          fontWeight: '600',
        },
      },
      squared: {
        btn: { height: theme.BUTTON_SQUARED_HEIGHT },
        text: { fontSize: theme.BUTTON_SQUARED_FONT_SIZE },
      },
    },
    states: {
      success: { backgroundColor: theme.BUTTON_STATE_SUCCESS },
      danger: { backgroundColor: theme.BUTTON_STATE_DANGER },
      primary: { backgroundColor: theme.BUTTON_STATE_PRIMARY },
      naked: { backgroundColor: 'transparent' },
    },
  }
}

Button.propTypes = {
  activeOpacity: PropTypes.number,
  disabled: PropTypes.bool,
  children: PropTypes.any,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabledStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  disabledTextStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  type: PropTypes.oneOf(['primary', 'danger', 'success', 'naked']),
  kind: PropTypes.oneOf(['rounded', 'squared']),
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  onLongPress: PropTypes.func,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  iconActiveColor: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  uppercase: PropTypes.bool,
  theme: PropTypes.object,
  // NOTE: injected by a Switcher
  onChange: PropTypes.func,
  selected: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}

Button.defaultProps = {
  activeOpacity: 0.8,
  disabled: false,
  disabledStyle: { opacity: 0.3 },
  type: 'primary',
  kind: 'rounded',
  onPress: () => {},
  onPressIn: () => {},
  onPressOut: () => {},
  onLongPress: () => {},
  iconPosition: 'right',
  uppercase: true,
}

export default Button
