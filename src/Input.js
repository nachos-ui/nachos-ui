import React from "react";
import PropTypes from "prop-types";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/dist/Ionicons";
import { withTheme } from "./Theme";

const Input = props => {
  const { theme, width, status, style, disabled, icon } = props;

  let IconComponent;
  if (icon) {
    IconComponent = (
      <Icon
        name={icon}
        size={theme.settings.iconSize}
        color={theme.colorStates[status]}
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

  return (
    <View
      style={[
        theme.base,
        theme[status],
        style,
        { width },
        disabled ? theme.disabled : {}
      ]}
    >
      <TextInput
        {...rest}
        editable={!disabled}
        style={[
          theme.base,
          theme.input,
          props.inputStyle,
          { color: theme.colorStates[status], width }
        ]}
      />
      {IconComponent}
    </View>
  );
};

Input.themeConfig = {
  settings: {
    iconSize: 20
  },
  style: {
    base: { alignSelf: "stretch", borderWidth: 1, height: 46 },
    normal: {
      backgroundColor: "#fff",
      borderColor: "#bdc1cc",
      borderStyle: "solid"
    },
    disabled: { opacity: 0.2 },
    valid: {
      borderColor: "#66bd2b",
      borderStyle: "solid"
    },
    error: {
      borderColor: "#e03126",
      borderStyle: "solid"
    },
    warn: {
      borderColor: "#ff8c2f",
      borderStyle: "solid"
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
    },
    iconStates: {
      valid: "md-checkmark",
      warn: "md-alert",
      error: "md-close"
    },
    colorStates: {
      normal: "#bdc1cc",
      valid: "#66bd2b",
      warn: "#ff8c2f",
      error: "#e03126"
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
