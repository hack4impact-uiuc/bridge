import styled from 'styled-components';
import { FLEX } from '../../utils/constants';
import theme from '../../theme';
import Box from '../Box';

const Flex = styled(Box)`
  ${FLEX};
`;

Flex.defaultProps = {
  theme,
  display: 'flex',
};

Flex.propTypes = {
  ...Box.propTypes,
  ...FLEX.propTypes,
};

export default Flex;
