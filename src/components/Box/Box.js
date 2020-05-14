// taken from Github primer/components https://github.com/primer/components/blob/master/src/Box.js
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { space, color } from 'styled-system';
import systemPropTypes from '@styled-system/prop-types';
import { LAYOUT, FLEX } from '../../utils/constants';
import theme from '../../theme';

const Box = styled.div`
  ${LAYOUT}
  ${FLEX}
  ${space}
  ${color}
`;

Box.defaultProps = { theme };

Box.propTypes = {
  ...LAYOUT.propTypes,
  ...FLEX.propTypes,
  ...systemPropTypes.space,
  ...systemPropTypes.color,
  theme: PropTypes.object,
};

export default Box;
