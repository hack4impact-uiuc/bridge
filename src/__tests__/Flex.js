// taken from https://github.com/primer/components/blob/master/src/__tests__/Flex.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Flex } from '..';
import { FLEX } from '../utils/constants';
import { renderJSON } from '../utils/testing';
import 'babel-polyfill'; // axe violations required babel-polyfill

expect.extend(toHaveNoViolations);

describe('Flex', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<Flex />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('implements system props', () => {
    expect(Flex).toImplementSystemProps(FLEX);
  });

  it('gets display: flex by default', () => {
    expect(renderJSON(<Flex />)).toHaveStyleRule('display', 'flex');
  });

  it('respects flexWrap', () => {
    expect(renderJSON(<Flex flexWrap="nowrap" />)).toMatchSnapshot();
  });

  it('respects flexDirection', () => {
    expect(renderJSON(<Flex flexDirection="row" />)).toMatchSnapshot();
  });
  it('respects justifyContent', () => {
    expect(renderJSON(<Flex justifyContent="start" />)).toMatchSnapshot();
  });

  it('respects alignItems', () => {
    expect(renderJSON(<Flex alignItems="start" />)).toMatchSnapshot();
  });

  it('respects alignContent', () => {
    expect(renderJSON(<Flex alignContent="start" />)).toMatchSnapshot();
  });

  it('respects display', () => {
    expect(renderJSON(<Flex display="inline-flex" />)).toHaveStyleRule('display', 'inline-flex');
  });

  it('respects responsive display', () => {
    expect(renderJSON(<Flex display={['flex', 'inline-flex']} />)).toMatchSnapshot();
  });

  it('respects the "as" prop', () => {
    expect(renderJSON(<Flex as="span" />).type).toEqual('span');
  });

  it('renders a div by default', () => {
    expect(renderJSON(<Flex />).type).toEqual('div');
  });
});
