// NOTE: Please do not commit any of the code you write here
import React from 'react';
import { colors } from '../src/theme';

import { Button, Link } from '../src';
// import any components here

export function Playground() {
  return (
    <>
      <div style={{ backgroundColor: colors.indigoBlue[3] }}>
        {/* Add the code you want to test here */}
        <Link variant="white" href="https://google.com">APPLY</Link>
      </div>
      <div>
        {/* Add the code you want to test here */}
        <Link color="#065535" href="https://google.com">APPLY</Link>
      </div>
    </>
  );
}
