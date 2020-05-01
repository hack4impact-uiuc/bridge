import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import systemPropTypes from '@styled-system/prop-types';
import theme from '../../theme';
import { get, lodashGet } from '../../utils/utils';
import { COMMON } from '../../utils/constants';

const ButtonBase = styled.button`
  // text
  font-family: ${get('button.font')};
  font-weight: ${get('button.fontWeight')};
  font-size: ${get('button.fontSize')};
  letter-spacing: ${get('button.letterSpacing')};
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;

  // border
  border-radius: 13px;

  // size
  padding: 0px 32px;
  height: 40px;

  // color
  color: ${(props) => props.fontColor.default};
  background: ${(props) => props.bg.default};
  border: ${(props) => props.border.default};

  // states
  &:hover:not([disabled]) {
    background-color: ${(props) => props.bg.hover};
    border: ${(props) => props.border.hover};
    box-shadow: ${(props) => props.shadow.hover};
    color: ${(props) => props.fontColor.hover};
  }

  &:disabled {
    background-color: ${(props) => props.bg.disabled};
    border: ${(props) => props.border.disabled};
    box-shadow: ${(props) => props.shadow.disabled};
    color: ${(props) => props.fontColor.disabled};
  }
  ${COMMON}
  
`;

const propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.object,
  ...systemPropTypes.layout,
  // ...systemPropTypes.space,
  // ...systemPropTypes.display,
  // ...systemPropTypes.color,
  ...COMMON.proptypes,
};

const defaultProps = {
  color: 'primary', // any color that matches theme.colors.state
  theme,
};

const Button = ({
  color, disabled, outline, className, theme: propTheme, ...other
}) => {
  const buttonColorPalette = propTheme.colors.state[color] || get('colors.state.primary');
  const buttonTheme = propTheme.button[color]; // || theme.button.default
  const buttonDefaultTheme = propTheme.button.default(buttonColorPalette);

  let bg = {
    default: lodashGet(buttonTheme, 'bg.default', buttonDefaultTheme.bg.default),
    hover: lodashGet(buttonTheme, 'bg.hover', buttonDefaultTheme.bg.hover),
    disabled: lodashGet(buttonTheme, 'bg.disabled', buttonDefaultTheme.bg.disabled),
  };


  let border = {
    default: lodashGet(buttonTheme, 'border.default', buttonDefaultTheme.border.default),
    hover: lodashGet(buttonTheme, 'border.hover', buttonDefaultTheme.border.hover),
    disabled: lodashGet(buttonTheme, 'border.disabled', buttonDefaultTheme.border.disabled),
  };

  let fontColor = {
    default: lodashGet(buttonTheme, 'fontColor.default', buttonDefaultTheme.fontColor.default),
    hover: lodashGet(buttonTheme, 'fontColor.hover', buttonDefaultTheme.fontColor.hover),
    disabled: lodashGet(buttonTheme, 'fontColor.disabled', buttonDefaultTheme.fontColor.disabled),
  };

  let shadow = {
    default: lodashGet(buttonTheme, 'shadow.default', buttonDefaultTheme.shadow.default),
    hover: lodashGet(buttonTheme, 'shadow.hover', buttonDefaultTheme.shadow.hover),
    disabled: lodashGet(buttonTheme, 'shadow.disabled', buttonDefaultTheme.shadow.disabled),
  };

  if (outline) {
    // border => background
    // textColor => background
    // background => textColor
    const defaultOutline = buttonDefaultTheme.outline;
    border = {
      default: `2px solid ${lodashGet(buttonTheme, 'outline.border.default', defaultOutline.border.default)}`,
      hover: `2px solid ${lodashGet(buttonTheme, 'outline.border.hover', defaultOutline.border.hover)}`,
      disabled: `2px solid ${lodashGet(buttonTheme, 'outline.border.disabled', defaultOutline.border.disabled)}`,
    };
    fontColor = {
      default: lodashGet(buttonTheme, 'outline.fontColor.default', defaultOutline.fontColor.default),
      hover: lodashGet(buttonTheme, 'outline.fontColor.hover', defaultOutline.fontColor.hover),
      disabled: lodashGet(buttonTheme, 'outline.fontColor.disabled', defaultOutline.fontColor.disabled),
    };
    bg = {
      default: lodashGet(buttonTheme, 'outline.bg.default', defaultOutline.bg.default),
      hover: lodashGet(buttonTheme, 'outline.bg.hover', defaultOutline.bg.hover),
      disabled: lodashGet(buttonTheme, 'outline.bg.disabled', defaultOutline.bg.disabled),
    };
    shadow = {
      default: lodashGet(buttonTheme, 'outline.shadow.default', defaultOutline.shadow.default),
      hover: lodashGet(buttonTheme, 'outline.shadow.hover', defaultOutline.shadow.hover),
      disabled: lodashGet(buttonTheme, 'outline.shadow.disabled', defaultOutline.shadow.disabled),
    };
  }

  const styling = {
    bg,
    border,
    fontColor,
    shadow,
  };

  return (
    <ButtonBase {...styling} disabled={disabled} className={className} theme={theme} {...other} />
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
