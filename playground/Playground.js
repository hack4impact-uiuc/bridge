// NOTE: Please do not commit any of the code you write here
import React from 'react';
import { colors } from '../src/theme';

import {
  Button, Card, Heading, Link, Text,
} from '../src';

const {
  Image, Content, Overline, Title, Subtitle, Body, Footer,
} = Card;
// import any components here

export function Playground() {
  return (
    <>
      <div style={{ backgroundColor: colors.indigo[3] }}>
        {/* Add the code you want to test here */}
        <Button variant="white" href="https://google.com">APPLY</Button>
      </div>
    </>
  );
}
