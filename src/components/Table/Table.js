import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { COLOR, COMMON, TYPOGRAPHY } from '../../utils/constants';

import TableBody from './TableBody';
import TableCell from './TableCell';
import TableHead, { TableHeadBase } from './TableHead';
import TableRow, { TableRowBase } from './TableRow';


const Table = styled.table`
    background-color: ${get('colors.white')};
    text-align: center;
    border-collapse: collapse;
    width: 100%;
    
    ${TableHeadBase} ${TableRowBase} {
      border-bottom: ${(props) => props.type === 'primary' && `${get('table.primary.borderBottom')(props)}`};
      border-width: 2px;
    }

    ${TableBody} ${TableRowBase} {
      border-bottom: ${(props) => props.type === 'primary' && `${get('table.primary.borderBottom')(props)}`};
    }

    ${TableBody} ${TableRowBase}:nth-child(odd) {
      background-color: ${(props) => props.type === 'zebra' && `${get('table.nthChild.zebra.background')(props)}`};
    }

    ${TableBody} ${TableRowBase}:last-child {
      border-bottom: none;
    }

    ${COLOR};
    ${COMMON};
    ${TYPOGRAPHY};
`;

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
};

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Head = TableHead;
Table.Row = TableRow;

export default Table;
