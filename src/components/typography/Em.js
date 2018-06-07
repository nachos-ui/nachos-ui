import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";
import { withTheme } from "../Theme";

const Em = props => {
  const textProps = {
    ...props,
    theme: props.theme.base
  };
  return <Text {...textProps} />;
};

Em.themeConfig = {
  style: {
    base: {
      fontSize: 14,
      fontWeight: "normal",
      fontStyle: "italic",
      color: "@textColor",
      paddingVertical: 10,
      textAlign: "left"
    }
  }
};

Em.propTypes = { ...Text.propTypes };

export default withTheme("Em", Em);
