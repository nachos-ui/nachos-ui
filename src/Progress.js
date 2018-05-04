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
    progress,
    style,
    color,
  } = props
  const theme = props.theme
  const width = props.width || theme.PROGRESS_WIDTH
  const height = props.height || theme.PROGRESS_HEIGHT

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
    <View style={[outerStyle, theme.outerStyle]}>
      <View style={[innerStyle, theme.innerStyle]} />
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
