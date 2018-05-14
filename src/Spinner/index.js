import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Animated, Easing } from "react-native";
import { withTheme } from "../Theme";

class Spinner extends Component {
  static themeConfig = {
    props: {
      size: 25,
      color: "@primaryColor",
      duration: 450
    },
    style: {
      base: { flexDirection: "row" }
    }
  };
  static propTypes = {
    duration: PropTypes.number,
    size: PropTypes.number,
    color: PropTypes.string,
    theme: PropTypes.object
  };

  static defaultProps = { duration: 450 };

  constructor(props) {
    super(props);
    this.firstAnimatedValue = new Animated.Value(0);
    this.secondAnimatedValue = new Animated.Value(0);
    this.thirdAnimatedValue = new Animated.Value(0);
    this._shouldAnimationStop = false;
  }

  componentDidMount() {
    this._shouldAnimationStop = false;
    this._setupAnimation();
  }

  componentWillUnmount() {
    this._shouldAnimationStop = true;
  }

  _setupAnimation = () => {
    const createAnimation = value => {
      return Animated.sequence([
        Animated.timing(value, {
          toValue: 1,
          duration: this.props.duration,
          easing: Easing.ease
        }),
        Animated.timing(value, {
          toValue: 0,
          duration: this.props.duration,
          easing: Easing.ease
        })
      ]);
    };

    const scheduleAnimation = value => {
      createAnimation(value).start();
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, this.props.duration);
      });
    };

    const animate = () => {
      if (this._shouldAnimationStop) {
        return;
      }
      scheduleAnimation(this.firstAnimatedValue)
        .then(() => scheduleAnimation(this.secondAnimatedValue))
        .then(() => scheduleAnimation(this.thirdAnimatedValue))
        .then(() => animate());
    };

    animate();
  };

  _interpolate = value => {
    const scale = value.interpolate({
      inputRange: [0, 1],
      outputRange: [0.4, 1]
    });
    return scale;
  };

  render() {
    const theme = this.props.theme;

    const spinnerItem = {
      width: this.props.size,
      height: this.props.size,
      borderRadius: this.props.size,
      backgroundColor: this.props.color
    };
    const firstScale = this._interpolate(this.firstAnimatedValue);
    const secondScale = this._interpolate(this.secondAnimatedValue);
    const thirdScale = this._interpolate(this.thirdAnimatedValue);

    return (
      <View style={theme.base}>
        <Animated.View
          style={[spinnerItem, { transform: [{ scale: firstScale }] }]}
        />
        <Animated.View
          style={[spinnerItem, { transform: [{ scale: secondScale }] }]}
        />
        <Animated.View
          style={[spinnerItem, { transform: [{ scale: thirdScale }] }]}
        />
      </View>
    );
  }
}

export default withTheme("Spinner", Spinner);
