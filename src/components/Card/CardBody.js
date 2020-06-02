import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { COMMON, TYPOGRAPHY } from '../../utils/constants';

const CardBody = styled.div`
  ${get('typography.body')};
  color: ${get('colors.text.coolTone.main')};

  margin-top: 12px;

  ${TYPOGRAPHY};
  ${COMMON};
`;

CardBody.defaultProps = { theme };

CardBody.propTypes = {
  theme: PropTypes.object,
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
};

export default CardBody;
