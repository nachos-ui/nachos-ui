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

    // if (name === "H1") {
    //   console.log(themeConfig);
    // }
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

    isObject(item) {
      return item && typeof item === "object" && !Array.isArray(item);
    }

    mergeDeep(target, ...sources) {
      if (!sources.length) return target;
      const source = sources.shift();

      if (this.isObject(target) && this.isObject(source)) {
        for (const key in source) {
          if (this.isObject(source[key])) {
            if (!target[key]) Object.assign(target, { [key]: {} });
            this.mergeDeep(target[key], source[key]);
          } else {
            Object.assign(target, { [key]: source[key] });
          }
        }
      }

      return this.mergeDeep(target, ...sources);
    }
    render() {
      return (
        <ThemeContext.Consumer>
          {({ theme }) => {
            const computedTheme =
              (theme[componentName] || {}).computedStyle || {};

            const fullTheme = this.props.theme
              ? this.mergeDeep({}, computedTheme, this.props.theme)
              : computedTheme;

            return (
              <ThemedComponent
                {...(theme[componentName] || {}).props || {}}
                {...this.props}
                theme={fullTheme}
              />
            );
          }}
        </ThemeContext.Consumer>
      );
    }
  };
}
