import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import themeManager from './themeManager'

const defaultTheme = {
  BADGE_BACKGROUND: '#444',
  BADGE_BORDER_RADIUS: 20,
  BADGE_FONT_COLOR: '#fff',
  BADGE_PADDING_VERTICAL: 4,
  BADGE_PADDING_HORIZONTAL: 10,
  BADGE_FONT_SIZE: 12,
}

themeManager.setSource('Badge', () => defaultTheme)

const defaultStyle = (theme) => {
  return {
    container: {
      flexDirection: 'row',
    },
    base: {
      padding: theme.BADGE_PADDING_HORIZONTAL,
      paddingVertical: theme.BADGE_PADDING_VERTICAL,
      backgroundColor: theme.BADGE_BACKGROUND,
      borderRadius: theme.BADGE_BORDER_RADIUS,
    },
    text: {
      fontSize: theme.BADGE_FONT_SIZE,
      color: theme.BADGE_FONT_COLOR,
    },
  }
}

const Badge = (props) => {
  const {
    color,
    style,
    textStyle,
    value,
  } = props

  const theme = props.theme || themeManager.getStyle('Badge')
  const baseStyle = defaultStyle(theme)

  return (
    <View style={baseStyle.container}>
      <View
        style={[
          baseStyle.base,
          color ? { backgroundColor: color } : {},
          style,
        ]}
      >
        <Text style={[baseStyle.text, textStyle]}>
          {value}
        </Text>
      </View>
    </View>
  )
}

Badge.propTypes = {
  color: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  theme: PropTypes.object,
}

export default Badge
