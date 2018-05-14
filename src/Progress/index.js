import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { withTheme } from "../Theme";

const Progress = props => {
  const { theme, progress, style, color, width, height } = props;

  const outerStyle = {
    borderRadius: height / 2,
    width,
    height
  };

  const innerStyle = {
    height,
    width: width * progress,
    borderRadius: height / 2
  };
  if (color) innerStyle.backgroundColor = color;

  return (
    <View style={[theme.outerStyle, outerStyle, style]}>
      <View style={[theme.innerStyle, innerStyle]} />
    </View>
  );
};

Progress.themeConfig = {
  props: {
    width: 300,
    height: 6
  },
  style: {
    outerStyle: {
      backgroundColor: "@disabledColor",
      overflow: "hidden"
    },
    innerStyle: {
      backgroundColor: "@primaryColor"
    }
  }
};

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  theme: PropTypes.object
};

Progress.defaultProps = {
  progress: 0
};

export default withTheme("Progress", Progress);
