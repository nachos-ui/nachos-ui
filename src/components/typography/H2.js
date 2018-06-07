import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";
import { withTheme } from "../Theme";

const H2 = props => {
  const textProps = {
    ...props,
    theme: props.theme
  };
  return <Text {...textProps} />;
};

H2.themeConfig = {
  style: {
    base: {
      fontSize: 22,
      fontStyle: "normal",
      color: "@textColor",
      paddingVertical: 10,
      textAlign: "left",
      fontWeight: "500"
    }
  }
};

H2.propTypes = { ...Text.propTypes };

export default withTheme("H2", H2);
