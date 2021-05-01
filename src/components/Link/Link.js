import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { get, lodashGet } from '../../utils/utils';
import { COMMON, TYPOGRAPHY } from '../../utils/constants';

const buttonStyles = (propTheme) => ({
  ...propTheme.typography.button,
  display: 'inline-block',
  padding: '0',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  userSelect: 'none',
  backgroundColor: 'transparent',
  border: '0',
  appearance: 'none',
});

const LinkBase = styled.a`
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  letter-spacing: inherit;

  color: ${(props) => props.color};
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};

  // states
  &:hover {
    text-decoration: underline;
    color: ${(props) => props.hoverColor};
  }

  &:active {
    text-decoration: underline;
    color: ${(props) => props.hoverColor};
  }
  
  ${(props) => (props.as === 'button' ? buttonStyles(props.theme) : '')};
  
  ${COMMON}
  ${TYPOGRAPHY}
  `;

const Link = ({
  color, hoverColor, variant, theme: propTheme, ...props
}) => {
  let linkColor = color || propTheme.colors.variants.primary.primary;
  let linkHoverColor = hoverColor || propTheme.colors.variants.primary.dark;

  // if variant, change color
  // but don't override color,hoverColor props, if given
  if (variant) {
    const linkTheme = propTheme.link[variant];
    const defaultLinkTheme = propTheme.link.default(propTheme.colors.variants[variant] || get('colors.variants.primary'));
    if (!color) {
      linkColor = lodashGet(linkTheme, 'color.default', defaultLinkTheme.color.default);
    }
    if (!hoverColor) {
      linkHoverColor = lodashGet(linkTheme, 'color.hover', defaultLinkTheme.color.hover);
    }
  }

  return (
    <LinkBase
      color={linkColor}
      hoverColor={linkHoverColor}
      theme={propTheme}
      {...props}
    />
  );
};

Link.defaultProps = {
  theme,
};

Link.propTypes = {
  as: PropTypes.elementType,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'white']),
  href: PropTypes.string,
  theme: PropTypes.object,
  underline: PropTypes.bool,
  onClick: PropTypes.func,
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
};

export default Link;
