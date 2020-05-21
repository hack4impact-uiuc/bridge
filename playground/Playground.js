// NOTE: Please do not commit any of the code you write here
import React from 'react';
import { colors } from '../src/theme';

import {
  Button, Card, Heading, Link, Text, Table
} from '../src';

const {
  Head, Body, Row, Cell
} = Table;
// import any components here

export function Playground() {
  return (
    <>
      <div>
        {/* Add the code you want to test here */}
        <Table>
          <Head>
            <Row>
              <Cell>First Name</Cell>
              <Cell>Last Name</Cell>
              <Cell>Favorite Color</Cell>
              <Cell>Favorite Number</Cell>
            </Row>
          </Head>
          <Body>
            <Row>
              <Cell>Chloe</Cell>
              <Cell>Chan</Cell>
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
        Bodyless:
        <Table>
          <Head>
            <Row>
              <Cell>First Name</Cell>
              <Cell>Last Name</Cell>
              <Cell>Favorite Color</Cell>
              <Cell>Favorite Number</Cell>
            </Row>
          </Head>
        </Table>
        Headless:
        <Table>
          <Body>
            <Row>
              <Cell>Chloe</Cell>
              <Cell>Chan</Cell>
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
        <hr />
        <Table type="borderless">
          <Head>
            <Row>
              <Cell>First Name</Cell>
              <Cell>Last Name</Cell>
              <Cell>Favorite Color</Cell>
              <Cell>Favorite Number</Cell>
            </Row>
          </Head>
          <Body>
            <Row>
              <Cell>Chloe</Cell>
              <Cell>Chan</Cell>
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
        Bodyless:
        <Table type="borderless">
          <Head>
            <Row>
              <Cell>First Name</Cell>
              <Cell>Last Name</Cell>
              <Cell>Favorite Color</Cell>
              <Cell>Favorite Number</Cell>
            </Row>
          </Head>
        </Table>
        Headless:
        <Table type="borderless">
          <Body>
            <Row>
              <Cell>Chloe</Cell>
              <Cell>Chan</Cell>
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
        <hr />
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
            <Row>
              <Cell>Chloe</Cell>
              <Cell>Chan</Cell>
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
        
        Bodyless:
        <Table type="zebra">
          <Head>
            <Row>
              <Cell>First Name</Cell>
              <Cell>Last Name</Cell>
              <Cell>Favorite Color</Cell>
              <Cell>Favorite Number</Cell>
            </Row>
          </Head>
        </Table>
        Headless:
        <Table type="zebra">
          <Body>
            <Row>
              <Cell>Chloe</Cell>
              <Cell>Chan</Cell>
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

        <Button variant="white" href="https://google.com">APPLY</Button>
      </div>
    </>
  );
}
