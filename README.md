# Hack4Impact Design System

React Component Library for the Hack4Impact Design System

## Installation
```
npm install @hack4impact-uiuc/design
```
or
```
yarn add @hack4impact-uiuc/design
```

## Usage

Import the CSS directly into your project (`src/index.js`) if your asset packager supports it:
```javascript
import '@hack4impact-uiuc/design/styles.css'
```

Import required h4i-design components within `src/App.js` file or your custom component files:
```javascript
import { Button } from '@hack4impact-uiuc/design';
```

Now you are ready to use the imported components, such as:
```javascript
import React from 'react';
import { Button } from '@hack4impact-uiuc/design';

const App = () => (
    <Button onClick={() => alert('Button clicked!')}>APPLY NOW</Button>
)
export default App
```

### Theming
Components use Hack4Impact's Design theme by default (`src/theme.js`) but you can provide your own theme using styled-component's [<ThemeProvider>](https://styled-components.com/docs/advanced). You can either fully replace the theme or replace parts of the theme by placing your custom theme through a prop to our components or through `<ThemeProvider>` in the root of the application.


## Local Development

To install dependencies:
```
yarn
```

TODO: Using storybook

Check out our [Contributing Guidelines]('./CONTRIBUTING.md') for code style, testing, component dev, etc

