import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Icon } from '..';
import { COMMON } from '../utils/constants';
import { renderJSON } from '../utils/testing';
import 'babel-polyfill'; // axe violations required babel-polyfill

expect.extend(toHaveNoViolations);

describe('Icon', () => {
  it('renders a <svg>', () => {
    expect(renderJSON(<Icon />).type).toEqual('svg');
  });

  it('should have no axe violations', async () => {
    const { container } = render(<Icon />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('default to 20px width', () => {
    const { container } = render(<Icon />);
    expect(container.firstChild).toHaveStyle('width: 20px;');
  });

  it('implements system props', () => {
    expect(Icon).toImplementSystemProps(COMMON);
  });

  it('respects "height" props', () => {
    const { container } = render(<Icon height={200} />);
    expect(container.firstChild).toHaveStyle('height: 200px;');
  });

  it('respects "width" props', () => {
    const { container } = render(<Icon width={200} />);
    expect(container.firstChild).toHaveStyle('width: 200px;');
  });

  it('respects "fill" props', () => {
    const { container } = render(<Icon fill="#155DA1" />);
    expect(container.firstChild).toHaveStyle('fill: #155DA1');
  });
});

// Icons match
describe('Icons types match', () => {
  it('renders errorAlert', () => {
    expect(renderJSON(<Icon type="errorAlert" />)).toMatchSnapshot();
  });
  it('renders infoAlert', () => {
    expect(renderJSON(<Icon type="infoAlert" />)).toMatchSnapshot();
  });
  it('renders successAlert', () => {
    expect(renderJSON(<Icon type="successAlert" />)).toMatchSnapshot();
  });

  it('renders warningAlert', () => {
    expect(renderJSON(<Icon type="warningAlert" />)).toMatchSnapshot();
  });

  it('renders fileDragDrop', () => {
    expect(renderJSON(<Icon type="fileDragDrop" />)).toMatchSnapshot();
  });

  it('renders formErrorAlert', () => {
    expect(renderJSON(<Icon type="formErrorAlert" />)).toMatchSnapshot();
  });

  it('renders opacityUploadFile', () => {
    expect(renderJSON(<Icon type="opacityUploadFile" />)).toMatchSnapshot();
  });

  it('renders uploadFile', () => {
    expect(renderJSON(<Icon type="uploadFile" />)).toMatchSnapshot();
  });
});
