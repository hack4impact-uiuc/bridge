import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import React from 'react';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { COLOR, COMMON, TYPOGRAPHY } from '../../utils/constants';
import TableHeadContext from './TableHeadContext';


const sharedStyle = css`
    padding: 0 20px;
    ${TableCell}:first-child {
        padding-left: 0;
    }

    ${TableCell}__${TableHeadCellWrapper}:last-child {
        padding-right: 0;
    }

    ${COLOR};
    ${COMMON};
    ${TYPOGRAPHY};
`

const TableCellWrapper = styled.td`
    ${sharedStyle};
`

const TableHeadCellWrapper = styled.th`
    ${sharedStyle};
    ${get('typography.tableHead')};
`

const TableCell = ({ children, ...props }) => {
    const tableHeadContext = React.useContext(TableHeadContext)
    const isHeadCell = tableHeadContext && tableHeadContext.isHead === true

    return isHeadCell ? (
        <TableHeadCellWrapper {...props}>
            {children}
        </TableHeadCellWrapper>
    ) : (
        <TableCellWrapper {...props}>
            {children}
        </TableCellWrapper>
    )
}

TableCell.defaultProps = { theme };

TableCell.propTypes = {
    theme: PropTypes.object,
    ...COMMON.propTypes,
    ...COLOR.propTypes,
    ...TYPOGRAPHY.propTypes,
}

export default TableCell;