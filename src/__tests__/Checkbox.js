import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Checkbox } from '..';
import { COMMON, FLEX, BORDER } from '../utils/constants';
import { renderJSON } from '../utils/testing';
import 'babel-polyfill'; // axe violations required babel-polyfill

expect.extend(toHaveNoViolations);

describe('Checkbox', () => {
  it('renders a <label>', () => {
    expect(renderJSON(<Checkbox />).type).toEqual('label');
  });

  it('should have no axe violations', async () => {
    const { container } = render(
      <Checkbox id="option" value="option">
        option
      </Checkbox>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('implements system props', () => {
    expect(Checkbox).toImplementSystemProps(COMMON);
  });

  it('renders children', () => {
    const CheckboxText = 'option';
    render(<Checkbox>{CheckboxText}</Checkbox>);
    expect(screen.getByText(CheckboxText)).toBeInTheDocument();
  });

  it('respects "width" props', () => {
    const { container } = render(<Checkbox width={200} />);
    expect(container.firstChild).toHaveStyle('width: 200px;');
  });

  it('respects the "disabled" prop', () => {
    const item = renderJSON(<Checkbox disabled>Checkbox</Checkbox>);
    expect(item.props.disabled).toEqual(true);
    expect(item).toMatchSnapshot();
  });

  it('respects "error" prop', () => {
    const item = renderJSON(<Checkbox error="error">Checkbox</Checkbox>);
    expect(item).toMatchSnapshot();
  });
});

describe('Checkbox Group', () => {
  it('implements system props - same as Box', () => {
    // same as box
    expect(Checkbox.Group).toImplementSystemProps(COMMON);
    expect(Checkbox.Group).toImplementSystemProps(FLEX);
    expect(Checkbox.Group).toImplementSystemProps(BORDER);
  });

  it('renders correctly with 28px left margin per child besides first child', () => {
    expect(
      renderJSON(
        <Checkbox.Group>
          <Checkbox id="1">option 1</Checkbox>
          <Checkbox id="2">option 2</Checkbox>
          <Checkbox id="3">option 3</Checkbox>
        </Checkbox.Group>,
      ),
    ).toMatchSnapshot();
  });

  it('passes down "disabled" prop to children', () => {
    const group = renderJSON(
      <Checkbox.Group disabled>
        <Checkbox id="1">option 1</Checkbox>
        <Checkbox id="2">option 2</Checkbox>
        <Checkbox id="3">option 3</Checkbox>
      </Checkbox.Group>,
    );
    group.children.map((child) => expect(child.props.disabled).toBeTruthy());
  });
});
