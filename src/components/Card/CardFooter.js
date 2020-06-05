import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import Box from '../Box';

const CardFooter = styled(Box)`
  margin-top: 24px;
`;

CardFooter.defaultProps = { theme };

CardFooter.propTypes = {
  theme: PropTypes.object,
  ...Box.propTypes,
};

export default CardFooter;
