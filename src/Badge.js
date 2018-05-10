import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { withTheme } from "./Theme";

const Badge = props => {
  const { color, style, textStyle, value, theme } = props;

  return (
    <View style={theme.container}>
      <View
        style={[theme.base, color ? { backgroundColor: color } : {}, style]}
      >
        <Text style={[theme.text, textStyle]}>{value}</Text>
      </View>
    </View>
  );
};

Badge.themeConfig = {
  style: {
    container: {
      flexDirection: "row"
    },
    base: {
      padding: 10,
      paddingVertical: 4,
      backgroundColor: "@accentColor",
      borderRadius: 20,
      minWidth: 40
    },
    text: {
      fontSize: 12,
      color: "#fff",
      textAlign: "center"
    }
  }
};

Badge.propTypes = {
  color: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  theme: PropTypes.object
};

export default withTheme("Badge", Badge);
