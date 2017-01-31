import { AppRegistry } from 'react-native'
import App from './example/App'
import ionicons from 'react-native-vector-icons/Fonts/Ionicons.ttf'

const reactNativeVectorIconsRequiredStyles = `@font-face { src:url("${ionicons}");font-family: Ionicons; }`

// NOTE: create stylesheet
const style = document.createElement('style')
style.type = 'text/css'
if (style.styleSheet) {
  style.styleSheet.cssText = reactNativeVectorIconsRequiredStyles
} else {
  style.appendChild(document.createTextNode(reactNativeVectorIconsRequiredStyles))
}
// NOTE: inject stylesheet
document.head.appendChild(style)


AppRegistry.registerComponent('nachosui', () => App)
AppRegistry.runApplication('nachosui', {
  rootTag: document.getElementById('react-root'),
})
