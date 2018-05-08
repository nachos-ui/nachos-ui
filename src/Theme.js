import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import defaultBranding from "./branding_defaults";

export const ThemeContext = React.createContext({
  theme: {}
});

export class Provider extends React.Component {
  state = {};
  static getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(nextProps.theme) !== JSON.stringify(prevState)) {
      //return this.createTheme(nextProps.theme);
    }
    return null;
  }

  themeConfigs = {};
  branding = defaultBranding;

  updateThemeConfig = (name, themeConfig) => {
    const themedStyles = {};

    Object.keys(themeConfig.style || {}).forEach(key => {
      const style = themeConfig.style[key];

      // See if there is anykind of theming applied on this style
      const themed = Object.keys(style).find(styleName =>
        this.detectTheming(style[styleName])
      );

      if (themed) {
        themedStyles[key] = this.mapStyle(style);
      } else {
        themedStyles[key] = style;
      }
    });

    this.themeConfigs[name] = {
      computedStyle: StyleSheet.create(themedStyles),
      props: themeConfig.settings
    };
    return this.themeConfigs[name];
  };

  mapStyle(style) {
    const mapped = {};
    Object.keys(style).forEach(styleName => {
      const styleValue = style[styleName];
      mapped[styleName] = this.parse(styleValue);
    });
    return mapped;
  }

  detectTheming(value) {
    return (
      typeof value === "string" && (value[0] === "@" || value.indexOf("@") >= 0)
    );
  }

  parse(value) {
    if (this.detectTheming(value)) {
      return value.replace(/@([\w_-]+)/gm, (match, key) => {
        if (!this.branding[key]) console.log(key);

        return this.branding[key];
      });
    }
    return value;
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.themeConfigs,
          updateThemeConfig: this.updateThemeConfig
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export function withTheme(componentName, ThemedComponent) {
  return class extends React.Component {
    constructor() {
      super();
      try {
        ThemeContext._currentValue.updateThemeConfig(
          componentName,
          ThemedComponent.themeConfig
        );
      } catch (e) {
        console.warn(`failed to update theme for ${componentName}`);
      }
    }
    render() {
      const props = this.props;
      return (
        <ThemeContext.Consumer>
          {({ theme }) => {
            return (
              <ThemedComponent
                theme={theme[componentName].computedStyle}
                {...theme[componentName].props || {}}
                {...props}
              />
            );
          }}
        </ThemeContext.Consumer>
      );
    }
  };
}
