import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import React from 'react';
import theme from '../../theme';
import { COLOR, COMMON, TYPOGRAPHY } from '../../utils/constants';
import TableHeadContext from './TableHeadContext';


export const TableRowWrapper = styled.tr`
    height: 52px;
    ${(props) => props.isHeadRow && css`
        height: 56px;
    `}
    ${COLOR};
    ${COMMON};
    ${TYPOGRAPHY};
`;

const TableRow = ({ children, ...props }) => {
  const tableHeadContext = React.useContext(TableHeadContext);
  const isHeadRow = tableHeadContext && tableHeadContext.isHead === true;
  return (
    <TableRowWrapper isHeadRow={isHeadRow} {...props}>
      {children}
    </TableRowWrapper>
  );
};

TableRow.defaultProps = { theme };

TableRow.propTypes = {
  theme: PropTypes.object,
  ...COMMON.propTypes,
  ...COLOR.propTypes,
  ...TYPOGRAPHY.propTypes,
};

export default TableRow;
