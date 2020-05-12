import styled from 'styled-components';
import { get } from '../../utils/utils';
import { COMMON, TYPOGRAPHY } from '../../utils/constants';

const CardSubtitle = styled.div`
  font-family: ${get('typography.subtitle.fontFamily')};
  font-weight: ${get('typography.subtitle.fontWeight')};
  font-size: ${get('typography.subtitle.fontSize')};
  letter-spacing: ${get('typography.subtitle.letterSpacing')};
  line-height: ${get('typography.subtitle.lineHeight')};

  margin-top: 8px;

  ${TYPOGRAPHY};
  ${COMMON};
`;

export default CardSubtitle;
