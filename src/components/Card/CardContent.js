import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import Box from '../Box';

const CardContent = styled(Box)`
  flex: 1 1 auto;
  padding: 28px;

  word-wrap: break-word;
`;

CardContent.defaultProps = { theme };

CardContent.propTypes = {
  theme: PropTypes.object,
  ...Box.propTypes,
};

export default CardContent;
