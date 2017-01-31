# CONTRIBUTING

## Setup

```sh
$ git clone YOUR_NACHOS_UI_REPO_URL
$ cd nachos-ui
$ yarn install
$ yarn run start:web
```

## Building components

All components are located inside the `src` folder.

```sh
$ yarn run build
```

Before making a pull request run:

```sh
$ yarn run fmt
```

It uses Prettier and ESLint internally to unify the codebase style.


## Edit documentation

Documentation for each component is located in `docs` folder.
To see documentation locally run:

```sh
$ yarn run docs
$ yarn run docs:run
```

Then open your browser and visit `http://127.0.0.1:8080` to see the documentation.


## Testing

```sh
$ yarn run test
```

Watch files for changes and rerun tests.

```sh
$ yarn run test:watch
```


## Pull Requests

We actively welcome your pull requests.

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.

## License

By contributing to Nachos UI, you agree that your contributions will be licensed
under its [MIT license](https://github.com/avocode/nachos-ui/blob/master/LICENSE).
