import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { COMMON, TYPOGRAPHY } from '../../utils/constants';

const CardTitle = styled.div`
  ${get('typography.h3')};
  color: ${get('colors.text.coolTone.main')};

  ${TYPOGRAPHY};
  ${COMMON};
`;

CardTitle.defaultProps = { theme };

CardTitle.PropTypes = {
  theme: PropTypes.object,
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
};

export default CardTitle;
