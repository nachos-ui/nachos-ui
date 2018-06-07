import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import defaultBranding from "../../branding_defaults";
import isObject from "is-obj";

export const ThemeContext = React.createContext({
  theme: {}
});

export class Provider extends Component {
  themeConfigs = {};
  branding = defaultBranding;

  constructor(props) {
    super(props);
    if (props.branding) {
      this.branding = mergeDeep(this.branding, props.branding);
    }
  }

  updateThemeConfig = (name, themeConfig) => {
    if (this.props.theme && this.props.theme[name])
      themeConfig = mergeDeep(themeConfig, this.props.theme[name]);

    // Turn the themeConfig object into a string, then replace and strings that start with @ with a value from the branding config
    // so `@darkColor` would pull the value of `this.branding.darkColor`
    // We then convert the result back into an object
    themeConfig = JSON.parse(
      JSON.stringify(themeConfig).replace(
        /@([\w_-]+)/gm,
        (match, key) => this.branding[key]
      )
    );

    return (this.themeConfigs[name] = {
      computedStyle: themeConfig.style
        ? StyleSheet.create(themeConfig.style)
        : {},
      props: themeConfig.props
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
  const propTypes = {
    ...ThemedComponent.propTypes
  };
  delete propTypes.theme;

  return class extends React.Component {
    static displayName = componentName;
    static propTypes = {
      ...propTypes
    };
    static defaultProps = {
      ...ThemedComponent.defaultProps
    };
    constructor() {
      super();
      try {
        if (ThemeContext._currentValue.updateThemeConfig) {
          ThemeContext._currentValue.updateThemeConfig(
            componentName,
            ThemedComponent.themeConfig
          );
        }
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
