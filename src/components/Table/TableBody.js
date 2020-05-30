import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { COMMON, TYPOGRAPHY } from '../../utils/constants';

const TableBody = styled.tbody`

  ${get('typography.table')};

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
