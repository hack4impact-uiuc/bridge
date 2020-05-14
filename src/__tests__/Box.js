// taken from https://github.com/primer/components/blob/master/src/__tests__/Box.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Box } from '..';
import { COMMON, LAYOUT, FLEX } from '../utils/constants';
import theme from '../theme';
import { renderJSON } from '../utils/testing';
import 'babel-polyfill'; // axe violations required babel-polyfill

expect.extend(toHaveNoViolations);

describe('Box', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<Box />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('implements system props', () => {
    expect(Box).toImplementSystemProps(LAYOUT);
    expect(Box).toImplementSystemProps(COMMON);
    expect(Box).toImplementSystemProps(FLEX);
  });

  it('respects the "as" prop', () => {
    expect(renderJSON(<Box as="span" />).type).toEqual('span');
  });

  it('renders without any props', () => {
    expect(renderJSON(<Box />)).toMatchSnapshot();
  });

  it('renders margin', () => {
    expect(renderJSON(<Box m={1} theme={theme} />)).toMatchSnapshot();
    expect(renderJSON(<Box m={[0, 1, 2, 3]} theme={theme} />)).toMatchSnapshot();
    expect(renderJSON(<Box m={[1, 1, 1, 3]} theme={theme} />)).toMatchSnapshot();
  });

  it('renders padding', () => {
    expect(renderJSON(<Box p={1} theme={theme} />)).toMatchSnapshot();
    expect(renderJSON(<Box p={[0, 1, 2, 3]} theme={theme} />)).toMatchSnapshot();
    expect(renderJSON(<Box p={[1, 1, 1, 3]} theme={theme} />)).toMatchSnapshot();
  });

  it('respects display', () => {
    expect(renderJSON(<Box display="inline" />)).toMatchSnapshot();
    expect(renderJSON(<Box display="inline-block" />)).toMatchSnapshot();
    expect(renderJSON(<Box display="none" />)).toMatchSnapshot();
    expect(renderJSON(<Box display={['none', 'none', 'block']} theme={theme} />)).toMatchSnapshot();
  });

  // properties for children
  // taken from https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  it('respects flex', () => {
    expect(render(<Box flex="4 4" />)).toMatchSnapshot();
  });

  it('respects flexGrow', () => {
    expect(render(<Box flexGrow="4" />)).toMatchSnapshot();
  });

  it('respects flexShrink', () => {
    expect(render(<Box flexShrink="4" />)).toMatchSnapshot();
  });

  it('respects flexBasis', () => {
    expect(render(<Box flexBasis="5rem" />)).toMatchSnapshot();
  });

  it('respects alignSelf', () => {
    expect(render(<Box alignSelf="flex-start" />)).toMatchSnapshot();
  });

  it('respects order', () => {
    expect(render(<Box order="5" />)).toMatchSnapshot();
  });
});
