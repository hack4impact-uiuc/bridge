import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Button } from '..';
import theme, { colors } from '../theme';
import { COLOR, COMMON } from '../utils/constants';
import { renderJSON } from '../utils/testing';
import 'babel-polyfill'; // axe violations required babel-polyfill

expect.extend(toHaveNoViolations);
const noop = () => {};


describe('Button', () => {
  it('renders a <button>', () => {
    expect(renderJSON(<Button />).type).toEqual('button');
  });

  it('should have no axe violations', async () => {
    const { container } = render(<Button>APPLY</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('implements system props', () => {
    expect(Button).toImplementSystemProps(COLOR);
    expect(Button).toImplementSystemProps(COMMON);
  });

  it('renders children', () => {
    const buttonText = 'APPLY';
    render(<Button>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it('preserves "onClick" prop', () => {
    expect(renderJSON(<Button onClick={noop} />).props.onClick).toEqual(noop);
  });

  it('respects "width" props', () => {
    const { container } = render(<Button width={200} />);
    expect(container.firstChild).toHaveStyle('width: 200px;');
  });

  it('respects the "disabled" prop', () => {
    const item = renderJSON(<Button disabled />);
    expect(item.props.disabled).toEqual(true);
    expect(item).toMatchSnapshot();
  });

  it('respects "outline" prop', () => {
    const item = renderJSON(<Button outline />);
    expect(item).toMatchSnapshot();
  });

  it('renders primary color as default', () => {
    const { container } = render(<Button>APPLY</Button>);
    expect(container.firstChild).toHaveStyle(`color: ${theme.buttons.primary.fontColor.default}`);
    expect(container.firstChild).toHaveStyle(`background: ${theme.buttons.default(colors.bluePalette).bg.default}`);
  });

  it('renders medium size as default', () => {
    const { container } = render(<Button>APPLY</Button>);
    expect(container.firstChild).toHaveStyle(`font-size: ${theme.typography.button.fontSize}`);
    expect(container.firstChild).toHaveStyle(`line-height: ${theme.typography.button.lineHeight}`);
  });

  it('renders correct border/bg/color with "outline" prop (primary colors)', () => {
    const { container } = render(<Button outline>APPLY</Button>);
    expect(container.firstChild).toHaveStyle(`color: ${theme.buttons.default(colors.bluePalette).outline.fontColor.default}`);
    expect(container.firstChild).toHaveStyle(`background: ${theme.buttons.default(colors.bluePalette).outline.bg.default}`);
    expect(container.firstChild).toHaveStyle(`border: 2px solid ${theme.buttons.default(colors.bluePalette).outline.border.default}`);
  });

  it('renders correct colors with "outline" and "disabled" props (primary colors)', () => {
    const { container } = render(<Button disabled outline>APPLY</Button>);
    expect(container.firstChild).toHaveStyle(`color: ${theme.buttons.default(colors.bluePalette).outline.fontColor.disabled}`);
    expect(container.firstChild).toHaveStyle(`background: ${theme.buttons.default(colors.bluePalette).outline.bg.disabled}`);
    expect(container.firstChild).toHaveStyle(`border: 2px solid ${theme.buttons.default(colors.bluePalette).outline.border.disabled}`);

    const item = renderJSON(<Button disabled outline />);
    expect(item).toMatchSnapshot();
  });
});

// Colors should match colors in default theme (design system styles)
describe('Button Colors', () => {
  it('renders primary colors', () => {
    const item = renderJSON(<Button variant="primary" />);
    expect(item).toMatchSnapshot();
  });

  it('renders secondary colors', () => {
    const item = renderJSON(<Button variant="secondary" />);
    expect(item).toMatchSnapshot();
  });

  it('renders success colors', () => {
    const item = renderJSON(<Button variant="success" />);
    expect(item).toMatchSnapshot();
  });

  it('renders error colors', () => {
    const item = renderJSON(<Button variant="error" />);
    expect(item).toMatchSnapshot();
  });

  it('renders warning colors', () => {
    const item = renderJSON(<Button variant="warning" />);
    expect(item).toMatchSnapshot();
  });
});

describe('Button Sizes', () => {
  it('renders a small button', () => {
    const item = renderJSON(<Button size="small" />);
    expect(item).toMatchSnapshot();
  });
  it('renders a medium button', () => {
    const item = renderJSON(<Button size="medium" />);
    expect(item).toMatchSnapshot();
  });
  it('renders a large button', () => {
    const item = renderJSON(<Button size="large" />);
    expect(item).toMatchSnapshot();
  });
});
