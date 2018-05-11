import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import defaultBranding from "./branding_defaults";

export const ThemeContext = React.createContext({
  theme: {}
});

export class Provider extends React.Component {
  themeConfigs = {};
  branding = defaultBranding;

  updateThemeConfig = (name, themeConfig) => {
    if (this.props.theme && this.props.theme[name])
      themeConfig = mergeDeep(themeConfig, this.props.theme[name]);

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
      return (
        <ThemeContext.Consumer>
          {({ theme }) => {
            const computedTheme =
              (theme[componentName] || {}).computedStyle || {};

            const fullTheme = this.props.theme
              ? mergeDeep({}, computedTheme, this.props.theme)
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

function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}
