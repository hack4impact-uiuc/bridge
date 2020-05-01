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
Components use 

Components are styled using Primer's theme by default, but you can provide your own theme by using styled-component's <ThemeProvider>. If you'd like to fully replace the Primer theme with your custom theme, pass your theme to the <ThemeProvider> in the root of your application like so:



## Local Development

To install dependencies:
```
yarn
```

TODO: Using storybook

Check out our [Contributing Guidelines]('./CONTRIBUTING.md') for code style, testing, component dev, etc

## 

