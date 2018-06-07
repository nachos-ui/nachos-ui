// NOTE: a slightly modified version of https://github.com/KyleAMathews/react-gravatar

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, PixelRatio } from 'react-native'
import md5 from 'md5'
import querystring from 'query-string'

class Gravatar extends Component {
  static displayName = 'Gravatar'

  static propTypes = {
    circle: PropTypes.bool,
    email: PropTypes.string,
    md5: PropTypes.string,
    size: PropTypes.number,
    rating: PropTypes.string,
    default: PropTypes.string,
    protocol: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  }

  static defaultProps = {
    circle: false,
    email: null,
    md5: null,
    size: 50,
    rating: 'g',
    default: 'retro',
    protocol: 'https://',
  }

  render() {
    const base = `${this.props.protocol}www.gravatar.com/avatar/`
    const query = querystring.stringify({
      s: this.props.size * PixelRatio.get(),
      r: this.props.rating,
      d: this.props.default,
    })

    // NOTE: Gravatar service currently trims and lowercases all registered emails
    const formattedEmail = `${this.props.email}`.trim().toLowerCase()

    let hash
    if (this.props.md5) {
      hash = this.props.md5
    } else if (typeof this.props.email === 'string') {
      hash = md5(formattedEmail)
    } else {
      console.warn(
        'Gravatar image can not be fetched. Either the "email" or "md5" prop must be specified.'
      )
      return
    }

    const src = `${base}${hash}?${query}`

    // NOTE: Clone this.props and then delete Component specific props so we can
    // spread the rest
    const { ...rest } = this.props
    delete rest.md5
    delete rest.email
    delete rest.protocol
    delete rest.rating
    delete rest.size
    delete rest.style
    delete rest.className
    delete rest.default
    delete rest.circle

    return (
      <Image
        style={[
          { width: this.props.size, height: this.props.size },
          this.props.circle
            ? { borderRadius: this.props.size / 2 }
            : {},
          this.props.style,
        ]}
        source={{ uri: src }}
        {...rest}
      />
    )
  }
}

export default Gravatar
