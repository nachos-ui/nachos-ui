import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'

import Badge from './Badge'
import themeManager from './themeManager'

const defaultTheme = {
  INDICATOR_SUCCESS_COLOR: '#66bd2b',
  INDICATOR_WARNING_COLOR: '#ef4836',
  INDICATOR_NORMAL_COLOR: '#2f8cff',
}

themeManager.setSource('Indicator', () => defaultTheme)

const defaultStyle = (theme) => {
  return {
    base: {
      position: 'absolute',
    },
    types: {
      success: theme.INDICATOR_SUCCESS_COLOR,
      warning: theme.INDICATOR_WARNING_COLOR,
      normal: theme.INDICATOR_NORMAL_COLOR,
    },
  }
}

class Indicator extends Component {
  static propTypes = {
    color: PropTypes.string,
    children: PropTypes.node,
    position: PropTypes.oneOf([
      'left top',
      'right top',
      'left bottom',
      'right bottom',
    ]),
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    type: PropTypes.oneOf(['normal', 'success', 'warning']),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    theme: PropTypes.object,
  }

  static defaultProps = {
    type: 'normal',
    position: 'right top',
  }

  state = {
    childWidth: 0,
    childHeight: 0,
  }

  _handleSizeOfChild = (event) => {
    const { width, height } = event.nativeEvent.layout
    this.setState({
      childWidth: width,
      childHeight: height,
    })
  }

  render() {
    const {
      color,
      children,
      position,
      style,
      type,
      value,
    } = this.props

    const theme = this.props.theme ||
      themeManager.getStyle('Indicator')
    const baseStyle = defaultStyle(theme)
    const clonnedChildren = React.cloneElement(children, {
      onLayout: this._handleSizeOfChild,
    })

    const badgeColor = color || baseStyle.types[type]

    const NEGATIVE_OFFSET = -18
    const NEGATIVE_POSITION_OFFSET = -10
    const positionStyle = {
      'left top': {
        top: NEGATIVE_POSITION_OFFSET,
        left: 0,
        marginLeft: NEGATIVE_OFFSET,
      },
      'right top': {
        top: NEGATIVE_POSITION_OFFSET,
        left: this.state.childWidth,
        marginLeft: NEGATIVE_OFFSET,
      },
      'left bottom': {
        top: this.state.childHeight + NEGATIVE_POSITION_OFFSET,
        left: 0,
        marginLeft: NEGATIVE_OFFSET,
      },
      'right bottom': {
        top: this.state.childHeight + NEGATIVE_POSITION_OFFSET,
        left: this.state.childWidth,
        marginLeft: NEGATIVE_OFFSET,
      },
    }

    return (
      <View style={style}>
        {clonnedChildren}
        <View style={baseStyle.base}>
          <Badge
            color={badgeColor}
            value={value}
            style={[positionStyle[position]]}
          />
        </View>
      </View>
    )
  }
}

export default Indicator
