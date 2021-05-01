import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Table } from '..';
import theme, { colors } from '../theme';
import { renderJSON } from '../utils/testing';
import { COLOR, COMMON, TYPOGRAPHY } from '../utils/constants';
import 'babel-polyfill';

const {
  Body, Row, Cell, Head,
} = Table;

expect.extend(toHaveNoViolations);

const headCells = ['First Name', 'Last Name', 'Favorite Color', 'Favorite Number'];
const bodyCells = [
  ['Chloe', 'Chan', 'Pink', '3'],
  ['Eric', 'Lee', 'Blue', '18'],
  ['Nicole', 'Nguyen', 'Red', '10'],
];

const tableHead = (
  <Head>
    <Row>
      <Cell>{headCells[0]}</Cell>
      <Cell>{headCells[1]}</Cell>
      <Cell>{headCells[2]}</Cell>
      <Cell>{headCells[3]}</Cell>
    </Row>
  </Head>
);

const tableBody = (
  <Body>
    <Row>
      <Cell>{bodyCells[0][0]}</Cell>
      <Cell>{bodyCells[0][1]}</Cell>
      <Cell>{bodyCells[0][2]}</Cell>
      <Cell>{bodyCells[0][3]}</Cell>
    </Row>
    <Row>
      <Cell>{bodyCells[1][0]}</Cell>
      <Cell>{bodyCells[1][1]}</Cell>
      <Cell>{bodyCells[1][2]}</Cell>
      <Cell>{bodyCells[1][3]}</Cell>
    </Row>
    <Row>
      <Cell>{bodyCells[2][0]}</Cell>
      <Cell>{bodyCells[2][1]}</Cell>
      <Cell>{bodyCells[2][2]}</Cell>
      <Cell>{bodyCells[2][3]}</Cell>
    </Row>
  </Body>
);

describe('Table', () => {
  it('renders a <table>', () => {
    const json = renderJSON(<Table />);
    expect(json.type).toEqual('table');
    expect(json).toMatchSnapshot();
  });

  it('should have no axe violations', async () => {
    const { container } = render(
      <Table>
        {tableHead}
        {tableBody}
      </Table>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('implements system props', () => {
    expect(Table).toImplementSystemProps(COLOR);
    expect(Table).toImplementSystemProps(COMMON);
    expect(Table).toImplementSystemProps(TYPOGRAPHY);
    expect(Row).toImplementSystemProps(COLOR);
    expect(Row).toImplementSystemProps(COMMON);
    expect(Row).toImplementSystemProps(TYPOGRAPHY);
    expect(Head).toImplementSystemProps(COLOR);
    expect(Head).toImplementSystemProps(COMMON);
    expect(Head).toImplementSystemProps(TYPOGRAPHY);
    expect(Cell).toImplementSystemProps(COLOR);
    expect(Cell).toImplementSystemProps(COMMON);
    expect(Cell).toImplementSystemProps(TYPOGRAPHY);
    expect(Body).toImplementSystemProps(COLOR);
    expect(Body).toImplementSystemProps(COMMON);
    expect(Body).toImplementSystemProps(TYPOGRAPHY);
  });

  // Per HTML spec, table cells are <th> if they're in a head row (<tr>).
  // Otherwise, they are <td>
  it('correctly renders th and td cells depending on their parents', () => {
    const head = renderJSON(tableHead);
    const body = renderJSON(tableBody);

    expect(head.children[0].children[0].type).toEqual('th');
    expect(body.children[0].children[0].type).toEqual('td');
  });

  it('renders children', () => {
    render(
      <Table>
        {tableHead}
        {tableBody}
      </Table>,
    );

    for (let i = 0; i < headCells.length; i += 1) {
      expect(screen.getByText(headCells[i])).toBeInTheDocument();
    }

    for (let i = 0; i < bodyCells.length; i += 1) {
      for (let j = 0; j < bodyCells[i].length; j += 1) {
        expect(screen.getByText(bodyCells[i][j])).toBeInTheDocument();
      }
    }
  });

  it('uses table head typography from theme', () => {
    const { container } = render(
      <Table>
        {tableHead}
      </Table>,
    );

    const head = container.firstChild.firstChild.firstChild.firstChild;
    expect(head).toHaveStyle(`font-weight: ${theme.typography.tableHead.fontWeight}px`);
  });

  it('uses table body typography from theme', () => {
    const { container } = render(
      <Table>
        {tableBody}
      </Table>,
    );

    const bodyCell = container.firstChild.firstChild;
    expect(bodyCell).toHaveStyle(`font-weight: ${theme.typography.table.fontWeight}px`);
    expect(bodyCell).toHaveStyle(`font-size: ${theme.typography.table.fontSize}`);
    expect(bodyCell).toHaveStyle(`line-height: ${theme.typography.table.lineHeight}`);
    expect(bodyCell).toHaveStyle(`letter-spacing: ${theme.typography.table.letterSpacing}`);
    expect(bodyCell).toHaveStyle(`font-family: ${theme.typography.table.fontFamily}`);
  });

  it('correctly renders zebra stripes when told to', () => {
    const { container } = render(
      <Table type="zebra">
        {tableHead}
        {tableBody}
      </Table>,
    );

    expect(container.firstChild).toHaveStyle(`background-color: ${colors.white}`);

    const bodyRows = container.firstChild.children[1].children;
    for (let i = 0; i < bodyRows.length; i += 2) { // Every odd row of the body should be colored
      const bodyRow = bodyRows[i];
      expect(bodyRow).toHaveStyle(`background-color: ${colors.greyPalette.lighter}`);
    }
  });

  it('renders primary full table successfully', () => {
    expect(render(
      <Table type="primary">
        {tableHead}
        {tableBody}
      </Table>,
    )).toMatchSnapshot();
  });

  it('renders primary headless table successfully', () => {
    expect(render(
      <Table type="primary">
        {tableBody}
      </Table>,
    )).toMatchSnapshot();
  });

  it('renders primary bodyless table successfully', () => {
    expect(render(
      <Table type="primary">
        {tableHead}
      </Table>,
    )).toMatchSnapshot();
  });

  it('renders borderless full table successfully', () => {
    expect(render(
      <Table type="borderless">
        {tableHead}
        {tableBody}
      </Table>,
    )).toMatchSnapshot();
  });

  it('renders borderless headless table successfully', () => {
    expect(render(
      <Table type="borderless">
        {tableBody}
      </Table>,
    )).toMatchSnapshot();
  });

  it('renders borderless bodyless table successfully', () => {
    expect(render(
      <Table type="borderless">
        {tableHead}
      </Table>,
    )).toMatchSnapshot();
  });

  it('renders zebra full table successfully', () => {
    expect(render(
      <Table type="zebra">
        {tableHead}
        {tableBody}
      </Table>,
    )).toMatchSnapshot();
  });

  it('renders zebra headless table successfully', () => {
    expect(render(
      <Table type="zebra">
        {tableBody}
      </Table>,
    )).toMatchSnapshot();
  });

  it('renders zebra bodyless table successfully', () => {
    expect(render(
      <Table type="zebra">
        {tableHead}
      </Table>,
    )).toMatchSnapshot();
  });
});
