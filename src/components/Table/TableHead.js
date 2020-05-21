import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import theme from '../../theme';
import { COLOR, COMMON, TYPOGRAPHY } from '../../utils/constants';
import TableHeadContext from './TableHeadContext';


const context = {
  isHead: true,
};

const TableHead = ({ children, ...props }) => (
    <TableHeadWrapper {...props}>
        <TableHeadContext.Provider value={context}>
        { children }
    </TableHeadContext.Provider>
    </TableHeadWrapper>
  
);

export const TableHeadWrapper = styled.thead`
    ${COLOR};
    ${COMMON};
    ${TYPOGRAPHY};
`;

TableHead.defaultProps = { theme };

TableHead.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node,
  ...COMMON.propTypes,
  ...COLOR.propTypes,
  ...TYPOGRAPHY.propTypes,
};

export default TableHead;
