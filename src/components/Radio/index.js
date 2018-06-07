import React from "react";
import PropTypes from "prop-types";
import Checkbox from "../Checkbox";
import { withTheme } from "../Theme";
import { View } from "react-native";

const Radio = ({ theme, ...rest }) => {
  return (
    <Checkbox
      checkComponent={<View style={[theme.check]} />}
      theme={theme}
      {...rest}
    />
  );
};

Radio.themeConfig = {
  props: {},
  style: {
    base: {
      position: "relative",
      width: 22,
      height: 22,
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#ececee",
      borderRadius: 9999
    },
    active: {
      backgroundColor: "#fff"
    },
    check: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: "@primaryColor"
    }
  }
};

Radio.propTypes = {
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  onValueChange: PropTypes.func,
  value: PropTypes.string
};

Radio.defaultProps = {
  iconSize: 18,
  activeOpacity: 0.8,
  disabled: false,
  disabledStyle: { opacity: 0.3 },
  selected: false,
  onValueChange: () => {}
};

export default withTheme("Radio", Radio);
