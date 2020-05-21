import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { COLOR, COMMON, TYPOGRAPHY } from '../../utils/constants';

import TableBody from './TableBody';
import TableCell from './TableCell';
import TableHead from './TableHead';
import TableRow, { TableRowWrapper } from './TableRow';


const Table = styled.table`
    ${get('typography.table')};
    background-color: ${get('colors.white')};
    text-align: center;
    border-collapse: collapse;
    width: 100%;
    
    ${TableHead} ${TableRowWrapper} {
        ${variant({
            prop: 'type',
            scale: 'table',
        })}
        border-width: 2px;
    }

    ${TableBody} ${TableRowWrapper} {
        ${variant({
            prop: 'type',
            scale: 'table',
        })}
    }

    ${TableBody} ${TableRowWrapper}:nth-child(odd) {
        ${variant({
            prop: 'type',
            scale: 'table.nthChild',
        })}
    }

    ${TableBody} ${TableRowWrapper}:last-child {
        border-bottom: none;
    }

    ${COLOR};
    ${COMMON};
    ${TYPOGRAPHY};
`

Table.defaultProps = { 
    type: 'primary',
    theme,
};

Table.propTypes = {
    type: PropTypes.string,
    theme: PropTypes.object,
    ...COMMON.propTypes,
    ...COLOR.propTypes,
    ...TYPOGRAPHY.propTypes,
}

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Head = TableHead;
Table.Row = TableRow;

export default Table;