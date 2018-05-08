import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/dist/Ionicons";
import { withTheme } from "./Theme";

const Checkbox = props => {
  const {
    activeOpacity,
    disabled,
    kind,
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

  const isChecked = checked || selected;

  return (
    <View style={disabled ? disabledStyle : {}}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        disabled={disabled}
        style={[theme.base, isChecked ? theme.active : {}, style]}
        onPress={() => onValueChange(!checked)}
        {...switcherProp}
      >
        {isChecked && (
          <Icon
            name={iconName}
            size={iconSize}
            color={iconColor}
            style={theme.check}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

Checkbox.themeConfig = {
  settings: {
    iconName: "md-checkmark",
    iconColor: "#fff",
    iconSize: 20
  },
  style: {
    base: {
      position: "relative",
      width: 20,
      height: 20,
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#2f8cff",
      borderRadius: 5
    },
    active: {
      backgroundColor: "#2f8cff"
    },
    check: {
      backgroundColor: "transparent",
      color: "#fff",
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
  onChange: PropTypes.func,
  selected: PropTypes.bool
};

Checkbox.defaultProps = {
  activeOpacity: 0.8,
  disabled: false,
  kind: "rounded",
  disabledStyle: { opacity: 0.3 },
  checked: false,
  onValueChange: () => {},
  checkType: "icon"
};

export default withTheme("Checkbox", Checkbox);
