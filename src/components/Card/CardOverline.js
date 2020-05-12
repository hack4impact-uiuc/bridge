import styled from 'styled-components';
import { get } from '../../utils/utils';
import { COMMON, TYPOGRAPHY } from '../../utils/constants';

const CardOverline = styled.div`
  font-family: ${get('typography.overline.fontFamily')};
  font-weight: ${get('typography.overline.fontWeight')};
  font-size: ${get('typography.overline.fontSize')};
  letter-spacing: ${get('typography.overline.letterSpacing')};
  line-height: ${get('typography.overline.lineHeight')};
  text-transform: ${get('typography.overline.textTransform')};

  margin-bottom: 8px;

  ${TYPOGRAPHY};
  ${COMMON};
`;

export default CardOverline;
