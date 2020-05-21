import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { COLOR, COMMON, TYPOGRAPHY } from '../../utils/constants';

const TableBody = styled.tbody`
    ${COLOR};
    ${COMMON};
    ${TYPOGRAPHY};
`

TableBody.defaultProps = { theme };

TableBody.propTypes = {
    theme: PropTypes.object,
    ...COMMON.propTypes,
    ...COLOR.propTypes,
    ...TYPOGRAPHY.propTypes,
}

export default TableBody;