import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant as styledVariant } from 'styled-system';
import theme from '../../theme';
import { lodashGet } from '../../utils/utils';
import { COMMON, COLOR } from '../../utils/constants';

const ButtonBase = styled.button`
  // text
  text-decoration: none;
  overflow: hidden;

  // border
  border-radius: 13px;

  // size and typography
  ${styledVariant({
    prop: 'type',
    scale: 'buttons.sizingAndTypography',
  })}

  // display
  display: inline-block;

  // align
  text-align: center;
  vertical-align: middle;

  // color
  background: ${(props) => props.background.default};
  border: ${(props) => props.border.default};
  color: ${(props) => props.fontColor.default};

  // states
  &:hover:not([disabled]) {
    background: ${(props) => props.background.hover};
    border: ${(props) => props.border.hover};
    box-shadow: ${(props) => props.shadow.hover};
    color: ${(props) => props.fontColor.hover};
    cursor: pointer;
  }

  &:disabled {
    background: ${(props) => props.background.disabled};
    border: ${(props) => props.border.disabled};
    box-shadow: ${(props) => props.shadow.disabled};
    color: ${(props) => props.fontColor.disabled};
  }
  
  ${COMMON};
  ${COLOR};
`;

const Button = ({
  variant, outline, className, theme: propTheme, ...props
}) => {
  const colorVariants = propTheme.colors.variants;
  const buttonColorPalette = colorVariants[variant] || colorVariants.primary;
  const buttonTheme = propTheme.buttons[variant]; // || theme.button.default
  const buttonDefaultTheme = propTheme.buttons.default(buttonColorPalette);

  let background = {
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

  // -------- IF OUTLINE (secondary type button) ------ //

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
    background = {
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
    // this (passed in as prop) must be named named `background` because you can
    // not bg or backgroundColor
    // because styled-system `color` uses it
    // and it will think you passed it
    // a background color... overriding the background
    // color we want to set
    // in this case, it will make the default background color
    // the `lighter` color in the color pallette
    background,
    border,
    fontColor,
    shadow,
  };


  return (
    <ButtonBase
      {...styling}
      className={className}
      theme={theme}
      outline={outline}
      {...props}
    />
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.object,
  type: PropTypes.oneOf(['small', 'medium', 'large']),
  ...COMMON.propTypes,
  ...COLOR.propTypes,
};

Button.defaultProps = {
  variant: 'primary', // any color that matches theme.colors.colorVariants
  type: 'medium',
  theme,
};

export default Button;
