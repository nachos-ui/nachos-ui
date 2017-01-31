ThemeManager can be used to globally change the appearance of UI elements.
Here is how you can do it within Nachos UI.

#### Load default theme of any supported component

```js
import { themeManager } from 'nachos-ui'

const buttonTheme = themeManager.getStyle('Button')
```

This gets you default theme of Button component.
It looks like this:

```js
const buttonTheme = {
  BUTTON_FONT_COLOR: '#fff',
  BUTTON_ROUNDED_RADIUS: 25,
  BUTTON_ROUNDED_HEIGHT: 50,
  BUTTON_ROUNDED_FONT_SIZE: 12,
  BUTTON_SQUARED_HEIGHT: 50,
  BUTTON_SQUARED_FONT_SIZE: 12,
  BUTTON_STATE_SUCCESS: '#94de45',
  BUTTON_STATE_DANGER: '#ff9c00',
  BUTTON_STATE_PRIMARY: '#2f8cff',
  BUTTON_ICON_SIZE: 25,
  BUTTON_ICON_COLOR: '#fff',
  BUTTON_ACTIVE_ICON_COLOR: 'rgba(0, 0, 0, 0.5)',
}
```

As you can see, it's just a plain object full of constant values.

#### Let's change the Button appearance globally

To change the Button appearance just simple extend the object with new values.

```js
import { themeManager } from 'nachos-ui'

const buttonTheme = themeManager.getStyle('Button')

const newButtonTheme = {
  ...buttonTheme,
  BUTTON_ROUNDED_RADIUS: 10,
  BUTTON_ROUNDED_HEIGHT: 30,
}

themeManager.setSource('Button', () => (newButtonTheme))
```

And that's all. You change the radius and height of the Button globally.

