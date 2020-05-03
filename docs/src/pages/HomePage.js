import React from 'react'
import {Link} from 'react-router-dom'

// Home Page linking to
// 1) component documentation
// 2) design system documentation
const HomePage = () => (
  <div>
    <h1 className="h1">Hack4Impact Design system</h1>
    <Link to="/components">Components</Link>
    <Link to="/design">Design Principles</Link>
  </div>
)

export default HomePage