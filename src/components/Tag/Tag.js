import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { get, lodashGet } from '../../utils/utils';

/**
 *   body: {
    fontFamily: fonts.main,
    fontWeight: fontWeights.regular,
    fontSize: '16px',
    letterSpacing: letterSpacings.third, // 0.3px
    lineHeight: '24px',
  },
 */

const TagBase = styled.div`
    // text
    font-family: ${get('typography.body.fontFamily')};
    font-weight: ${get('typography.body.fontWeight')};
    font-size: ${get('typography.body.fontSize')};
    letter-spacing: ${get('typography.body.letterSpacing')};
    line-height: 28px;
    color: ${(props) => props.textColor};

    // border
    border-radius: 4px;

    // display
    display: inline-block;

    // size
    padding: 0px 8px;
    height: 28px;

    // color
    background: ${(props) => props.backgroundColor};
`;

const Tag = ({
  variant, color, theme: propTheme, ...props
}) => {
  const defaultBackground = propTheme.colors.bluePalette.primary;
  const backgroundColor = lodashGet(propTheme, `colors.${color}Palette.${variant}`, defaultBackground);
  let textColor = propTheme.colors.white;
  if (variant === 'light' && (color === 'green' || color === 'yellow')) {
    textColor = propTheme.colors.black;
  }

  return (
    <TagBase
      backgroundColor={backgroundColor}
      textColor={textColor}
      {...props}
    />
  );
};

const propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.object,
};

const defaultProps = {
  variant: 'primary',
  theme,
};

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;
