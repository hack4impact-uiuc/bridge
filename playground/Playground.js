// NOTE: Please do not commit any of the code you write here
import React from 'react';
import { colors } from '../src/theme';

import {
  Button, Card, Heading, Link, Text, Icon, Dropdown, TextField,
} from '../src';

const {
  Image, Content, Overline, Title, Subtitle, Body, Footer,
} = Card;
// import any components here

export function Playground() {
  return (
    <>
      <div>
        {/* Add the code you want to test here */}
        <Dropdown error="success">
          <Dropdown.Summary>Choose a color</Dropdown.Summary>
          <Dropdown.Menu>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <TextField />
      </div>
    </>
  );
}
