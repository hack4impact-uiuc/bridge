import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { COMMON } from '../../utils/constants';

const CardContent = styled.div`
  padding: 28px;

  ${COMMON};
`;

CardContent.defaultProps = { theme };

CardContent.propTypes = {
  theme: PropTypes.object,
  ...COMMON.propTypes,
};

export default CardContent;
