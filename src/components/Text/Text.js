import styled from 'styled-components';
import { variant } from 'styled-system';
import PropTypes from 'prop-types';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { TYPOGRAPHY, COMMON } from '../../utils/constants';

const Text = styled.span`
  color: ${get('colors.text.coolTone.main')};

  // based on the prop 'type', we look at the
  // theme.typography for the correct styling
  ${variant({
    prop: 'type',
    scale: 'typography',
  })}

  ${TYPOGRAPHY};
  ${COMMON};
`;

Text.defaultProps = {
  theme,
  type: 'body',
};

Text.propTypes = {
  ...TYPOGRAPHY.propTypes,
  ...COMMON.propTypes,
  as: PropTypes.elementType,
  theme: PropTypes.object,
  type: PropTypes.oneOf([
    'body',
    'caption',
    'overline',
    'button',
    'buttonSmall',
    'alert',
    'table',
    'form',
    'quote',
    'subtitle',
  ]),
};

export default Text;
