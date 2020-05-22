import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import theme from '../../theme';
import { COLOR, COMMON, TYPOGRAPHY } from '../../utils/constants';
import TableHeadContext from './TableHeadContext';


export const TableRowBase = styled.tr`
    height: ${(props) => (props.isHeadRow ? '56px' : '52px')}

    ${COLOR};
    ${COMMON};
    ${TYPOGRAPHY};
`;

const TableRow = ({ children, ...props }) => {
  const tableHeadContext = React.useContext(TableHeadContext);
  const isHeadRow = tableHeadContext && tableHeadContext.isHead;
  return (
    <TableRowBase isHeadRow={isHeadRow} {...props}>
      {children}
    </TableRowBase>
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
