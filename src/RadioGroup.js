import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import Switcher from './Switcher'
import Radio from './Radio'
import B from './typography/B'


const CustomOption = (
  { selected, value, text, onChange, first, last, style, textStyle, theme } // eslint-disable-line
) => {
  return (
    <TouchableOpacity
      onPressOut={() => onChange(value)}
      activeOpacity={0.8}
    >
      <View style={[theme.base, style]}>
        <Radio
          onChange={onChange}
          value={value}
          selected={selected}
        />
        <B style={[theme.baseText, textStyle]}>{text}</B>
      </View>
    </TouchableOpacity>
  )
}

const RadioGroup = (props) => {
  const {
    onChange,
    defaultSelected,
    options,
    values,
    style,
    theme,
    textStyle,
    direction,
  } = props

  return (
    <Switcher
      onChange={onChange}
      defaultSelected={defaultSelected}
      renderOption={CustomOption}
      direction={direction}
    >
      {options.map((text, index) => {
        const value = values ? values[index] : text
        return (
          <CustomOption
            value={value}
            text={text}
            style={style}
            theme={theme}
            textStyle={textStyle}
            key={value}
          />
        )
      })}
    </Switcher>
  )
}

RadioGroup.defaultStyle = (theme) => {
  return {
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 20,
    },
    baseText: {
      marginLeft: 10,
    },
  }
}

RadioGroup.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  values: PropTypes.array,
  defaultSelected: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  theme: PropTypes.object,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  direction: PropTypes.string,
}

RadioGroup.defaultProps = {
  direction: 'row',
}

export default RadioGroup
