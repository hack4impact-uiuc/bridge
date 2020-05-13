import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { COMMON, TYPOGRAPHY } from '../../utils/constants';

const CardOverline = styled.div`
  ${get('typography.overline')};
  color: ${get('colors.text.coolTone.main')};

  margin-bottom: 8px;

  ${TYPOGRAPHY};
  ${COMMON};
`;

CardOverline.defaultProps = { theme };

CardOverline.PropTypes = {
  theme: PropTypes.object,
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
};

export default CardOverline;
