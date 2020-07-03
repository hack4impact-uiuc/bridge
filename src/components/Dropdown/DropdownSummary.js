import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COMMON, TYPOGRAPHY } from '../../utils/constants';
import { get } from '../../utils/utils';
import theme from '../../theme';
import DropdownCaret from './DropdownCaret';

const StyledSummary = styled.summary`
  background: ${get('colors.white')};
  color: ${get('colors.grey.1')};
  border-radius: 4px;
  padding: 12px;
  pointer: cursor;
  
  ${COMMON}
  ${TYPOGRAPHY}
`;

const DropdownSummary = ({ children, ...props }) => (
  <StyledSummary aria-haspopup="true" {...props}>
    {children}
    <DropdownCaret />
  </StyledSummary>
);

DropdownSummary.defaultProps = { theme };
DropdownSummary.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node,
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
};
DropdownSummary.displayName = 'Dropdown.Summary';

export default DropdownSummary;
