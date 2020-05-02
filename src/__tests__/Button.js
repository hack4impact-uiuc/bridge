import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';

import { Button } from '..';
import theme, { colors } from '../theme';
import { renderJSON } from '../utils/testing';

const noop = () => {};


describe('Button', () => {
  it('renders a <button>', () => {
    expect(renderJSON(<Button />).type).toEqual('button');
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
    expect(container.firstChild).toHaveStyle(`color: ${theme.button.primary.fontColor.default}`);
    expect(container.firstChild).toHaveStyle(`background: ${theme.button.default(colors.hackBluePalette).bg.default}`);
  });

  it('renders correct border/bg/color with "outline" prop (primary colors)', () => {
    const { container } = render(<Button outline>APPLY</Button>);
    expect(container.firstChild).toHaveStyle(`color: ${theme.button.default(colors.hackBluePalette).outline.fontColor.default}`);
    expect(container.firstChild).toHaveStyle(`background: ${theme.button.default(colors.hackBluePalette).outline.bg.default}`);
    expect(container.firstChild).toHaveStyle(`border: 2px solid ${theme.button.default(colors.hackBluePalette).outline.border.default}`);
  });

  it('renders correct colors with "outline" and "disabled" props (primary colors)', () => {
    const { container } = render(<Button disabled outline>APPLY</Button>);
    expect(container.firstChild).toHaveStyle(`color: ${theme.button.default(colors.hackBluePalette).outline.fontColor.disabled}`);
    expect(container.firstChild).toHaveStyle(`background: ${theme.button.default(colors.hackBluePalette).outline.bg.disabled}`);
    expect(container.firstChild).toHaveStyle(`border: 2px solid ${theme.button.default(colors.hackBluePalette).outline.border.disabled}`);

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
