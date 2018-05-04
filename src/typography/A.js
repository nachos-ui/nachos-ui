import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Linking } from 'react-native'
import Text from './Text'
import themeManager from '../themeManager'

const defaultTheme = {
  ...themeManager.getStyle('Text'),
  FONT_COLOR: '#2f8cff',
  PADDING_VERTICAL: 0,
}

themeManager.setSource('A', () => defaultTheme)

const defaultStyle = (theme) => {
  return {
    color: theme.FONT_COLOR,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: theme.FONT_COLOR,
  }
}

class A extends Component {
  static propTypes = {
    href: PropTypes.string,
    onPress: PropTypes.func,
    onError: PropTypes.func,
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    theme: PropTypes.object,
  }

  static defaultProps = {
    onPress: () => {},
    onError: () => {},
  }

  _handlePress = (e) => {
    if (this.props.onPress) {
      this.props.onPress(e)
      if (e.defaultPrevented) {
        return
      }
    }

    if (!this.props.href) {
      return
    }

    Linking.canOpenURL(this.props.href).then((supported) => {
      if (supported) {
        Linking.openURL(this.props.href)
      } else {
        this.props.onError(
          `Don't know how to open URI: ${this.props.href}`
        )
      }
    })
  }

  render() {
    const theme = this.props.theme || themeManager.getStyle('A')
    const baseStyle = defaultStyle(theme)
    return (
      <Text
        accessibilityRole='link'
        style={[baseStyle, this.props.style]}
        onPress={this._handlePress}
      >
        {this.props.children}
      </Text>
    )
  }
}

export default A
