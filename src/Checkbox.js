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
    checkType,
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

  let CheckComponent;
  if (isChecked) {
    CheckComponent = <View style={[theme.check.circle]} />;
    if (checkType === "icon") {
      CheckComponent = (
        <Icon
          name={iconName || theme.settings.CHECKBOX_CHECK_ICON_NAME}
          size={theme.base.width}
          color={theme.check.icon.color || "#fff"}
          style={theme.check.icon}
        />
      );
    }
  }

  const checkboxStyle = [
    theme.base,
    theme.kind[kind],
    isChecked && checkType === "icon"
      ? theme.states.checkedIcon
      : theme.states.normal,
    style
  ];

  return (
    <View style={disabled ? disabledStyle : {}}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        disabled={disabled}
        style={checkboxStyle}
        onPress={() => onValueChange(!checked)}
        {...switcherProp}
      >
        {CheckComponent}
      </TouchableOpacity>
    </View>
  );
};

Checkbox.themeConfig = {
  settings: {
    CHECKBOX_CHECK_ICON_NAME: "md-checkmark"
  },
  style: {
    base: {
      position: "relative",
      width: 20,
      height: 20,
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center"
    },
    kind: {
      circle: {
        // NOTE: we cannot use '50%' as we don't know the dimensions up front
        borderRadius: 9999
      },
      rounded: {
        borderRadius: 5
      }
    },
    states: {
      normal: {
        borderColor: "#2f8cff"
      },
      checkedIcon: {
        borderColor: "#2f8cff",
        backgroundColor: "#2f8cff"
      }
    },
    check: {
      icon: {
        backgroundColor: "transparent",
        color: "#fff",
        marginTop: 2
      },
      circle: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: "#2f8cff"
      }
    }
  }
};

Checkbox.propTypes = {
  activeOpacity: PropTypes.number,
  disabled: PropTypes.bool,
  kind: PropTypes.oneOf(["circle", "rounded"]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabledStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  checked: PropTypes.bool,
  checkType: PropTypes.oneOf(["icon", "circle"]),
  onValueChange: PropTypes.func,
  iconName: PropTypes.string,
  theme: PropTypes.object,
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
