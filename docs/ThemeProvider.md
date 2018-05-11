The ThemeProvider component should be set at the highest level of your app. If it is not, Nachos UI components will _NOT_ be styled.

```js
import { ThemeProvider } from "nachos-ui";

export default (App = () => (
  <ThemeProvider>
    <RestOfYourApp />
  </ThemeProvider>
));
```

## Changing the Nachos UI Branding

We know, we know... you think Nachos is the most BEAUTFUL UI Kit you have ever seen, and you dont want to change a thing... except use your company color scheme... This is all you need to do!

```js
import { ThemeProvider } from "nachos-ui";

export default (App = () => (
  <ThemeProvider
    branding={{
      textColor: "#000",
      accentColor: "red",
      alternateTextColor: "#fff",
      linkColor: "#7945ef",
      disabledColor: "#f9f9fa",
      disabledDarkColor: "#b1b2c1",
      successLightColor: "#e9f9f0",
      successColor: "#20cd68",
      passiveSuccessLightColor: "#d5dff7",
      passiveSuccessColor: "#2f61d5",
      dangerLightColor: "#ffe2dc",
      dangerColor: "#ff7052",
      primaryLightColor: "#e3d9fc",
      primaryColor: "#7540ee"
    }}
  >
    <RestOfYourApp />
  </ThemeProvider>
));
```

These variables (or any you add, these are just the defaults) will replace anything in the UI (style or default props) where the value is set to a key in the branding object starting with an `@` sign.

For example:

```js
import { ThemeProvider } from "nachos-ui";

export default (App = () => (
  <ThemeProvider
    theme={{
      Button: {
        props: {
          iconColor: "@linkColor"
        },
        style: {
          baseText: "@dangerColor"
        }
      }
    }}
  >
    <RestOfYourApp />
  </ThemeProvider>
));
```

## Changing the Nachos UI Theme

ThemeProvider can be used to globally change the appearance of UI elements.
Here is how you can do it within Nachos UI.

```js
import { ThemeProvider } from "nachos-ui";

export default (App = () => (
  <ThemeProvider
    theme={{
      Button: {
        props: {
          iconColor: "red"
        },
        style: {
          baseText: "green"
        }
      }
    }}
  >
    <RestOfYourApp />
  </ThemeProvider>
));
```

This will result in every button in your app having the `iconColor` prop default to `red`, and change the `baseText` style on that button to be `green`.

In short you can change any default prop, and any style set in Nachos UI via the `theme` prop on `ThemeProvider`.
