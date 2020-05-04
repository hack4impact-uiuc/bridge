import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { get, lodashGet } from '../../utils/utils';
import { COMMON, TYPOGRAPHY, COLOR } from '../../utils/constants';

const LinkBase = styled.a`
  font-family: ${get('button.font')};
  font-weight: ${get('button.fontWeight')};
  font-size: ${get('button.fontSize')};
  letter-spacing: ${get('button.letterSpacing')};

  display: inline-block;
  padding: 0;
  white-space: 'nowrap';
  cursor: 'pointer';
  user-select: 'none';
  background-color: 'transparent';
  border: 0;

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
  
  ${COMMON}
  ${TYPOGRAPHY}
  ${COLOR}
`;

const Link = ({
  color, hoverColor, variant, theme: propTheme, ...other
}) => {
  let linkColor = color || propTheme.colors.colorVariants.primary.primary;
  let linkHoverColor = hoverColor || propTheme.colors.colorVariants.primary.dark;

  // if variant, change color
  // but don't override color,hoverColor props, if given
  if (variant) {
    const linkTheme = propTheme.link[variant];
    const defaultLinkTheme = propTheme.link.default(propTheme.colors.colorVariants[variant] || get('colors.colorVariants.primary'));
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
      {...other}
    />
  );
};

Link.defaultProps = {
  theme,
};

Link.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'white']),
  href: PropTypes.string,
  theme: PropTypes.object,
  underline: PropTypes.bool,
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
  ...COLOR.propTypes,
};


export default Link;
