// taken from https://github.com/primer/components/blob/master/src/__tests__/Grid.js#L7
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Grid } from '..';
import { GRID } from '../utils/constants';
import { renderJSON } from '../utils/testing';
import 'babel-polyfill'; // axe violations required babel-polyfill

expect.extend(toHaveNoViolations);

describe('Grid', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<Grid />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('implements system props', () => {
    expect(Grid).toImplementSystemProps(GRID);
  });

  it('gets display: grid by default', () => {
    expect(renderJSON(<Grid />)).toHaveStyleRule('display', 'grid');
  });

  it('respects gridGap', () => {
    expect(renderJSON(<Grid gridGap={1} />)).toMatchSnapshot();
  });

  it('respects gridColumnGap', () => {
    expect(renderJSON(<Grid gridColumnGap={2} />)).toMatchSnapshot();
  });

  it('respects gridRowGap', () => {
    expect(renderJSON(<Grid gridRowGap={2} />)).toMatchSnapshot();
  });

  it('respects gridColumn', () => {
    expect(renderJSON(<Grid gridColumn="1 / 2" />)).toMatchSnapshot();
  });

  it('respects gridRow', () => {
    expect(renderJSON(<Grid gridRow="1 / 2" />)).toMatchSnapshot();
  });

  it('respects gridArea', () => {
    expect(renderJSON(<Grid gridArea="sidebar" />)).toMatchSnapshot();
  });

  it('respects gridAutoFlow', () => {
    expect(renderJSON(<Grid gridAutoFlow="row" />)).toMatchSnapshot();
  });

  it('respects gridAutoRows', () => {
    expect(renderJSON(<Grid gridAutoRows="1fr" />)).toMatchSnapshot();
  });

  it('respects gridAutoColumns', () => {
    expect(renderJSON(<Grid gridAutoColumns="1fr" />)).toMatchSnapshot();
  });

  it('respects gridTemplateColumns', () => {
    expect(renderJSON(<Grid gridTemplateColumns="200px 1fr" />)).toMatchSnapshot();
  });

  it('respects gridTemplateRows', () => {
    expect(renderJSON(<Grid gridTemplateRows=" 200px 1fr" />)).toMatchSnapshot();
  });

  it('respects gridTemplateAreas', () => {
    expect(renderJSON(<Grid gridTemplateAreas="sidebar  main" />)).toMatchSnapshot();
  });

  it('respects responsive display', () => {
    expect(renderJSON(<Grid display={['grid', 'inline-grid']} />)).toMatchSnapshot();
  });

  it('respects the "as" prop', () => {
    expect(renderJSON(<Grid as="span" />).type).toEqual('span');
  });

  it('renders a div by default', () => {
    expect(renderJSON(<Grid />).type).toEqual('div');
  });
});
