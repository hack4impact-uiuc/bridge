import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import React from 'react';
import theme from '../../theme';
import { COMMON, TYPOGRAPHY } from '../../utils/constants';
import { get } from '../../utils/utils';
import TableHeadContext from './TableHeadContext';


const sharedStyle = css`

  padding: 0 20px;
  &:first-child {
      padding-left: 0;
  }

  &:last-child {
      padding-right: 0;
  }

  ${COMMON};
  ${TYPOGRAPHY};
`;

const TableCellBase = styled.td`
  ${sharedStyle};
`;

const TableHeadCellBase = styled.th`
  ${get('typography.tableHead')}
  ${sharedStyle};
`;

const TableCell = ({ children, ...props }) => {
  const tableHeadContext = React.useContext(TableHeadContext);
  const isHeadCell = tableHeadContext && tableHeadContext.isHead === true;

  return isHeadCell ? (
    <TableHeadCellBase {...props}>
      {children}
    </TableHeadCellBase>
  ) : (
    <TableCellBase {...props}>
      {children}
    </TableCellBase>
  );
};

TableCell.defaultProps = { theme };

TableCell.propTypes = {
  theme: PropTypes.object,
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
};

export default TableCell;
