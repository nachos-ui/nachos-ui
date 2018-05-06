import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

const defaultTheme = {
  PROGRESS_BACKGROUND: '#bdc1cc',
  PROGRESS_ACTIVE_COLOR: '#2f8cff',
  PROGRESS_HEIGHT: 6,
  PROGRESS_WIDTH: 300,
}

const Progress = (props) => {
  const {
    theme,
    progress,
    style,
    color,
    width = theme.PROGRESS_WIDTH,
    height = theme.PROGRESS_HEIGHT,
  } = props

  const outerStyle = {
    borderRadius: height / 2,
    ...style,
    width,
    height,
  }

  const innerStyle = {
    height,
    width: width * progress,
    backgroundColor: color || undefined,
    borderRadius: height / 2,
  }

  return (
    <View style={[theme.outerStyle, outerStyle]}>
      <View style={[theme.innerStyle, innerStyle]} />
    </View>
  )
}

Progress.defaultStyle = (theme = defaultTheme) => {
  return {
    outerStyle: {
      backgroundColor: theme.PROGRESS_BACKGROUND,
      overflow: 'hidden',
    },
    innerStyle: {
      backgroundColor: theme.PROGRESS_ACTIVE_COLOR,
    },
  }
}

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  theme: PropTypes.object,
}

Progress.defaultProps = {
  progress: 0,
}

export default Progress
