import React, { PropTypes } from 'react'
import { View } from 'react-native'
import themeManager from './themeManager'

const defaultTheme = {
  PROGRESS_BACKGROUND: '#bdc1cc',
  PROGRESS_ACTIVE_COLOR: '#2f8cff',
  PROGRESS_HEIGHT: 6,
  PROGRESS_WIDTH: 300,
}

themeManager.setSource('Progress', () => defaultTheme)

const Progress = (props) => {
  const {
    progress,
    style,
    color,
  } = props
  const theme = props.theme || themeManager.getStyle('Progress')
  const width = props.width || theme.PROGRESS_WIDTH
  const height = props.height || theme.PROGRESS_HEIGHT

  const outerStyle = {
    backgroundColor: theme.PROGRESS_BACKGROUND,
    borderRadius: height / 2,
    overflow: 'hidden',
    ...style,
    width,
    height,
  }
  const innerStyle = {
    height,
    width: width * progress,
    backgroundColor: color || theme.PROGRESS_ACTIVE_COLOR,
    borderRadius: height / 2,
  }
  return (
    <View style={outerStyle}>
      <View style={innerStyle} />
    </View>
  )
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
