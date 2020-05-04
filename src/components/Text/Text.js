import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { TYPOGRAPHY, COMMON } from '../../utils/constants';

const Text = styled.p`
  color: ${get('colors.text.coolTone.main')};
  font-size: 20px;
  ${TYPOGRAPHY};
  ${COMMON};
`;

Text.defaultProps = {
  theme,
};

Text.propTypes = {
  ...TYPOGRAPHY.propTypes,
  ...COMMON.propTypes,
  theme: PropTypes.object,
};

export default Text;
