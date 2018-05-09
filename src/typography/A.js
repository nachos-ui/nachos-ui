import React, { Component } from "react";
import PropTypes from "prop-types";
import { Linking } from "react-native";
import Text from "./Text";
import { withTheme } from "../Theme";

class A extends Component {
  static themeConfig = {
    style: {
      base: {
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        color: "@linkColor",
        paddingVertical: 0,
        textAlign: "left",
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "@linkColor"
      }
    }
  };
  static propTypes = {
    href: PropTypes.string,
    onPress: PropTypes.func,
    onError: PropTypes.func,
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    theme: PropTypes.object
  };

  static defaultProps = {
    onPress: () => {},
    onError: () => {}
  };

  _handlePress = e => {
    if (this.props.onPress) {
      this.props.onPress(e);
      if (e.defaultPrevented) {
        return;
      }
    }

    if (!this.props.href) {
      return;
    }

    Linking.canOpenURL(this.props.href).then(supported => {
      if (supported) {
        Linking.openURL(this.props.href);
      } else {
        this.props.onError(`Don't know how to open URI: ${this.props.href}`);
      }
    });
  };

  render() {
    const theme = this.props.theme;

    return (
      <Text
        accessibilityRole="link"
        style={[theme.base, this.props.style]}
        onPress={this._handlePress}
      >
        {this.props.children}
      </Text>
    );
  }
}

export default withTheme("A", A);
