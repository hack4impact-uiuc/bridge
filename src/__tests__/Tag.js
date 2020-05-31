import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Tag } from '..';
import theme, { colors } from '../theme';
import { COMMON } from '../utils/constants';
import { renderJSON } from '../utils/testing';
import 'babel-polyfill'; // axe violations required babel-polyfill

expect.extend(toHaveNoViolations);

describe('Tag', () => {
  it('renders a <div>', () => {
    expect(renderJSON(<Tag />).type).toEqual('div');
  });

  it('should have no axe violations', async () => {
    const { container } = render(<Tag>Blue</Tag>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('implements system props', () => {
    expect(Tag).toImplementSystemProps(COMMON);
  });

  it('renders children', () => {
    const tagText = 'Blue';
    render(<Tag>{tagText}</Tag>);
    expect(screen.getByText(tagText)).toBeInTheDocument();
  });

  it('respects "height" props', () => {
    const { container } = render(<Tag height={200} />);
    expect(container.firstChild).toHaveStyle('height: 200px;');
  });

  it('renders typography using tags styles', () => {
    const { container } = render(<Tag>Blue</Tag>);
    expect(container.firstChild).toHaveStyle(`font-family: ${theme.typography.tags.fontFamily}`);
    expect(container.firstChild).toHaveStyle(`font-weight: ${theme.typography.tags.fontWeight}px`);
    expect(container.firstChild).toHaveStyle(`font-size: ${theme.typography.tags.fontSize}`);
    expect(container.firstChild).toHaveStyle(`letter-spacing: ${theme.typography.tags.letterSpacing}`);
    expect(container.firstChild).toHaveStyle(`line-height: ${theme.typography.tags.lineHeight}`);
  });

  it('renders blue primary color as default', () => {
    const { container } = render(<Tag>Blue</Tag>);
    expect(container.firstChild).toHaveStyle(`background: ${colors.bluePalette.primary}`);
    expect(container.firstChild).toHaveStyle(`color: ${colors.white}`);
  });

  it('renders dark text for light yellow tag', () => {
    const { container } = render(<Tag variant="light" color="yellow">Light Yellow</Tag>);
    expect(container.firstChild).toHaveStyle(`background: ${colors.yellowPalette.light}`);
    expect(container.firstChild).toHaveStyle(`color: ${colors.yellowPalette.text}`);
  });

  it('renders dark text for light green tag', () => {
    const { container } = render(<Tag variant="light" color="green">Light Green</Tag>);
    expect(container.firstChild).toHaveStyle(`background: ${colors.greenPalette.light}`);
    expect(container.firstChild).toHaveStyle(`color: ${colors.greenPalette.text}`);
  });
});

// Colors should match colors in default theme (design system styles)
describe('Tag Colors', () => {
  it('renders red primary', () => {
    expect(renderJSON(<Tag color="red" variant="primary">Tag</Tag>)).toMatchSnapshot();
  });
  it('renders yellow primary', () => {
    expect(renderJSON(<Tag color="yellow" variant="primary">Tag</Tag>)).toMatchSnapshot();
  });
  it('renders green primary', () => {
    expect(renderJSON(<Tag color="green" variant="primary">Tag</Tag>)).toMatchSnapshot();
  });
  it('renders blue primary', () => {
    expect(renderJSON(<Tag color="blue" variant="primary">Tag</Tag>)).toMatchSnapshot();
  });
  it('renders indigo primary', () => {
    expect(renderJSON(<Tag color="indigo" variant="primary">Tag</Tag>)).toMatchSnapshot();
  });
  it('renders grey primary', () => {
    expect(renderJSON(<Tag color="grey" variant="primary">Tag</Tag>)).toMatchSnapshot();
  });
  it('renders red light', () => {
    expect(renderJSON(<Tag color="red" variant="light">Tag</Tag>)).toMatchSnapshot();
  });
  it('renders yellow light', () => {
    expect(renderJSON(<Tag color="yellow" variant="light">Tag</Tag>)).toMatchSnapshot();
  });
  it('renders green light', () => {
    expect(renderJSON(<Tag color="green" variant="light">Tag</Tag>)).toMatchSnapshot();
  });
  it('renders blue light', () => {
    expect(renderJSON(<Tag color="blue" variant="light">Tag</Tag>)).toMatchSnapshot();
  });
  it('renders indigo light', () => {
    expect(renderJSON(<Tag color="indigo" variant="light">Tag</Tag>)).toMatchSnapshot();
  });
  it('renders grey light', () => {
    expect(renderJSON(<Tag color="grey" variant="light">Tag</Tag>)).toMatchSnapshot();
  });
  it('renders red dark', () => {
    expect(renderJSON(<Tag color="red" variant="dark">Tag</Tag>)).toMatchSnapshot();
  });
  it('renders yellow dark', () => {
    expect(renderJSON(<Tag color="yellow" variant="dark">Tag</Tag>)).toMatchSnapshot();
  });
  it('renders green dark', () => {
    expect(renderJSON(<Tag color="green" variant="dark">Tag</Tag>)).toMatchSnapshot();
  });
  it('renders blue dark', () => {
    expect(renderJSON(<Tag color="blue" variant="dark">Tag</Tag>)).toMatchSnapshot();
  });
  it('renders indigo dark', () => {
    expect(renderJSON(<Tag color="indigo" variant="dark">Tag</Tag>)).toMatchSnapshot();
  });
  it('renders grey dark', () => {
    expect(renderJSON(<Tag color="grey" variant="dark">Tag</Tag>)).toMatchSnapshot();
  });
});
