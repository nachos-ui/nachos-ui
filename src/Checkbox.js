import React, { PropTypes } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import themeManager from './themeManager'

const defaultTheme = {
  CHECKBOX_SIZE: 26,
  CHECKBOX_COLOR: '#fff',
  CHECKBOX_BORDER_WIDTH: 2,
  CHECKBOX_BORDER_COLOR: '#bdc1cc',
  CHECKBOX_CHECK_ICON_NAME: 'md-checkmark',
  CHECKBOX_CHECK_ICON_SIZE: 20,
  CHECKBOX_CHECK_ICON_COLOR: '#fff',
  CHECKBOX_CHECK_CIRCLE_COLOR: '#2f8cff',
  CHECKBOX_CHECKED_BG_COLOR: '#2f8cff',
  CHECKBOX_CHECKED_BORDER_COLOR: '#2f8cff',
  CHECKBOX_CIRCLE_RADIUS: 9999,
  CHECKBOX_ROUNDED_RADIUS: 5,
}

themeManager.setSource('Checkbox', () => defaultTheme)

const defaultStyle = (theme) => {
  return {
    base: {
      position: 'relative',
      width: theme.CHECKBOX_SIZE,
      height: theme.CHECKBOX_SIZE,
      borderWidth: theme.CHECKBOX_BORDER_WIDTH,
      justifyContent: 'center',
      alignItems: 'center',
    },
    kind: {
      circle: {
        // NOTE: we cannot use '50%' as we don't know the dimensions up front
        borderRadius: theme.CHECKBOX_CIRCLE_RADIUS,
      },
      rounded: {
        borderRadius: theme.CHECKBOX_ROUNDED_RADIUS,
      },
    },
    states: {
      normal: {
        borderColor: theme.CHECKBOX_BORDER_COLOR,
      },
      checkedIcon: {
        borderColor: theme.CHECKBOX_CHECKED_BORDER_COLOR,
        backgroundColor: theme.CHECKBOX_CHECKED_BG_COLOR,
      },
    },
    check: {
      icon: {
        backgroundColor: 'transparent',
        marginTop: 2,
      },
      circle: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: theme.CHECKBOX_CHECK_CIRCLE_COLOR,
      },
    },
  }
}

const Checkbox = (props) => {
  const {
    activeOpacity,
    disabled,
    kind,
    checked,
    onValueChange,
    style,
    disabledStyle,
    iconName,
    checkType,
    // NOTE: injected by a Switcher
    value,
    selected,
    onChange,
  } = props

  const theme = props.theme || themeManager.getStyle('Checkbox')
  const baseStyle = defaultStyle(theme)

  // NOTE: function onChange is injected by the Switcher component
  const switcherProp = onChange &&
    {
      onPress: () => {},
      onPressOut: onChange.bind(null, value),
    }

  const isChecked = checked || selected

  let CheckComponent
  if (isChecked) {
    CheckComponent = <View style={[baseStyle.check.circle]} />
    if (checkType === 'icon') {
      CheckComponent = (
        <Icon
          name={iconName || theme.CHECKBOX_CHECK_ICON_NAME}
          size={theme.CHECKBOX_CHECK_ICON_SIZE}
          color={theme.CHECKBOX_CHECK_ICON_COLOR}
          style={baseStyle.check.icon}
        />
      )
    }
  }

  const checkboxStyle = [
    baseStyle.base,
    baseStyle.kind[kind],
    isChecked && checkType === 'icon'
      ? baseStyle.states.checkedIcon
      : baseStyle.states.normal,
    style,
  ]

  return (
    <View style={disabled ? disabledStyle : {}}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        disabled={disabled}
        style={checkboxStyle}
        onPress={() => onValueChange(!checked)}
        {...switcherProp}
      >
        {CheckComponent}
      </TouchableOpacity>
    </View>
  )
}

Checkbox.propTypes = {
  activeOpacity: PropTypes.number,
  disabled: PropTypes.bool,
  kind: PropTypes.oneOf(['circle', 'rounded']),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabledStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  checked: PropTypes.bool,
  checkType: PropTypes.oneOf(['icon', 'circle']),
  onValueChange: PropTypes.func,
  iconName: PropTypes.string,
  theme: PropTypes.object,
  // NOTE: injected by a Switcher
  value: PropTypes.string,
  onChange: PropTypes.func,
  selected: PropTypes.bool,
}

Checkbox.defaultProps = {
  activeOpacity: 0.8,
  disabled: false,
  kind: 'rounded',
  disabledStyle: { opacity: 0.3 },
  checked: false,
  onValueChange: () => {},
  checkType: 'icon',
}

export default Checkbox
