import React from 'react';
import { Link } from '@hack4impact-uiuc/bridge';
import DesignDocsList from '../../lib/data/designs';

// Pages explaining design system
// name prop is from route `/design/{name}`
// examples of types of names: color, spacing, etc
const DesignPage = () => (
  <div>
    <p>
      Design
      {
        DesignDocsList.map((elm) => (
          <li><Link href={elm.href}>{elm.title}</Link></li>
        ))
      }
    </p>
  </div>
);

export default DesignPage;
