![Nachos UI](https://cldup.com/xHYkAezOnI.jpg)

![Travis](https://api.travis-ci.org/avocode/nachos-ui.svg?branch=master)

## Intro

Nachos UI is a React Native component library. 


### Features:

- Over 30 UI components
- Customizable UI components
- Works on **Web** thanks to [React Native for Web](https://github.com/necolas/react-native-web)
- Jest [Snapshot Testing](http://facebook.github.io/jest/docs/snapshot-testing.html)
- Uses [Prettier](https://github.com/jlongster/prettier) an opinionated JavaScript formatter.
- Uses [Yarn](https://yarnpkg.com/)


## Getting started


```
$ npm install --save nachos-ui  
```

OR

```
$ yarn add nachos-ui
```

```
import React from 'react'
import { View } from 'react-native'
import { Button } from 'nachos-ui'

const App = () => {
  return (
  	<View>
    	<Button>Button</Button>
    </View>
  )
}
```


## Documentation


Visit the documentation at https://avocode.com/nachos-ui/docs/ with technical information about each component.


## Contributing

**Contributions are always welcome!** Before contributing, please read our [Code Of Conduct](https://github.com/avocode/nachos-ui/blob/master/CODE_OF_CONDUCT.md).

Read [Contributing](https://github.com/avocode/nachos-ui/blob/master/CONTRIBUTING.md).


## Developers

To play with Nachos UI locally first clone the repository:

```
$ git clone git@github.com:avocode/nachos-ui.git
```

Ideally use Yarn to install your dependencies. It's fast and consistent:

```
$ yarn install
```

To run the iOS simulator run:

```
$ yarn run start
```

To run the Web version:

```
$ yarn run start:web
```


## License

Nachos UI is open source and released under the [MIT License](https://github.com/avocode/nachos-ui/blob/master/LICENSE).

## Thanks!

- [Vacuumlabs](https://vacuumlabs.com/)
- [Polgár András](https://github.com/azazdeaz)
