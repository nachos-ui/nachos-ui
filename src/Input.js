import React from "react";
import PropTypes from "prop-types";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/dist/Ionicons";
import { withTheme } from "./Theme";
import { StyleSheet } from "react-native";

const Input = props => {
  const { theme, width, status, style, disabled, icon, iconSize } = props;

  const { color: statusColor, ...statusTheme } = StyleSheet.flatten(
    theme[status]
  );
  let IconComponent;
  if (icon) {
    IconComponent = (
      <Icon
        name={icon || iconStates[status]}
        size={iconSize}
        color={statusColor}
        style={[theme.icon]}
      />
    );
  }

  // NOTE: Clone props and then delete Component specific props so we can
  // spread the rest
  let { ...rest } = props;
  delete rest.editable;
  delete rest.inputStyle;
  delete rest.style;
  delete rest.disabled;
  delete rest.status;
  delete rest.icon;
  delete rest.height;
  delete rest.width;
  delete rest.iconSize;
  delete rest.iconStates;

  console.log(statusTheme);
  return (
    <View
      style={[
        theme.base,
        statusTheme,
        style,
        { width },
        disabled ? theme.disabled : {}
      ]}
    >
      <TextInput
        {...rest}
        editable={!disabled}
        style={[theme.base, theme.input, props.inputStyle, { width }]}
      />
      {IconComponent}
    </View>
  );
};

Input.themeConfig = {
  settings: {
    iconSize: 20,
    iconStates: {
      valid: "md-checkmark",
      warn: "md-alert",
      error: "md-close"
    }
  },
  style: {
    base: { alignSelf: "stretch", borderWidth: 1, height: 46 },
    normal: {
      backgroundColor: "#fff",
      borderColor: "#bdc1cc",
      borderStyle: "solid",
      color: "#bdc1cc"
    },
    disabled: { opacity: 0.2 },
    valid: {
      borderColor: "#66bd2b",
      borderStyle: "solid",
      color: "#66bd2b"
    },
    error: {
      borderColor: "#e03126",
      borderStyle: "solid",
      color: "#e03126"
    },
    warn: {
      borderColor: "#ff8c2f",
      borderStyle: "solid",
      color: "#ff8c2f"
    },
    input: {
      borderColor: "transparent",
      paddingLeft: 12,
      paddingRight: 6
    },
    icon: {
      top: 12,
      right: 12,
      position: "absolute",
      backgroundColor: "transparent"
    }
  }
};

Input.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  status: PropTypes.oneOf(["normal", "valid", "error", "warn"]),
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  inputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.string,
  theme: PropTypes.object
};

Input.defaultProps = {
  value: "",
  disabled: false,
  status: "normal"
};

export default withTheme("Input", Input);
