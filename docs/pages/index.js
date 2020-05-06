import React from 'react';
import Link from 'next/link';

// Home Page linking to
// 1) component documentation
// 2) design system documentation
const HomePage = () => (
  <div>
    <h1 className="h1">Hack4Impact Design system</h1>
    <Link href="/components">Components</Link>
    <br />
    <Link href="/design">Design Principles</Link>
  </div>
);

export default HomePage;
