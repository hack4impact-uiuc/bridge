/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Link } from '..';
import { COMMON, TYPOGRAPHY } from '../utils/constants';
import { renderJSON } from '../utils/testing';
import 'babel-polyfill'; // axe violations required babel-polyfill

expect.extend(toHaveNoViolations);

describe('Link', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<Link>APPLY</Link>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('implements system props', () => {
    expect(Link).toImplementSystemProps(COMMON);
    expect(Link).toImplementSystemProps(TYPOGRAPHY);
  });

  it('renders children', () => {
    const linkText = 'APPLY';
    render(<Link>{linkText}</Link>);
    expect(screen.getByText(linkText)).toBeInTheDocument();
  });

  it('passes href down to link element', () => {
    expect(renderJSON(<Link href="https://uiuc.hack4impact.org" />)).toMatchSnapshot();
  });

  it('renders without any props', () => {
    expect(renderJSON(<Link />)).toMatchSnapshot();
  });

  it('respects hoverColor prop', () => {
    expect(renderJSON(<Link hoverColor="#065535" />)).toMatchSnapshot();
  });

  it('respects color prop', () => {
    expect(renderJSON(<Link color="#065535" />)).toMatchSnapshot();
    const { container } = render(<Link color="#065535" />);
    expect(container.firstChild).toHaveStyle('color: #065535');
  });

  it('defaults to color prop if color & variant are given', () => {
    expect(renderJSON(<Link color="#065535" variant="primary" />)).toMatchSnapshot();
    const { container } = render(<Link color="#065535" />);
    expect(container.firstChild).toHaveStyle('color: #065535');
  });

  it('defaults to hoverColor prop if hoverColor & variant are given while color stays with variant color', () => {
    expect(renderJSON(<Link hoverColor="#065535" variant="white" />)).toMatchSnapshot();
    const { container } = render(<Link hoverColor="#065535" variant="white" />);
    expect(container.firstChild).toHaveStyle('color: #FFFFFF');
  });

  it('respects the "fontStyle" prop', () => {
    const { container } = render(<Link fontStyle="italic" />);
    expect(container.firstChild).toHaveStyle('font-style: italic');
  });
});
