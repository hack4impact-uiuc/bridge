import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Button, Card } from '..';
import theme from '../theme';
import { COMMON, TYPOGRAPHY } from '../utils/constants';
import { renderJSON } from '../utils/testing';
import 'babel-polyfill'; // axe violations required babel-polyfill

const {
  Image, Content, Overline, Title, Subtitle, Body, Footer,
} = Card;

expect.extend(toHaveNoViolations);

const overline = 'Optional Overline';
const title = 'Card Title';
const subtitle = 'Optional Subtitle';
const body = 'Body';
const buttonText = 'Apply';
const exampleCard = (
  <Card>
    <Image src="https://uiuc.hack4impact.org/static/images/colored-logo.png" alt="h4i" />
    <Content>
      <Overline>{overline}</Overline>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Body>
        {body}
      </Body>
      <Footer>
        <Button>{buttonText}</Button>
      </Footer>
    </Content>
  </Card>
);

describe('Card', () => {
  it('renders a <div>', () => {
    const json = renderJSON(<Card />);
    expect(json.type).toEqual('div');
    expect(json).toMatchSnapshot();
  });

  it('should have no axe violations', async () => {
    const { container } = render(exampleCard);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    cleanup();
  });

  it('implements system props', () => {
    expect(Card).toImplementSystemProps(COMMON);
    expect(Content).toImplementSystemProps(COMMON);
    expect(Overline).toImplementSystemProps(TYPOGRAPHY);
    expect(Overline).toImplementSystemProps(COMMON);
    expect(Title).toImplementSystemProps(TYPOGRAPHY);
    expect(Title).toImplementSystemProps(COMMON);
    expect(Subtitle).toImplementSystemProps(TYPOGRAPHY);
    expect(Subtitle).toImplementSystemProps(COMMON);
    expect(Body).toImplementSystemProps(TYPOGRAPHY);
    expect(Body).toImplementSystemProps(COMMON);
    expect(Footer).toImplementSystemProps(COMMON);
  });

  it('renders children', () => {
    render(exampleCard);
    expect(screen.getByText(overline)).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
    expect(screen.getByText(body)).toBeInTheDocument();
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it('respects "width" props', () => {
    const { container } = render(<Card width={200} />);
    expect(container.firstChild).toHaveStyle('width: 200px;');
  });

  it('renders overline typography using overline styles', () => {
    const { container } = render(<Overline>content</Overline>);
    expect(container.firstChild).toHaveStyle(`font-family: ${theme.typography.overline.fontFamily}`);
    expect(container.firstChild).toHaveStyle(`font-weight: ${theme.typography.overline.fontWeight}px`);
    expect(container.firstChild).toHaveStyle(`font-size: ${theme.typography.overline.fontSize}`);
    expect(container.firstChild).toHaveStyle(`letter-spacing: ${theme.typography.overline.letterSpacing}`);
    expect(container.firstChild).toHaveStyle(`line-height: ${theme.typography.overline.lineHeight}`);
  });

  it('renders title typography using h3 styles', () => {
    const { container } = render(<Title>content</Title>);
    expect(container.firstChild).toHaveStyle(`font-family: ${theme.typography.h3.fontFamily}`);
    expect(container.firstChild).toHaveStyle(`font-weight: ${theme.typography.h3.fontWeight}px`);
    expect(container.firstChild).toHaveStyle(`font-size: ${theme.typography.h3.fontSize}`);
    expect(container.firstChild).toHaveStyle(`letter-spacing: ${theme.typography.h3.letterSpacing}`);
    expect(container.firstChild).toHaveStyle(`line-height: ${theme.typography.h3.lineHeight}`);
  });

  it('renders subtitle typography using subtitle styles', () => {
    const { container } = render(<Subtitle>content</Subtitle>);
    expect(container.firstChild).toHaveStyle(`font-family: ${theme.typography.subtitle.fontFamily}`);
    expect(container.firstChild).toHaveStyle(`font-weight: ${theme.typography.subtitle.fontWeight}px`);
    expect(container.firstChild).toHaveStyle(`font-size: ${theme.typography.subtitle.fontSize}`);
    expect(container.firstChild).toHaveStyle(`letter-spacing: ${theme.typography.subtitle.letterSpacing}`);
    expect(container.firstChild).toHaveStyle(`line-height: ${theme.typography.subtitle.lineHeight}`);
  });

  it('renders body typography using body styles', () => {
    const { container } = render(<Body>content</Body>);
    expect(container.firstChild).toHaveStyle(`font-family: ${theme.typography.body.fontFamily}`);
    expect(container.firstChild).toHaveStyle(`font-weight: ${theme.typography.body.fontWeight}px`);
    expect(container.firstChild).toHaveStyle(`font-size: ${theme.typography.body.fontSize}`);
    expect(container.firstChild).toHaveStyle(`letter-spacing: ${theme.typography.body.letterSpacing}`);
    expect(container.firstChild).toHaveStyle(`line-height: ${theme.typography.body.lineHeight}`);
  });

  it('renders entire card properly', () => {
    expect(renderJSON(exampleCard)).toMatchSnapshot();
  });
});
