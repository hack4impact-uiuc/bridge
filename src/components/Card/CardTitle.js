import styled from 'styled-components';
import { get } from '../../utils/utils';
import { COMMON, TYPOGRAPHY } from '../../utils/constants';

const CardTitle = styled.div`
  font-family: ${get('typography.h3.fontFamily')};
  font-weight: ${get('typography.h3.fontWeight')};
  font-size: ${get('typography.h3.fontSize')};
  letter-spacing: ${get('typography.h3.letterSpacing')};
  line-height: ${get('typography.h3.lineHeight')};

  ${TYPOGRAPHY};
  ${COMMON};
`;

export default CardTitle;
