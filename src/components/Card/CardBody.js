import styled from 'styled-components';
import { get } from '../../utils/utils';
import { COMMON, TYPOGRAPHY } from '../../utils/constants';

const CardBody = styled.div`
  font-family: ${get('typography.body.fontFamily')};
  font-weight: ${get('typography.body.fontWeight')};
  font-size: ${get('typography.body.fontSize')};
  letter-spacing: ${get('typography.body.letterSpacing')};
  line-height: ${get('typography.body.lineHeight')};

  margin-top: 16px;

  ${TYPOGRAPHY};
  ${COMMON};
`;

export default CardBody;
