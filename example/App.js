import React from 'react'
import { View, ScrollView } from 'react-native'
import H2 from '../src/typography/H2'

const components = require('../docs')

const theme = {
  container: { paddingVertical: 30 },
  section: { marginBottom: 40 },
  componentContainer: { paddingHorizontal: 15, paddingTop: 30 },
  headline: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  h2: { paddingHorizontal: 10 },
}

const Showcase = () => {
  const content = Object.keys(components).map((value, index) => {
    const component = components[value]
    return (
      <View style={theme.section} key={value}>
        <View style={theme.headline}>
          <H2 style={theme.h2}>{value}</H2>
        </View>
        <View style={theme.componentContainer}>
          {React.createElement(component)}
        </View>
      </View>
    )
  })

  return (
    <ScrollView contentContainerStyle={theme.container}>
      {content}
    </ScrollView>
  )
}

export default Showcase
