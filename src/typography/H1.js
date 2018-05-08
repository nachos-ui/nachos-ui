import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";
import { withTheme } from "../Theme";

const H1 = props => {
  const textProps = {
    ...props,
    theme: props.theme
  };
  return <Text {...textProps} />;
};

H1.themeConfig = {
  styles: {
    base: {
      fontSize: 28,
      fontStyle: "normal",
      color: "@textColor",
      paddingVertical: 10,
      textAlign: "left",
      fontWeight: "500"
    }
  }
};

H1.propTypes = { theme: PropTypes.object };

export default withTheme("H1", H1);
