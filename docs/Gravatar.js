import React from 'react'
import { View } from 'react-native'

import Gravatar from '../src/Gravatar'
import H4 from '../src/typography/H4'

// WEBPACK (GravatarExample)
const GravatarExample = () => {
  const gravatarStyle = {
    margin: 15,
  }
  return (
    <View>
      <H4>Example:</H4>
      <Gravatar email='blah@blah.com' style={gravatarStyle} />
      <Gravatar
        email='blahblah@blah.com'
        size={150}
        rating='pg'
        default='retro'
        style={gravatarStyle}
      />
      <Gravatar
        md5='313cbdb52db5b6bb6b3f14bc4ddae461'
        size={100}
        circle
        style={gravatarStyle}
      />
    </View>
  )
}
// WEBPACK

const description = `
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`circle\` | \`boolean\` | \`false\` | Determines whether an image should be circle |
| \`email\` | \`string\` | \`null\` | Email associated with a Gravatar account |
| \`md5\` | \`string\` | \`null\` | If you want to avoid exposing an email, you can provide md5 of it |
| \`size\` | \`number\` | \`50\` | Determines a size of an image |
| \`rating\` | \`string\` | \`"g"\` | Determines a rating of an image. Default "g" is suitable for all websites |
| \`default\` | \`string\` | \`"retro"\` | Backup image when gravatar doesn't exist |
| \`protocol\` | \`string\` | \`"https://"\` | Use https or http |
| \`style\` | \`object, array\` | \`void\` | Style of the Gravatar compoment |
`

GravatarExample.styleguide = {
  ...GravatarExample.styleguide,
  title: 'Gravatar',
  description,
}

export default GravatarExample
