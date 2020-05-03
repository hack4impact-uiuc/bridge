// taken from Github primer/components https://github.com/primer/components/blob/master/src/Box.js
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { space, color } from 'styled-system';
import systemPropTypes from '@styled-system/prop-types';
import { LAYOUT } from '../../utils/constants';
import theme from '../../theme';

const Box = styled.div`
  ${LAYOUT}
  ${space}
  ${color}
`;

Box.defaultProps = { theme };

Box.propTypes = {
  ...LAYOUT.propTypes,
  ...systemPropTypes.space,
  ...systemPropTypes.color,
  theme: PropTypes.object,
};

export default Box;
