import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Alert } from '..';
import theme, { colors } from '../theme';
import { COMMON, COLOR } from '../utils/constants';
import { renderJSON } from '../utils/testing';
import 'babel-polyfill'; // axe violations required babel-polyfill

expect.extend(toHaveNoViolations);

describe('Alert', () => {
  it('renders a <div>', () => {
    expect(renderJSON(<Alert />).type).toEqual('div');
  });

  it('should have no axe violations', async () => {
    const { container } = render(<Alert>Alert!</Alert>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('implements system props', () => {
    expect(Alert).toImplementSystemProps(COMMON);
    expect(Alert).toImplementSystemProps(COLOR);
  });

  it('renders children', () => {
    const alertText = 'Alert';
    render(<Alert>{alertText}</Alert>);
    expect(screen.getByText(alertText)).toBeInTheDocument();
  });

  it('respects "height" props', () => {
    const { container } = render(<Alert height={400} />);
    expect(container.firstChild).toHaveStyle('height: 400px;');
  });

  it('renders typography using alert styles', () => {
    const { container } = render(<Alert>Blue</Alert>);
    expect(container.firstChild).toHaveStyle(`font-family: ${theme.typography.alert.fontFamily}`);
    expect(container.firstChild).toHaveStyle(`font-weight: ${theme.typography.alert.fontWeight}px`);
    expect(container.firstChild).toHaveStyle(`font-size: ${theme.typography.alert.fontSize}`);
    expect(container.firstChild).toHaveStyle(`letter-spacing: ${theme.typography.alert.letterSpacing}`);
    expect(container.firstChild).toHaveStyle(`line-height: ${theme.typography.alert.lineHeight}`);
  });

  it('renders success variant as default', () => {
    const { container } = render(<Alert>Success</Alert>);
    expect(container.firstChild).toHaveStyle(`background: ${colors.greenPalette.light}`);
    expect(container.firstChild).toHaveStyle(`color: ${colors.greenPalette.text}`);
  });

  describe('Alert Variants', () => {
    it('renders success', () => {
      expect(renderJSON(<Alert variant="success">Alert!</Alert>)).toMatchSnapshot();
    });
    it('renders warning', () => {
      expect(renderJSON(<Alert variant="warning">Alert!</Alert>)).toMatchSnapshot();
    });
    it('renders error', () => {
      expect(renderJSON(<Alert variant="error">Alert!</Alert>)).toMatchSnapshot();
    });
    it('renders information', () => {
      expect(renderJSON(<Alert variant="information">Alert!</Alert>)).toMatchSnapshot();
    });
  });
});
