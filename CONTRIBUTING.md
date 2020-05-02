# Contributing
Welcome to our contributing guide!

Our Documentation site is in the folder `./docs`. This component library takes patterns from Github's [@primer/components](https://github.com/primer/components) and Shopify's [@shopify/polaris](https://github.com/Shopify/polaris-react).

## Component Guide

### Tools we use
- [styled-components](https://styled-components.com/) to style components
- [styled-system](https://styled-system.com/) to include default `style` props

### Component Patterns
- use styled components whenever possible
- appropriate `prop-types` should be set with default props set in `Component.defaultProps`
- component styling should be determined by the theme, defaulting to our theme (our styles).

**System and Styling Props**

- components should have access to the appropriate system and styling props (e.g. `width`, `onClick`, `m`)
- every component should have access to `COMMON` (exported in `src/utils/constants.js`)
- for more system props, look at [styled-system API](https://styled-system.com/api)


**Theme**

⚠️ Make sure to always set the default theme prop to our theme (`/src/theme.js`)! This will allow access to the default theme, which refers to the hack4impact design guidelines.

For component specific styling, create a specific key:Object in the theme (ex: `button` in `./src/theme.js`)

If using the color variants/state colors (primary, secondary, success, warning, error, white), use `lodashGet` in [`/src/utils/utils.js`]('./src/utils/utils.js) to fallback to the default color value. We do this in `button` in [`/src/theme.js`]('./src/theme.js).. Here the default values are based on the color palette given - (a function with parameter: colorPalette). You can then override the default specific values for a specific state by explicitly stating it afterwards.

### Code Style
We use eslint for linting with the [Airbnb javascript style](https://github.com/airbnb/javascript). Rule exceptions are in `.eslintrc`

Linting will catch common issues that may exist in your code. You can check the status of your code styling by running yarn lint.


### Testing

We test our components with [Jest](https://jestjs.io/) and [react-test-renderer](https://reactjs.org/docs/test-renderer.html) and [react-testing-library](https://github.com/testing-library/react-testing-library). We use `react-test-render` for snapshot testing and `react-testing-library` with `jest-dom` to test exact styles. See [`src/__tests__/Button.js`]('./src/__tests__/Button.js) for an example.


To run tests:
```
yarn test
```

### Building Package
We use [rollup](https://rollupjs.org/) to bundle up our package. It packages up all the imported css files to `styles.css`, which a user will import. In addition, rollup will include HKGrotesk Font files (`src/static/fonts`)

To build package:
```
yarn build
```
The bundle will be created in `./dist`
