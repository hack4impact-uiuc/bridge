import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import theme from '../../theme';
import { COLOR, COMMON, TYPOGRAPHY } from '../../utils/constants';
import TableHeadContext from './TableHeadContext';


const context = {
  isHead: true,
};

export const TableHeadBase = styled.thead`
    ${COMMON};
    ${TYPOGRAPHY};
`;

const TableHead = ({ children, ...props }) => (
  <TableHeadBase {...props}>
    <TableHeadContext.Provider value={context}>
      { children }
    </TableHeadContext.Provider>
  </TableHeadBase>

);

TableHead.defaultProps = { theme };

TableHead.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node,
  ...COMMON.propTypes,
  ...COLOR.propTypes,
  ...TYPOGRAPHY.propTypes,
};

export default TableHead;
