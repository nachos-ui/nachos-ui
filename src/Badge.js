import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { withTheme } from './Theme'

const defaultTheme = {
  BADGE_BACKGROUND: '#444',
  BADGE_BORDER_RADIUS: 20,
  BADGE_FONT_COLOR: '#fff',
  BADGE_PADDING_VERTICAL: 4,
  BADGE_PADDING_HORIZONTAL: 10,
  BADGE_FONT_SIZE: 12,
}

const Badge = (props) => {
  const {
    color,
    style,
    textStyle,
    value,
    theme,
  } = props

  return (
    <View style={theme.container}>
      <View
        style={[
          theme.base,
          color ? { backgroundColor: color } : {},
          style,
        ]}
      >
        <Text style={[theme.text, textStyle]}>
          {value}
        </Text>
      </View>
    </View>
  )
}

Badge.defaultStyle = (theme = defaultTheme) => {
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

export default withTheme('Badge', Badge)
