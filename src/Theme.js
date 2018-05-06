import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = React.createContext({
  theme: {},
  updateStyle: () => {},
})

export class Provider extends React.Component {
  state = {}
  getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(nextProps.theme) !== JSON.stringify(prevState)) {
      return this.createTheme(nextProps.theme)
    }
  }
  
  defaultStyles = {};

  updateDefaultStyle = (name, defaultStyle) => {
    this.defaultStyle[name] = defaultStyle
  }

  createTheme = (themeObj) => {
    return Object.keys(this.state).reduce((theme, componentName) => {
      return this.defaultStyles[componentName](themeObj)
    }, {})
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.props.theme || this.state,
          updateStyle: this.updateStyle,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export function withTheme(componentName, ThemedComponent) {
  ThemeContext._currentValue.updateStyle(componentName, ThemedComponent.defaultStyle)

  return class extends React.Component {
    render() {
      const props = this.props
      delete props.theme

      return (
        <ThemeContext.Consumer>
          {(theme) => <ThemedComponent theme={theme} {...props} />}
        </ThemeContext.Consumer>
      )
    }
  }
}
