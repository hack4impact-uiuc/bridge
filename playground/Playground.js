// NOTE: Please do not commit any of the code you write here
import React from 'react';
import { colors } from '../src/theme';

import {
  Button, Card, Heading, Link, Text, Icon, TextField, Table,
} from '../src';

const {
  Image, Content, Overline, Title, Subtitle, Body, Footer,
} = Card;
// import any components here

export function Playground() {
  const {
    Head, Body, Row, Cell,
  } = Table;

  return (
    <>
      <div>
        {/* Add the code you want to test here */}
        <Table type="zebra">
          <Head>
            <Row>
              <Cell>First Name</Cell>
              <Cell>Last Name</Cell>
              <Cell>Favorite Color</Cell>
              <Cell>Favorite Number</Cell>
            </Row>
          </Head>
          <Body>
            <Row fontSize="18px">
              <Cell fontSize="12px">Chloe</Cell>
              <Cell fontSize="12px">Chan</Cell>
              <Cell>Pink</Cell>
              <Cell>3</Cell>
            </Row>
            <Row>
              <Cell>Ashley</Cell>
              <Cell>Chan</Cell>
              <Cell>Blue</Cell>
              <Cell>7</Cell>
            </Row>
            <Row>
              <Cell>Nicole</Cell>
              <Cell>Nguyen</Cell>
              <Cell>Red</Cell>
              <Cell>10</Cell>
            </Row>
          </Body>
        </Table>
      </div>
    </>
  );
}
