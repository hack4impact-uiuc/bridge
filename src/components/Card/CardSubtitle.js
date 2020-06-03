import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { COMMON, TYPOGRAPHY } from '../../utils/constants';

const CardSubtitle = styled.div`
  ${get('typography.subtitle')};
  color: ${get('colors.text.coolTone.main')};

  margin-top: 4px;
  word-wrap: break-word;

  ${TYPOGRAPHY};
  ${COMMON};
`;

CardSubtitle.defaultProps = { theme };

CardSubtitle.propTypes = {
  theme: PropTypes.object,
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
};

export default CardSubtitle;
