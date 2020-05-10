/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Heading } from '..';
import theme from '../theme';
import { COMMON, TYPOGRAPHY } from '../utils/constants';
import { renderJSON } from '../utils/testing';
import 'babel-polyfill'; // axe violations required babel-polyfill

expect.extend(toHaveNoViolations);

describe('Heading', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<Heading>Title</Heading>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('implements system props', () => {
    expect(Heading).toImplementSystemProps(TYPOGRAPHY);
    expect(Heading).toImplementSystemProps(COMMON);
  });

  it('renders a <h2> by default', () => {
    expect(renderJSON(<Heading />).type).toEqual('h2');
  });

  it('respects fontWeight', () => {
    const { container } = render(<Heading fontWeight="bold" />);
    expect(container.firstChild).toHaveStyle(`font-weight: ${theme.fontWeights.bold}px`);

    const { container: c } = render(<Heading fontWeight="regular" />);
    expect(c.firstChild).toHaveStyle(`font-weight: ${theme.fontWeights.regular}px`);
  });

  it('respects the "fontStyle" prop', () => {
    const { container } = render(<Heading fontStyle="italic" />);
    expect(container.firstChild).toHaveStyle('font-style: italic');

    const { container: c } = render(<Heading fontStyle="normal" />);
    expect(c.firstChild).toHaveStyle('font-style: normal');
  });

  it('respects lineHeight', () => {
    const { container } = render(<Heading lineHeight="80px" />);
    expect(container.firstChild).toHaveStyle('line-height: 80px}');
  });

  it('respects fontFamily="main"', () => {
    // styled-components removes the whitespace between font-family values
    const sec = theme.fonts.main.replace(/, /g, ',');
    const { container } = render(<Heading fontFamily="main" />);
    expect(container.firstChild).toHaveStyle(`font-family: ${sec}`);
  });

  it('respects other values for fontSize', () => {
    const { container } = render(<Heading fontSize="2em" />);
    expect(container.firstChild).toHaveStyle('font-size: 2em');

    const { container: c } = render(<Heading fontSize="100px" />);
    expect(c.firstChild).toHaveStyle('font-size: 100px');
  });
});

describe('Heading types', () => {
  it('defaults to type="h2"', () => {
    expect(renderJSON(<Heading>Hello</Heading>)).toMatchSnapshot();
    const { container } = render(<Heading>Hello</Heading>);
    expect(container.firstChild).toHaveStyle(`font-family: ${theme.typography.h2.fontFamily}`);
    expect(container.firstChild).toHaveStyle(`font-weight: ${theme.typography.h2.fontWeight}px`);
    expect(container.firstChild).toHaveStyle(`font-size: ${theme.typography.h2.fontSize}`);
    expect(container.firstChild).toHaveStyle(`letter-spacing: ${theme.typography.h2.letterSpacing}`);
    expect(container.firstChild).toHaveStyle(`line-height: ${theme.typography.h2.lineHeight}`);
  });

  it('renders "h1" properly', () => {
    expect(renderJSON(<Heading type="h1">Hello</Heading>)).toMatchSnapshot();
  });

  it('renders "h3" properly', () => {
    expect(renderJSON(<Heading type="h3">Hello</Heading>)).toMatchSnapshot();
  });

  it('renders "h4" properly', () => {
    expect(renderJSON(<Heading type="h4">Hello</Heading>)).toMatchSnapshot();
  });
});
