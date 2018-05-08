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
    themeConfig = JSON.parse(
      JSON.stringify(themeConfig).replace(/@([\w_-]+)/gm, (match, key) => {
        if (!this.branding[key]) console.log(key);

        return this.branding[key];
      })
    );
    return (this.themeConfigs[name] = {
      computedStyle: themeConfig.style
        ? StyleSheet.create(themeConfig.style)
        : {},
      props: themeConfig.settings
    });
  };

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
        console.warn(`failed to update theme for ${componentName}`, e);
      }
    }
    render() {
      const props = this.props;
      return (
        <ThemeContext.Consumer>
          {({ theme }) => {
            return (
              <ThemedComponent
                {...props}
                theme={(theme[componentName] || {}).computedStyle || {}}
                {...(theme[componentName] || {}).props || {}}
              />
            );
          }}
        </ThemeContext.Consumer>
      );
    }
  };
}
