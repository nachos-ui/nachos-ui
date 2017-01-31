import React, { PropTypes } from 'react'
import { View, Image } from 'react-native'
import P from './typography/P'
import themeManager from './themeManager'

const defaultTheme = {
  CARD_BORDER_RADIUS: 5,
  CARD_BORDER_COLOR: '#eee',
  CARD_MIN_WIDTH: 70,
  CARD_MIN_HEIGHT: 200,
  CARD_FOOTER_HEIGHT: 40,
  CARD_FOOTER_FONT_SIZE: 14,
}

themeManager.setSource('Card', () => defaultTheme)

const defaultStyle = (theme) => {
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

const Card = (props) => {
  const { width, height } = props

  const theme = props.theme || themeManager.getStyle('Card')
  const baseStyle = defaultStyle(theme)

  let bodyComponent
  if (props.bodyContent) {
    bodyComponent = props.bodyContent
  }

  let imageComponent
  if (props.image) {
    imageComponent = (
      <View style={baseStyle.imageWrapper}>
        <Image
          source={{ uri: props.image }}
          style={[baseStyle.image, props.imageStyle]}
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
        <P style={baseStyle.footerText} numberOfLines={1}>
          {footerContent}
        </P>
      )
    }

    footerComponent = (
      <View style={[baseStyle.footer, props.footerStyle]}>
        {footerContent}
      </View>
    )
  }

  return (
    <View style={[baseStyle.card, { width, height }, props.style]}>
      <View style={baseStyle.body}>
        {imageComponent}
        {bodyComponent}
      </View>
      {footerComponent}
    </View>
  )
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
    React.PropTypes.node,
    React.PropTypes.string,
  ]),
  footerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  theme: PropTypes.object,
}

export default Card
