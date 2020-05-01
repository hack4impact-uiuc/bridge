import React from 'react';
import { Button, theme, get, getOrDefault, lodashGet} from '@hack4impact-uiuc/h4i-design'
import '@hack4impact-uiuc/h4i-design/bundle.css'
import PropTypes from 'prop-types';
import styled from 'styled-components';



function App() {
  return (
    <div className="App">
      <h1>Software For Nonprofits</h1>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Button disabled outline color="white">APPLY</Button>
    </div>
  );
}


export default App;
