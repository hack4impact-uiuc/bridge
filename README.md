<p align="center" style="padding-top: 24px;">
    <a href="https://h4i-design.now.sh" rel="noopener" target="_blank"><img width="500" src="./docs/public/bridge_full_logo.png" alt="Bridge Logo"></a></p>
</p>

<h4 align="center"><a href="https://uiuc.hack4impact.org/" target="_blank">Hack4Impact UIUC</a> Design System + React Component Library</h4>

## Installation
```
npm install @hack4impact-uiuc/bridge
```
or
```
yarn add @hack4impact-uiuc/bridge
```

## Usage

Import the CSS directly into your project (`src/index.js`) if your asset packager supports it:
```javascript
import '@hack4impact-uiuc/bridge/dist/styles.css'
```

Import required h4i-design components within `src/App.js` file or your custom component files:
```javascript
import { Button } from '@hack4impact-uiuc/bridge';
```

Now you are ready to use the imported components, such as:
```javascript
import React from 'react';
import { Button } from '@hack4impact-uiuc/bridge';

const App = () => (
    <Button onClick={() => alert('Button clicked!')}>APPLY NOW</Button>
)
export default App
```

### Theming
Components use Hack4Impact's Design theme by default (`src/theme.js`) but you can provide your own theme using styled-component's [<ThemeProvider>](https://styled-components.com/docs/advanced). You can either fully replace the theme or replace parts of the theme by placing your custom theme through a prop to our components or through `<ThemeProvider>` in the root of the application.

### Server-side Rendering

This library depends on [styled-components](https://styled-components.com/). Thus, if you are server rendering React or using a framework like next.js or gatsby, follow styled-component's [server rendering setup](https://styled-components.com/docs/advanced#server-side-rendering).

## Local Development
We use Storybook to hot-reload and test our components during development. You can edit the [`playground/Playground.js`](playground/Playground.js) file to import and test the components you are working on. Please do not commit any work on the file so other developers can use the same file to test.

To run:
```
yarn
yarn storybook
```

Check out our [Contributing Guidelines](CONTRIBUTING.md) for code style, testing, component dev, etc

## Design Library
For design work, use the [Figma component library](https://www.figma.com/file/S4SnLb6KD7OWe5G0UPboBN/Bridge-Hack4Impact-UIUC-Design-System-Library?node-id=359%3A280) which includes all text styles, components, complete color palette, and proper box shadows as implemented in the React library. Any changes to the master components are reflected through all instances of that component throughout your designs. 

To use the library, make a copy into your workspace and create a new page for your designs. All components are accessible through the "Assets" tab as you design on any page. 

Refer to the [Bridge website](https://bridge-ui.now.sh/) for complete design guidelines.

## Authors
- Timothy Ko ([@tko22](https://github.com/tko22))
- Jackie Osborn ([@jackieo5023](https://github.com/jackieo5023))
- David Wang ([@davidenwang](https://github.com/davidenwang))
- Chloe Chan ([Product Designer](https://chloechan.me/))

## License
[MIT](https://opensource.org/licenses/MIT)
Copyright (c) 2020-present, Timothy Ko