import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { COMMON, TYPOGRAPHY } from '../../utils/constants';

const TableBody = styled.tbody`
    ${COMMON};
    ${TYPOGRAPHY};
`;

TableBody.defaultProps = { theme };

TableBody.propTypes = {
  theme: PropTypes.object,
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
};

export default TableBody;
