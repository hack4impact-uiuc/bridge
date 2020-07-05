import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COMMON } from '../../utils/constants';
import theme from '../../theme';

const StyledCaretSpan = styled.span`
  display: inline-block;
  float: right;
  margin-left: 12px;
  margin-bottom: 1px;
  vertical-align: middle;

  ${COMMON}
`;

const DropdownCaret = ({ ...props }) => (
  <StyledCaretSpan {...props}>
    <svg width="14" height="10" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L7 7L13 1" stroke="#272A2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </StyledCaretSpan>
);

DropdownCaret.propTypes = {
  theme: PropTypes.object,
  ...COMMON.propTypes,
};

DropdownCaret.defaultProps = {
  theme,
};

DropdownCaret.displayName = 'Dropdown.Caret';

export default DropdownCaret;
