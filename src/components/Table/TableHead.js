import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import theme from '../../theme';
import { COLOR, COMMON, TYPOGRAPHY } from '../../utils/constants';
import TableHeadContext from './TableHeadContext';


const context = {
    isHead: true
}

const TableHeadComponent = ({ children, ...props }) => {
    return (
        <TableHeadContext.Provider value={context}>
            <thead {...props}>
                { children }
            </thead>
        </TableHeadContext.Provider>
    )
}

const TableHead = styled(TableHeadComponent)`
    ${COLOR};
    ${COMMON};
    ${TYPOGRAPHY};
`

TableHead.defaultProps = { theme };

TableHead.propTypes = {
    theme: PropTypes.object,
    ...COMMON.propTypes,
    ...COLOR.propTypes,
    ...TYPOGRAPHY.propTypes,
}

export default TableHead;