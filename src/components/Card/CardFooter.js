import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { COMMON } from '../../utils/constants';

const CardFooter = styled.div`
  margin-top: 24px;

  ${COMMON};
`;

CardFooter.defaultProps = { theme };

CardFooter.PropTypes = {
  theme: PropTypes.object,
  ...COMMON.propTypes,
};

export default CardFooter;
