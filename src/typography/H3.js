import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";
import { withTheme } from "../Theme";

const H3 = props => {
  const textProps = {
    ...props,
    theme: props.theme
  };
  return <Text {...textProps} />;
};

H3.themeConfig = {
  style: {
    base: {
      fontSize: 20,
      fontStyle: "normal",
      color: "@textColor",
      paddingVertical: 10,
      textAlign: "left",
      fontWeight: "500"
    }
  }
};

H3.propTypes = { theme: PropTypes.object };

export default withTheme("H3", H3);
