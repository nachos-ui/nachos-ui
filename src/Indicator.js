import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import Badge from "./Badge";
import { withTheme } from "./Theme";

class Indicator extends Component {
  static themeConfig = {
    style: {
      base: {
        position: "absolute",
        top: 0,
        left: 0
      },
      types: {
        success: "#66bd2b",
        warning: "#ef4836",
        normal: "@primaryColor"
      }
    }
  };
  static propTypes = {
    color: PropTypes.string,
    children: PropTypes.node,
    position: PropTypes.oneOf([
      "left top",
      "right top",
      "left bottom",
      "right bottom"
    ]),
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    type: PropTypes.oneOf(["normal", "success", "warning"]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    theme: PropTypes.object
  };

  static defaultProps = {
    type: "normal",
    position: "right top"
  };

  state = {
    childWidth: 0,
    childHeight: 0
  };

  _handleSizeOfChild = event => {
    const { width, height } = event.nativeEvent.layout;
    this.setState({
      childWidth: width,
      childHeight: height
    });
  };

  render() {
    const { color, children, position, style, type, value, theme } = this.props;

    const clonnedChildren = React.cloneElement(children, {
      onLayout: this._handleSizeOfChild
    });

    const badgeColor = color || theme.types[type];

    const NEGATIVE_OFFSET = -18;
    const NEGATIVE_POSITION_OFFSET = -10;
    const positionStyle = {
      "left top": {
        top: NEGATIVE_POSITION_OFFSET,
        left: 0,
        marginLeft: NEGATIVE_OFFSET
      },
      "right top": {
        top: NEGATIVE_POSITION_OFFSET,
        left: this.state.childWidth,
        marginLeft: NEGATIVE_OFFSET
      },
      "left bottom": {
        top: this.state.childHeight + NEGATIVE_POSITION_OFFSET,
        left: 0,
        marginLeft: NEGATIVE_OFFSET
      },
      "right bottom": {
        top: this.state.childHeight + NEGATIVE_POSITION_OFFSET,
        left: this.state.childWidth,
        marginLeft: NEGATIVE_OFFSET
      }
    };

    return (
      <View style={style}>
        {clonnedChildren}
        <View style={theme.base}>
          <Badge
            color={badgeColor}
            value={value}
            style={[positionStyle[position]]}
          />
        </View>
      </View>
    );
  }
}

export default withTheme("Indicator", Indicator);
