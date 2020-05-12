/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Text } from '..';
import theme from '../theme';
import { COMMON, TYPOGRAPHY } from '../utils/constants';
import { renderJSON } from '../utils/testing';
import 'babel-polyfill'; // axe violations required babel-polyfill

expect.extend(toHaveNoViolations);

describe('Text', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<Text as="p">APPLY</Text>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('implements system props', () => {
    expect(Text).toImplementSystemProps(TYPOGRAPHY);
    expect(Text).toImplementSystemProps(COMMON);
  });

  it('renders a <span> by default', () => {
    expect(renderJSON(<Text />).type).toEqual('span');
  });

  it('respects fontWeight', () => {
    const { container } = render(<Text fontWeight="bold" />);
    expect(container.firstChild).toHaveStyle(`font-weight: ${theme.fontWeights.bold}px`);

    const { container: c } = render(<Text fontWeight="regular" />);
    expect(c.firstChild).toHaveStyle(`font-weight: ${theme.fontWeights.regular}px`);
  });

  it('respects the "fontStyle" prop', () => {
    const { container } = render(<Text fontStyle="italic" />);
    expect(container.firstChild).toHaveStyle('font-style: italic');

    const { container: c } = render(<Text as="i" fontStyle="normal" />);
    expect(c.firstChild).toHaveStyle('font-style: normal');
  });

  it('respects the "as" prop', () => {
    expect(renderJSON(<Text as="p" />).type).toEqual('p');
  });

  it('respects the "as" prop with non-string component types', () => {
    // eslint-disable-next-line react/prop-types
    function TestP({ children }) {
      return <p className="test-link">{children}</p>;
    }

    expect(renderJSON(<Text as={TestP}>Testing...</Text>)).toMatchSnapshot();
  });

  it('respects lineHeight', () => {
    const { container } = render(<Text lineHeight="80px" />);
    expect(container.firstChild).toHaveStyle('line-height: 80px}');
  });

  it('respects fontFamily="secondary"', () => {
    // styled-components removes the whitespace between font-family values
    const sec = theme.fonts.secondary.replace(/, /g, ',');
    const { container } = render(<Text fontFamily="secondary" />);
    expect(container.firstChild).toHaveStyle(`font-family: ${sec}`);
  });

  it('respects other values for fontSize', () => {
    const { container } = render(<Text fontSize="2em" />);
    expect(container.firstChild).toHaveStyle('font-size: 2em');

    const { container: c } = render(<Text fontSize="100px" />);
    expect(c.firstChild).toHaveStyle('font-size: 100px');
  });
});

describe('Text types', () => {
  it('defaults to type="body"', () => {
    expect(renderJSON(<Text>Hello</Text>)).toMatchSnapshot();
    const { container } = render(<Text>Hello</Text>);
    expect(container.firstChild).toHaveStyle(`font-family: ${theme.typography.body.fontFamily}`);
    expect(container.firstChild).toHaveStyle(`font-weight: ${theme.typography.body.fontWeight}px`);
    expect(container.firstChild).toHaveStyle(`font-size: ${theme.typography.body.fontSize}`);
    expect(container.firstChild).toHaveStyle(`letter-spacing: ${theme.typography.body.letterSpacing}`);
    expect(container.firstChild).toHaveStyle(`line-height: ${theme.typography.body.lineHeight}`);
  });

  it('renders "hero" properly', () => {
    expect(renderJSON(<Text type="hero">Hello</Text>)).toMatchSnapshot();
  });

  it('renders "overline" properly', () => {
    expect(renderJSON(<Text type="overline">Hello</Text>)).toMatchSnapshot();
  });

  it('renders "button" properly', () => {
    expect(renderJSON(<Text type="button">Hello</Text>)).toMatchSnapshot();
  });

  it('renders "buttonSmall" properly', () => {
    expect(renderJSON(<Text type="buttonSmall">Hello</Text>)).toMatchSnapshot();
  });

  it('renders "quote" properly', () => {
    expect(renderJSON(<Text type="quote">Hello</Text>)).toMatchSnapshot();
  });

  it('renders "caption" properly', () => {
    expect(renderJSON(<Text type="caption">Hello</Text>)).toMatchSnapshot();
  });

  it('renders "table" properly', () => {
    expect(renderJSON(<Text type="table">Hello</Text>)).toMatchSnapshot();
  });

  it('renders "alert" properly', () => {
    expect(renderJSON(<Text type="alert">Hello</Text>)).toMatchSnapshot();
  });

  it('renders "form" properly', () => {
    expect(renderJSON(<Text type="form">Hello</Text>)).toMatchSnapshot();
  });

  it('renders "subtitle" properly', () => {
    expect(renderJSON(<Text type="subtitle">Hello</Text>)).toMatchSnapshot();
  });
});
