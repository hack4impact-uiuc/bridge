import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import DesignPage from './pages/DesignPage'
import ComponentsPage from './pages/ComponentsPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>

         <Route path="/components">
            <ComponentsPage />
          </Route>
          <Route path="/components/:name">
            <ComponentsPage />
          </Route>

          <Route path="/design">
            <DesignPage />
          </Route>
          <Route path="/design/:name">
            <DesignPage />
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}


export default App;
