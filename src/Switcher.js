import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

class Switcher extends Component {
  static propTypes = {
    direction: PropTypes.oneOf(['row', 'column']),
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    defaultSelected: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    onChange: PropTypes.func,
    renderOption: PropTypes.func,
  }

  static defaultProps = {
    direction: 'row',
    defaultSelected: -1,
    onChange: () => {},
  }

  state = {
    selected: this._getDefaultSelection(this.props.defaultSelected),
  }

  _getDefaultSelection(defaultSelected) {
    if (
      Number.isInteger(defaultSelected) &&
        defaultSelected >= 0 &&
        defaultSelected < this.props.children.length
    ) {
      return defaultSelected
    } else if (typeof defaultSelected === 'string') {
      // NOTE: findIndex returns -1 if value isn't found
      return this.props.children.findIndex(
        child => child.props.value === defaultSelected
      )
    }
  }

  _handleChange(index, value) {
    this.setState({ selected: index })
    this.props.onChange(value)
  }

  render() {
    const { direction, style, children, renderOption, theme } = this.props

    return (
      <View style={[style, { flexDirection: direction }]}>
        {children.map((child, index) => {
          const addedProps = {
            theme,
            onChange: this._handleChange.bind(this, index),
            key: index,
            direction,
          }

          if (index === 0) {
            addedProps.first = true
          } else if (index === children.length - 1) {
            addedProps.last = true
          }

          if (this.state.selected === index) {
            addedProps.selected = true
          }

          // NOTE: renderOption is used for rendering custom switcher childs. It has to be function returning react elements.
          // renderOption is called with these props { selected, value, text, onChange, first, last }
          // See example use in implementation of RadioGroup.
          if (renderOption && !('renderOption' in child.props)) {
            addedProps.renderOption = renderOption
          }

          const cloned = React.cloneElement(child, addedProps)
          return cloned
        })}
      </View>
    )
  }
}

export default Switcher
