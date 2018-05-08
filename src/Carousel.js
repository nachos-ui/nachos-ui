import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, ScrollView, View, Text, Platform } from "react-native";
import { withTheme } from "./Theme";

class Carousel extends Component {
  static themeConfig = {
    style: {
      base: { flex: 1, position: "relative" },
      image: { flex: 1, resizeMode: "cover" },
      indicator: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 5,
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "transparent"
      },
      indicatorItem: {
        letterSpacing: 6,
        color: "#bdc1cc"
      },
      indicatorActiveItem: {
        color: "@primaryColor"
      }
    }
  };

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
    theme: PropTypes.object
  };

  static defaultProps = {
    hideIndicators: false,
    width: 300,
    height: 300,
    indicatorSize: 24,
    images: [],
    onChange: () => {}
  };

  state = { activeSlide: 0 };

  _renderIndicator() {
    if (this.props.hideIndicators) {
      return;
    }

    const theme = this.props.theme;
    const indicators = [];
    let indicatorStyle = {};
    let content = this.props.children;
    if (!content) {
      content = this.props.images;
    }

    content.forEach((child, index) => {
      indicatorStyle = {
        ...theme.indicatorItem,
        ...this.props.indicatorStyle,
        fontSize: this.props.indicatorSize
      };
      if (this.state.activeSlide === index) {
        indicatorStyle = {
          ...indicatorStyle,
          ...theme.indicatorActiveItem,
          ...this.props.indicatorActiveStyle
        };
      }

      indicators.push(
        <Text
          style={[indicatorStyle]}
          key={index}
          onPress={this._indicatorPressed.bind(this, index)}
        >
          •
        </Text>
      );
    });

    return <View style={[theme.indicator]}>{indicators}</View>;
  }

  _onAnimationEnd = e => {
    const activeSlide = e.nativeEvent.contentOffset.x / this.props.width;
    this.setState({ activeSlide });

    if (this.props.onChange) {
      this.props.onChange(activeSlide);
    }
  };

  _indicatorPressed(activeSlide) {
    this.setState({ activeSlide });
    if (this._scrollView) {
      this._scrollView.scrollTo({
        x: activeSlide * this.props.width
      });
    }
  }

  render() {
    const { theme, width, height, images, style } = this.props;

    let content = this.props.children;
    if (!content) {
      content = images.map((image, index) => {
        return (
          <Image
            key={index}
            style={[theme.image, { width, height }]}
            source={{ uri: image }}
          />
        );
      });
    }

    return (
      <View style={[theme.base, { width, height }, style]}>
        <ScrollView
          bounces={Platform.OS === "ios" ? false : undefined}
          decelerationRate={Platform.OS === "ios" ? "fast" : undefined}
          automaticallyAdjustContentInsets={
            Platform.OS === "ios" ? false : undefined
          }
          ref={scrollView => {
            this._scrollView = scrollView;
          }}
          horizontal
          pagingEnabled
          removeClippedSubviews
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          height={height}
          onMomentumScrollEnd={this._onAnimationEnd}
        >
          {content}
        </ScrollView>
        {this._renderIndicator()}
      </View>
    );
  }
}

export default withTheme("Carousel", Carousel);
