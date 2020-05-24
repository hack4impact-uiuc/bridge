import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Radio } from '..';
import theme, { colors } from '../theme';
import { COMMON, FLEX, BORDER } from '../utils/constants';
import { renderJSON } from '../utils/testing';
import 'babel-polyfill'; // axe violations required babel-polyfill

expect.extend(toHaveNoViolations);

describe('Radio', () => {
  it('renders a <label>', () => {
    expect(renderJSON(<Radio />).type).toEqual('label');
  });

  it('should have no axe violations', async () => {
    const { container } = render(
      <Radio id="option" value="option">
        option
      </Radio>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('implements system props', () => {
    expect(Radio).toImplementSystemProps(COMMON);
  });

  it('renders children', () => {
    const radioText = 'option';
    render(<Radio>{radioText}</Radio>);
    expect(screen.getByText(radioText)).toBeInTheDocument();
  });

  it('respects "width" props', () => {
    const { container } = render(<Radio width={200} />);
    expect(container.firstChild).toHaveStyle('width: 200px;');
  });

  it('respects the "disabled" prop', () => {
    const item = renderJSON(<Radio disabled>radio</Radio>);
    expect(item.props.disabled).toEqual(true);
    expect(item).toMatchSnapshot();
  });

  it('respects "error" prop', () => {
    const item = renderJSON(<Radio error="error">radio</Radio>);
    expect(item).toMatchSnapshot();
  });
});

describe('Radio Group', () => {
  it('implements system props - same as Box', () => {
    // same as box
    expect(Radio.Group).toImplementSystemProps(COMMON);
    expect(Radio.Group).toImplementSystemProps(FLEX);
    expect(Radio.Group).toImplementSystemProps(BORDER);
  });

  it('renders correctly with 28px left margin per child besides first child', () => {
    expect(
      renderJSON(
        <Radio.Group>
          <Radio id="1">option 1</Radio>
          <Radio id="2">option 2</Radio>
          <Radio id="3">option 3</Radio>
        </Radio.Group>,
      ),
    ).toMatchSnapshot();
  });

  it('passes down "disabled" prop to children', () => {
    const group = renderJSON(
      <Radio.Group disabled>
        <Radio id="1">option 1</Radio>
        <Radio id="2">option 2</Radio>
        <Radio id="3">option 3</Radio>
      </Radio.Group>,
    );
    group.children.map((child) => expect(child.props.disabled).toBeTruthy());
  });
});
