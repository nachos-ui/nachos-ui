import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { withTheme } from "./Theme";

const SegmentedControlButton = props => {
  const {
    value,
    text,
    style,
    textStyle,
    // NOTE: injected by a Switcher
    direction,
    first,
    last,
    selected,
    onChange,
    iconSize,
    iconPosition,
    theme
  } = props;

  // NOTE: function onChange is injected by the Switcher component
  const switcherProp = onChange && {
    onPress: () => {},
    onPressOut: onChange.bind(null, value)
  };

  // NOTE: Clone props and then delete Component specific props so we can
  // spread the rest
  const { ...rest } = props;
  delete rest.direction;
  delete rest.first;
  delete rest.last;
  delete rest.value;
  delete rest.text;
  delete rest.onChange;
  delete rest.style;
  delete rest.textStyle;
  delete rest.theme;
  delete rest.kind;

  return (
    <Button
      iconColor={theme.baseText.color}
      iconActiveColor={theme.states.selectedText.color}
      iconSize={iconSize}
      iconPosition={iconPosition}
      kind="squared"
      {...rest}
      {...switcherProp}
      style={[
        theme.base,
        first ? theme.first[direction] : {},
        last ? theme.last[direction] : {},
        selected ? theme.states.selected : {},
        style
      ]}
      textStyle={[
        theme.baseText,
        selected ? theme.states.selectedText : {},
        textStyle
      ]}
    >
      {text}
    </Button>
  );
};

SegmentedControlButton.themeConfig = {
  settings: {
    iconSize: 20,
    iconPosition: "left"
  },
  style: {
    base: {
      height: 50,
      padding: 0,
      paddingHorizontal: 0,
      borderWidth: 1,
      borderColor: "#ddd",
      backgroundColor: "#fff"
    },
    baseText: {
      color: "#bdc1cc",
      fontSize: 12,
      fontWeight: "500"
    },
    states: {
      selected: {
        backgroundColor: "#2f8cff",
        borderColor: "#2f8cff"
      },
      selectedText: {
        color: "#fff"
      }
    },
    first: {
      row: {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        borderRightWidth: 0
      },
      column: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomWidth: 0
      }
    },
    last: {
      row: {
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        borderLeftWidth: 0
      },
      column: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopWidth: 0
      }
    }
  }
};

SegmentedControlButton.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  text: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  uppercase: PropTypes.bool,
  theme: PropTypes.object,
  // NOTE: injected by a Switcher
  direction: PropTypes.oneOf(["row", "column"]),
  onChange: PropTypes.func,
  first: PropTypes.bool,
  last: PropTypes.bool,
  selected: PropTypes.bool
};

SegmentedControlButton.defaultProps = {
  uppercase: false
};

export default withTheme("SegmentedControlButton", SegmentedControlButton);
