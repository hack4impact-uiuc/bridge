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

  it('renders primary color as default', () => {
    const { container } = render(<Button>APPLY</Button>);
    expect(container.firstChild).toHaveStyle(`color: ${theme.button.primary.fontColor.default}`);
    expect(container.firstChild).toHaveStyle(`background: ${theme.button.default(colors.hackBluePalette).bg.default}`);
  });

  it('renders children', () => {
    const buttonText = 'APPLY';
    render(<Button>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });
});

// Colors should match colors in default theme (design system styles)
describe('Button Colors', () => {
  it('renders primary colors', () => {
    const item = renderJSON(<Button color="primary" />);
    expect(item).toMatchSnapshot();
  });

  it('renders secondary colors', () => {
    const item = renderJSON(<Button color="secondary" />);
    expect(item).toMatchSnapshot();
  });

  it('renders success colors', () => {
    const item = renderJSON(<Button color="success" />);
    expect(item).toMatchSnapshot();
  });

  it('renders error colors', () => {
    const item = renderJSON(<Button color="error" />);
    expect(item).toMatchSnapshot();
  });

  it('renders warning colors', () => {
    const item = renderJSON(<Button color="warning" />);
    expect(item).toMatchSnapshot();
  });
});
