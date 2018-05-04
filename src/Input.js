import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons'

const defaultTheme = {
  INPUT_HEIGHT: 46,
  INPUT_BACKGROUND: '#fff',
  INPUT_ICON_SIZE: 20,
  INPUT_VALID_ICON: 'md-checkmark',
  INPUT_WARN_ICON: 'md-alert',
  INPUT_ERROR_ICON: 'md-close',
  INPUT_NORMAL_COLOR: '#bdc1cc',
  INPUT_VALID_COLOR: '#66bd2b',
  INPUT_WARN_COLOR: '#ff8c2f',
  INPUT_ERROR_COLOR: '#e03126',
}

const Input = (props) => {
  const { width, theme } = props
  const height = props.height || theme.INPUT_HEIGHT
  const statusStyle = theme[props.status]
  const icon = props.icon || theme.iconStates[props.status]
  const statusColor = theme.colorStates[props.status]

  let IconComponent
  if (icon) {
    IconComponent = (
      <Icon
        name={icon}
        size={theme.INPUT_ICON_SIZE}
        color={statusColor}
        style={[theme.icon]}
      />
    )
  }

  // NOTE: Clone props and then delete Component specific props so we can
  // spread the rest
  let { ...rest } = props
  delete rest.editable
  delete rest.inputStyle
  delete rest.style
  delete rest.disabled
  delete rest.status
  delete rest.icon
  delete rest.height
  delete rest.width

  return (
    <View
      style={[
        theme.base,
        statusStyle,
        props.style,
        { width, height },
        props.disabled ? theme.disabled : {},
      ]}
    >
      <TextInput
        {...rest}
        editable={!props.disabled}
        style={[
          theme.base,
          theme.input,
          props.inputStyle,
          { color: statusColor, width, height },
        ]}
      />
      {IconComponent}
    </View>
  )
}

Input.defaultStyle = (theme = defaultTheme) => {
  return {
    base: { alignSelf: 'stretch', borderWidth: 1 },
    normal: {
      backgroundColor: theme.INPUT_BACKGROUND,
      borderColor: theme.INPUT_NORMAL_COLOR,
      borderStyle: 'solid',
    },
    disabled: { opacity: 0.2 },
    valid: {
      borderColor: theme.INPUT_VALID_COLOR,
      borderStyle: 'solid',
    },
    error: {
      borderColor: theme.INPUT_ERROR_COLOR,
      borderStyle: 'solid',
    },
    warn: {
      borderColor: theme.INPUT_WARN_COLOR,
      borderStyle: 'solid',
    },
    input: {
      borderColor: 'transparent',
      paddingLeft: 12,
      paddingRight: 6,
    },
    icon: {
      top: 12,
      right: 12,
      position: 'absolute',
      backgroundColor: 'transparent',
    },
    iconStates: {
      valid: theme.INPUT_VALID_ICON,
      warn: theme.INPUT_WARN_ICON,
      error: theme.INPUT_ERROR_ICON,
    },
    colorStates: {
      normal: theme.INPUT_NORMAL_COLOR,
      valid: theme.INPUT_VALID_COLOR,
      warn: theme.INPUT_WARN_COLOR,
      error: theme.INPUT_ERROR_COLOR,
    },
  }
}

Input.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  status: PropTypes.oneOf(['normal', 'valid', 'error', 'warn']),
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  inputStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  icon: PropTypes.string,
  theme: PropTypes.object,
}

Input.defaultProps = {
  value: '',
  disabled: false,
  status: 'normal',
}

export default Input
