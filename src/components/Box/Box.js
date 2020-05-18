// taken from Github primer/components https://github.com/primer/components/blob/master/src/Box.js
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  COMMON, FLEX, BORDER,
} from '../../utils/constants';
import theme from '../../theme';

const Box = styled.div`
  ${COMMON};
  ${FLEX};
  ${BORDER}
`;

Box.defaultProps = { theme };

Box.propTypes = {
  ...COMMON.propTypes,
  ...FLEX.propTypes,
  ...BORDER.propTypes,
  theme: PropTypes.object,
};

export default Box;
