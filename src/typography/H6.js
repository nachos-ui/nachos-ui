import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";
import { withTheme } from "../Theme";

const H6 = props => {
  const textProps = {
    ...props,
    theme: props.theme
  };
  return <Text {...textProps} />;
};

H6.themeConfig = {
  style: {
    base: {
      fontSize: 14,
      fontStyle: "normal",
      color: "@textColor",
      paddingVertical: 10,
      textAlign: "left",
      fontWeight: "500"
    }
  }
};

H6.propTypes = { theme: PropTypes.object };

export default withTheme("H6", H6);
