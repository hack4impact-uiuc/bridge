import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { get, lodashGet } from '../../utils/utils';
import { COMMON } from '../../utils/constants';

const TagBase = styled.div`
    // text
    ${get('typography.tags')};
    color: ${(props) => props.textColor};

    // border
    border-radius: 4px;

    // display
    display: inline-flex;

    // align
    vertical-align: middle;
    align-items: center;

    // size
    padding: 0px 8px;
    height: 28px;

    // color
    background: ${(props) => props.background};

    ${COMMON};
`;

const Tag = ({
  variant, color, theme: propTheme, ...props
}) => {
  const defaultBackground = propTheme.colors.bluePalette.primary;
  const backgroundColor = lodashGet(propTheme, `colors.${color}Palette.${variant}`, defaultBackground);
  let textColor = propTheme.colors.white;

  // both light green and light yellow tags have dark palette text
  if (variant === 'light' && (color === 'green' || color === 'yellow')) {
    textColor = lodashGet(propTheme, `colors.${color}Palette.text`, propTheme.colors.black);
  }

  return (
    <TagBase
      background={backgroundColor}
      textColor={textColor}
      theme={propTheme}
      {...props}
    />
  );
};

Tag.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.object,
  ...COMMON.propTypes,
};

Tag.defaultProps = {
  variant: 'primary',
  color: 'blue',
  theme,
};

export default Tag;
