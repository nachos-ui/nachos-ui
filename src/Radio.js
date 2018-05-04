import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from './Checkbox'

const Radio = (props) => {
  return <Checkbox {...props} />
}

Radio.propTypes = {
  checkType: PropTypes.string,
  kind: PropTypes.string,
}

Radio.defaultProps = {
  checkType: 'circle',
  kind: 'circle',
}

export default Radio
