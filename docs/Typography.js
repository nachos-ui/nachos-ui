import React from 'react'
import { View } from 'react-native'

import H1 from '../src/typography/H1'
import H2 from '../src/typography/H2'
import H3 from '../src/typography/H3'
import H4 from '../src/typography/H4'
import H5 from '../src/typography/H5'
import H6 from '../src/typography/H6'
import Strong from '../src/typography/Strong'
import Em from '../src/typography/Em'
import P from '../src/typography/P'
import I from '../src/typography/I'
import B from '../src/typography/B'
import A from '../src/typography/A'

// WEBPACK (TypographyExample)
const TypographyExample = () => {
  const textStyle = { margin: 15 }
  return (
    <View>
      <H4>Example:</H4>
      <H1 style={textStyle}>Headline 1</H1>
      <H2 style={textStyle}>Headline 2</H2>
      <H3 style={textStyle}>Headline 3</H3>
      <H4 style={textStyle}>Headline 4</H4>
      <H5 style={textStyle}>Headline 5</H5>
      <H6 style={textStyle}>Headline 6</H6>
      <P style={textStyle}>Paragraph of text</P>
      <Strong style={textStyle}>
        Strong tag defines strong emphasized text
      </Strong>
      <B style={textStyle}>B tag specifies bold text</B>
      <Em style={textStyle}>Em tag renders as emphasized text</Em>
      <I style={textStyle}>I tag is usually displayed in italic</I>
      <A style={textStyle} href='http://avocode.com'>
        This is a link
      </A>
    </View>
  )
}
// WEBPACK

const description = `
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`align\` | \`string\` | \`'left'\` | Specifies the horizontal alignment of text |
| \`style\` | \`object, array\` | \`void\` | Specifies a style of the compoment |
| \`theme\` | \`object\` | \`defaultTheme\` | An object describing a style of the component. See more in Theme section. |
`

TypographyExample.styleguide = {
  ...TypographyExample.styleguide,
  title: 'Typography',
  description,
}

export default TypographyExample
