import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { withTheme } from "./Theme";

const Progress = props => {
  const {
    theme,
    progress,
    style,
    color,
    width = theme.base.width,
    height = theme.base.height
  } = props;

  const outerStyle = {
    borderRadius: height / 2,
    ...style,
    width,
    height
  };

  const innerStyle = {
    height,
    width: width * progress,
    backgroundColor: color || undefined,
    borderRadius: height / 2
  };

  return (
    <View style={[theme.outerStyle, outerStyle]}>
      <View style={[theme.innerStyle, innerStyle]} />
    </View>
  );
};

Progress.themeConfig = {
  style: {
    base: {
      width: 300,
      height: 6
    },
    outerStyle: {
      backgroundColor: "#bdc1cc",
      overflow: "hidden"
    },
    innerStyle: {
      backgroundColor: "#2f8cff"
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
