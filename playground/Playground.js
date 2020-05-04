// NOTE: Please do not commit any of the code you write here
import React from 'react';
import { colors } from '../src/theme';

import { Button, Link, Text } from '../src';
// import any components here

export function Playground() {
  return (
    <>
      <div style={{ backgroundColor: colors.indigoBlue[3] }}>
        {/* Add the code you want to test here */}
        <Button variant="white" href="https://google.com">APPLY</Button>
      </div>
      <div>
        {/* Add the code you want to test here */}
        <Button variant="success" href="https://google.com">APPLY</Button>
        <Link variant="success" href="https://google.com">New link</Link>
        <Text variant="success" as="p">Hello</Text>
      </div>
    </>
  );
}
