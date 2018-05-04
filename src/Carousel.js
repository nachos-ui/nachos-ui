import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, ScrollView, View, Text, Platform } from 'react-native'
import themeManager from './themeManager'

const defaultTheme = {
  CAROUSEL_WIDTH: 300,
  CAROUSEL_HEIGHT: 300,
  CAROUSEL_INDICATOR_SIZE: 24,
  CAROUSEL_INDICATOR_COLOR: '#bdc1cc',
  CAROUSEL_INDICATOR_ACTIVE_COLOR: '#2f8cff',
}

class Carousel extends Component {
  static defaultStyle = (theme = defaultTheme) => {
    return {
      base: { flex: 1, position: 'relative' },
      image: { flex: 1, resizeMode: 'cover' },
      indicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
      },
      indicatorItem: {
        letterSpacing: 6,
        color: theme.CAROUSEL_INDICATOR_COLOR,
      },
      indicatorActiveItem: {
        color: theme.CAROUSEL_INDICATOR_ACTIVE_COLOR,
      },
    }
  }
  
  static propTypes = {
    hideIndicators: PropTypes.bool,
    indicatorActiveStyle: PropTypes.object,
    indicatorStyle: PropTypes.object,
    indicatorSize: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    images: PropTypes.array,
    onChange: PropTypes.func,
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    theme: PropTypes.object,
  }

  static defaultProps = {
    hideIndicators: false,
    images: [],
    onChange: () => {},
  }

  state = { activeSlide: 0 }

  _renderIndicator() {
    if (this.props.hideIndicators) {
      return
    }

    const theme = this.props.theme ||
      themeManager.getStyle('Carousel')
    const baseStyle = defaultStyle(theme)
    const indicators = []
    let indicatorStyle = {}
    let content = this.props.children
    if (!content) {
      content = this.props.images
    }

    content.forEach((child, index) => {
      indicatorStyle = {
        ...baseStyle.indicatorItem,
        ...this.props.indicatorStyle,
        fontSize: (
          this.props.indicatorSize || theme.CAROUSEL_INDICATOR_SIZE
        ),
      }
      if (this.state.activeSlide === index) {
        indicatorStyle = {
          ...indicatorStyle,
          ...baseStyle.indicatorActiveItem,
          ...this.props.indicatorActiveStyle,
        }
      }

      indicators.push(
        <Text
          style={[indicatorStyle]}
          key={index}
          onPress={this._indicatorPressed.bind(this, index)}
        >
          •
        </Text>
      )
    })

    return (
      <View style={[baseStyle.indicator]}>
        {indicators}
      </View>
    )
  }

  _onAnimationEnd = (e) => {
    const theme = this.props.theme ||
      themeManager.getStyle('Carousel')
    const width = this.props.width || theme.CAROUSEL_WIDTH
    const activeSlide = e.nativeEvent.contentOffset.x / width
    this.setState({ activeSlide })

    if (this.props.onChange) {
      this.props.onChange(activeSlide)
    }
  }

  _indicatorPressed(activeSlide) {
    this.setState({ activeSlide })
    const theme = this.props.theme ||
      themeManager.getStyle('Carousel')
    const width = this.props.width || theme.CAROUSEL_WIDTH
    if (this._scrollView) {
      this._scrollView.scrollTo({
        x: activeSlide * width,
      })
    }
  }

  render() {
    const theme = this.props.theme ||
      themeManager.getStyle('Carousel')
    const width = this.props.width || theme.CAROUSEL_WIDTH
    const height = this.props.height || theme.CAROUSEL_HEIGHT

    const baseStyle = defaultStyle(theme)
    let content = this.props.children
    if (!content) {
      content = this.props.images.map((image, index) => {
        return (
          <Image
            key={index}
            style={[baseStyle.image, { width, height }]}
            source={{ uri: image }}
          />
        )
      })
    }

    return (
      <View
        style={[baseStyle.base, { width, height }, this.props.style]}
      >
        <ScrollView
          bounces={Platform.OS === 'ios' ? false : undefined}
          decelerationRate={Platform.OS === 'ios' ? 'fast' : undefined}
          automaticallyAdjustContentInsets={Platform.OS === 'ios' ? false : undefined}

          ref={(scrollView) => {
            this._scrollView = scrollView
          }}
          horizontal
          pagingEnabled
          removeClippedSubviews
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          height={this.props.height}
          onMomentumScrollEnd={this._onAnimationEnd}
        >
          {content}
        </ScrollView>
        {this._renderIndicator()}
      </View>
    )
  }
}

export default Carousel
