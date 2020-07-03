import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Dropdown } from '..';
import { COMMON, TYPOGRAPHY } from '../utils/constants';
import { renderJSON } from '../utils/testing';
import 'babel-polyfill';
// axe violations required babel-polyfill
expect.extend(toHaveNoViolations);

describe('Dropdown', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<Dropdown title="open" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('implements system props', () => {
    expect(Dropdown).toImplementSystemProps(COMMON);
    expect(Dropdown).toImplementSystemProps(TYPOGRAPHY);
  });

  it('renders correctly', () => {
    const item = renderJSON(
      <Dropdown>
        <Dropdown.Summary>Choose a color</Dropdown.Summary>
        <Dropdown.Menu>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>,
    );
    expect(item).toMatchSnapshot();
  });

  it('renders children', () => {
    const dropdownText = 'option';
    render(<Dropdown>{dropdownText}</Dropdown>);
    expect(screen.getByText(dropdownText)).toBeInTheDocument();
  });

  it('respects "width" props', () => {
    const { container } = render(<Dropdown width={200} />);
    expect(container.firstChild).toHaveStyle('width: 200px;');
  });

  it('respects "error" prop', () => {
    const item = renderJSON(<Dropdown error="error" />);
    expect(item).toMatchSnapshot();

    const item2 = renderJSON(<Dropdown error="success" />);
    expect(item2).toMatchSnapshot();

    const item3 = renderJSON(<Dropdown error="warning" />);
    expect(item3).toMatchSnapshot();
  });
});

describe('Dropdown.Item', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<ul><Dropdown.Item /></ul>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('renders children', () => {
    const dropdownText = 'option';
    render(<Dropdown.Item>{dropdownText}</Dropdown.Item>);
    expect(screen.getByText(dropdownText)).toBeInTheDocument();
  });

  it('implements system props', () => {
    expect(Dropdown.Item).toImplementSystemProps(COMMON);
    expect(Dropdown.Item).toImplementSystemProps(TYPOGRAPHY);
  });
});

describe('Dropdown.Summary', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<Dropdown.Summary />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('renders children', () => {
    const dropdownText = 'option';
    render(<Dropdown.Summary>{dropdownText}</Dropdown.Summary>);
    expect(screen.getByText(dropdownText)).toBeInTheDocument();
  });

  it('implements system props', () => {
    expect(Dropdown.Summary).toImplementSystemProps(COMMON);
    expect(Dropdown.Summary).toImplementSystemProps(TYPOGRAPHY);
  });
});

describe('Dropdown.Caret', () => {
  it('should have no axe violations', async () => {
    const { container } = render(<Dropdown.Caret />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('implements system props', () => {
    expect(Dropdown.Caret).toImplementSystemProps(COMMON);
  });
});

describe('Dropdown.Menu', () => {
  it('should have no axe violations', async () => {
    const { container } = render(
      <Dropdown.Menu>
        <li key="a">1</li>
        <li key="b">2</li>
        <li key="c">3</li>
      </Dropdown.Menu>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('renders children', () => {
    const dropdownText = 'option';
    render(
      <Dropdown.Menu>
        {dropdownText}
      </Dropdown.Menu>,
    );
    expect(screen.getByText(dropdownText)).toBeInTheDocument();
  });

  it('implements system props', () => {
    expect(Dropdown.Menu).toImplementSystemProps(COMMON);
    expect(Dropdown.Menu).toImplementSystemProps(TYPOGRAPHY);
  });
});
