import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { withTheme } from "./Theme";

const Bubble = props => {
  const { arrowPosition, style, children, theme } = props;

  const color = props.color || theme.BUBBLE_BACKGROUND;
  const arrowStyle = {
    top: {
      borderBottomColor: color
    },
    right: {
      borderLeftColor: color
    },
    bottom: {
      borderTopColor: color
    },
    left: {
      borderRightColor: color
    }
  };
  return (
    <View style={style}>
      <View style={[theme.base, { backgroundColor: color }]}>
        <Text style={theme.text}>{children}</Text>
        <View
          style={[
            theme.arrowContainer,
            theme[`arrowPosition_${arrowPosition}`]
          ]}
        >
          <View
            style={[theme[`arrow_${arrowPosition}`], arrowStyle[arrowPosition]]}
          />
        </View>
      </View>
    </View>
  );
};

Bubble.themeConfig = {
  style: {
    base: {
      position: "relative",
      minHeight: 70,
      borderRadius: 10,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 15,
      paddingHorizontal: 25
    },
    text: {
      color: "@alternateTextColor",
      fontSize: 14
    },
    arrowContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    arrowPosition_top: {
      justifyContent: "flex-start",
      alignItems: "center"
    },
    arrowPosition_right: {
      justifyContent: "center",
      alignItems: "flex-end"
    },
    arrowPosition_bottom: {
      justifyContent: "flex-end",
      alignItems: "center"
    },
    arrowPosition_left: {
      justifyContent: "center",
      alignItems: "flex-start"
    },
    arrow_top: {
      marginTop: -7,
      borderRightWidth: 6,
      borderBottomWidth: 7,
      borderLeftWidth: 6,
      borderRightColor: "transparent",
      borderLeftColor: "transparent"
    },
    arrow_right: {
      marginRight: -7,
      borderTopWidth: 6,
      borderBottomWidth: 6,
      borderLeftWidth: 7,
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    },
    arrow_bottom: {
      marginBottom: -7,
      borderRightWidth: 6,
      borderTopWidth: 7,
      borderLeftWidth: 6,
      borderRightColor: "transparent",
      borderLeftColor: "transparent"
    },
    arrow_left: {
      marginLeft: -7,
      borderTopWidth: 6,
      borderRightWidth: 7,
      borderBottomWidth: 6,
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
};

Bubble.propTypes = {
  arrowPosition: PropTypes.oneOf(["top", "left", "bottom", "right"]),
  color: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node.isRequired,
  theme: PropTypes.object
};

Bubble.defaultProps = {
  arrowPosition: "left"
};

export default withTheme("bubble", Bubble);
