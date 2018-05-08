import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";
import { withTheme } from "../Theme";

const H5 = props => {
  const textProps = {
    ...props,
    theme: props.theme
  };
  return <Text {...textProps} />;
};

H5.themeConfig = {
  style: {
    base: {
      fontSize: 15,
      fontStyle: "normal",
      color: "@textColor",
      paddingVertical: 10,
      textAlign: "left",
      fontWeight: "500"
    }
  }
};

H5.propTypes = { theme: PropTypes.object };

export default withTheme("H5", H5);
