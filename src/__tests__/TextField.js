import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

import { TextField, Icon } from '..';
import { colors } from '../theme';
import { COLOR, COMMON } from '../utils/constants';
import { renderJSON } from '../utils/testing';
import 'babel-polyfill'; // axe violations required babel-polyfill

expect.extend(toHaveNoViolations);

describe('TextField', () => {
  it('renders a <div>', () => {
    expect(renderJSON(<TextField />).type).toEqual('div');
  });

  it('should have no axe violations', async () => {
    const { container } = render(<TextField aria-label="test" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('implements system props', () => {
    expect(TextField).toImplementSystemProps(COLOR);
    expect(TextField).toImplementSystemProps(COMMON);
  });

  it('respects "width" props', () => {
    const { container } = render(<TextField width={200} />);
    expect(container.firstChild).toHaveStyle('width: 200px;');
  });

  it('respects the "disabled" prop', () => {
    const item = renderJSON(<TextField disabled />);
    expect(item.props.disabled).toEqual(true);
    expect(item).toMatchSnapshot();
  });

  it('respects "error" prop', () => {
    const item = renderJSON(<TextField error="error" />);
    expect(item).toMatchSnapshot();
  });

  it('renders correct colors with "disabled" props', () => {
    const { container } = render(<TextField disabled />);
    expect(container.firstChild).toHaveStyle(
      `color: ${colors.greyPalette.light}`,
    );
    expect(container.firstChild).toHaveStyle(
      `background-color: ${colors.greyPalette.lighter}`,
    );
    expect(container.firstChild).toHaveStyle(
      `border: 1px solid ${colors.greyPalette.light}`,
    );

    const item = renderJSON(<TextField disabled />);
    expect(item).toMatchSnapshot();
  });

  it('renders correct icon', () => {
    const item = renderJSON(<TextField icon={<Icon type="errorAlert" />} />);
    expect(item).toMatchSnapshot();
  });

  it('renders textarea using "as" prop', () => {
    const item = expect(renderJSON(<TextField as="textarea" />));
    expect(item).toMatchSnapshot();
  });
});
