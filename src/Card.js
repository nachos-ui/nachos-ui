import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import P from './typography/P'
import { withTheme } from './Theme'

const defaultTheme = {
  CARD_BORDER_RADIUS: 5,
  CARD_BORDER_COLOR: '#eee',
  CARD_MIN_WIDTH: 70,
  CARD_MIN_HEIGHT: 200,
  CARD_FOOTER_HEIGHT: 40,
  CARD_FOOTER_FONT_SIZE: 14,
}

const Card = (props) => {
  const { width, height, theme } = props

  let bodyComponent
  if (props.bodyContent) {
    bodyComponent = props.bodyContent
  }

  let imageComponent
  if (props.image) {
    imageComponent = (
      <View style={theme.imageWrapper}>
        <Image
          source={{ uri: props.image }}
          style={[theme.image, props.imageStyle]}
        />
      </View>
    )
  }

  let footerComponent
  if (props.footerContent) {
    const isString = typeof props.footerContent === 'string'
    let { footerContent } = props
    if (isString) {
      footerContent = (
        <P style={theme.footerText} numberOfLines={1}>
          {footerContent}
        </P>
      )
    }

    footerComponent = (
      <View style={[theme.footer, props.footerStyle]}>
        {footerContent}
      </View>
    )
  }

  return (
    <View style={[theme.card, { width, height }, props.style]}>
      <View style={theme.body}>
        {imageComponent}
        {bodyComponent}
      </View>
      {footerComponent}
    </View>
  )
}

Card.defaultStyle = (theme = defaultTheme) => {
  return {
    card: {
      borderWidth: 1,
      borderRadius: theme.CARD_BORDER_RADIUS,
      borderColor: theme.CARD_BORDER_COLOR,
      flexDirection: 'column',
      alignItems: 'stretch',
      alignSelf: 'stretch',
      minWidth: theme.CARD_MIN_WIDTH,
      minHeight: theme.CARD_MIN_HEIGHT,
      overflow: 'hidden',
    },
    body: { position: 'relative', alignSelf: 'stretch', flex: 1 },
    imageWrapper: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    image: { flex: 1, resizeMode: 'cover' },
    footer: {
      overflow: 'hidden',
      borderTopWidth: 1,
      borderColor: '#efefef',
      height: theme.CARD_FOOTER_HEIGHT,
      paddingHorizontal: 8,
      alignSelf: 'stretch',
    },
    footerText: {
      fontSize: theme.CARD_FOOTER_FONT_SIZE,
      lineHeight: theme.CARD_FOOTER_HEIGHT,
      paddingTop: 0,
      paddingBottom: 0,
    },
  }
}

Card.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  bodyContent: PropTypes.node,
  image: PropTypes.string,
  imageStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  footerContent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  footerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  theme: PropTypes.object,
}

export default withTheme('Card', Card)
