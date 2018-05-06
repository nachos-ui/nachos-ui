import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Animated, Easing } from 'react-native'
import themeManager from './themeManager'

const defaultTheme = {
  SPINNER_SIZE: 25,
  SPINNER_COLOR: '#2f8cff',
  SPINNER_DURATION: 450,
}

class Spinner extends Component {
  static defaultStyle = (theme = defaultTheme) => {
    return {
      base: { flexDirection: 'row' },
    }
  }
  static propTypes = {
    duration: PropTypes.number,
    size: PropTypes.number,
    color: PropTypes.string,
    theme: PropTypes.object,
  }

  static defaultProps = { duration: 450 }

  constructor(props) {
    super(props)
    this.firstAnimatedValue = new Animated.Value(0)
    this.secondAnimatedValue = new Animated.Value(0)
    this.thirdAnimatedValue = new Animated.Value(0)
    this._shouldAnimationStop = false
  }

  componentDidMount() {
    this._shouldAnimationStop = false
    this._setupAnimation()
  }

  componentWillUnmount() {
    this._shouldAnimationStop = true
  }

  _setupAnimation = () => {
    const createAnimation = (value) => {
      return Animated.sequence([Animated.timing(value, {
        toValue: 1,
        duration: this.props.duration,
        easing: Easing.ease,
      }), Animated.timing(value, {
        toValue: 0,
        duration: this.props.duration,
        easing: Easing.ease,
      })])
    }

    const scheduleAnimation = (value) => {
      createAnimation(value).start()
      return new Promise((resolve) => {
        setTimeout(
          () => {
            resolve()
          },
          this.props.duration
        )
      })
    }

    const animate = () => {
      if (this._shouldAnimationStop) {
        return
      }
      scheduleAnimation(this.firstAnimatedValue)
        .then(() => scheduleAnimation(this.secondAnimatedValue))
        .then(() => scheduleAnimation(this.thirdAnimatedValue))
        .then(() => animate())
    }

    animate()
  }

  _interpolate = (value) => {
    const scale = value.interpolate({
      inputRange: [0, 1],
      outputRange: [0.4, 1],
    })
    return scale
  }

  render() {
    const theme = this.props.theme

    const spinnerItem = {
      width: this.props.size || theme.SPINNER_SIZE,
      height: this.props.size || theme.SPINNER_SIZE,
      borderRadius: this.props.size || theme.SPINNER_SIZE,
      backgroundColor: this.props.color || theme.SPINNER_COLOR,
    }
    const firstScale = this._interpolate(this.firstAnimatedValue)
    const secondScale = this._interpolate(this.secondAnimatedValue)
    const thirdScale = this._interpolate(this.thirdAnimatedValue)

    return (
      <View style={theme.base}>
        <Animated.View
          style={[
            spinnerItem,
            { transform: [{ scale: firstScale }] },
          ]}
        />
        <Animated.View
          style={[
            spinnerItem,
            { transform: [{ scale: secondScale }] },
          ]}
        />
        <Animated.View
          style={[
            spinnerItem,
            { transform: [{ scale: thirdScale }] },
          ]}
        />
      </View>
    )
  }
}

export default Spinner
