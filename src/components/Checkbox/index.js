import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";
import Icon from "../Icon";
import { withTheme } from "../Theme";

const Checkbox = props => {
  const {
    activeOpacity,
    disabled,
    checkComponent,
    checked,
    onValueChange,
    style,
    disabledStyle,
    iconName,
    iconColor,
    iconSize,
    // NOTE: injected by a Switcher
    value,
    selected,
    onChange,
    theme
  } = props;

  // NOTE: function onChange is injected by the Switcher component
  const switcherProp = onChange && {
    onPress: () => {},
    onPressOut: onChange.bind(null, value)
  };

  const isChecked = checked || selected || false;
  return (
    <View style={disabled ? disabledStyle : {}}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        disabled={disabled}
        style={[theme.base, isChecked ? theme.active : {}, style]}
        onPress={() => onValueChange(!checked)}
        {...switcherProp}
      >
        {isChecked &&
          !checkComponent && (
            <Icon
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={theme.check}
            />
          )}
        {isChecked && checkComponent}
      </TouchableOpacity>
    </View>
  );
};

Checkbox.themeConfig = {
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
      borderRadius: 5
    },
    active: {
      backgroundColor: "#fff"
    },
    check: {
      backgroundColor: "transparent",
      color: "@primaryColor",
      marginTop: 2
    }
  }
};

Checkbox.propTypes = {
  activeOpacity: PropTypes.number,
  disabled: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabledStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  checked: PropTypes.bool,
  onValueChange: PropTypes.func,
  iconName: PropTypes.string,
  theme: PropTypes.object.isRequired,
  // NOTE: injected by a Switcher
  value: PropTypes.string,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  iconName: "check",
  iconColor: "@primaryColor",
  iconSize: 18,
  activeOpacity: 0.8,
  disabled: false,
  disabledStyle: { opacity: 0.3 },
  checked: false,
  onValueChange: () => {}
};

export default withTheme("Checkbox", Checkbox);
