import React from 'react';
import { Link } from '@hack4impact-uiuc/bridge';
import ComponentDocsList from '../../lib/data/components';

// Component Documention Page
// name is from route `/component/{name}`
const ComponentPage = () => (
  <div>
    <p>
      Components
      { ComponentDocsList.map((elm) => (
        <li><Link href={elm.href}>{elm.title}</Link></li>
      ))}

    </p>
  </div>
);

export default ComponentPage;
