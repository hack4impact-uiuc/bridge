import styled from 'styled-components';
import { variant } from 'styled-system';
import PropTypes from 'prop-types';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { TYPOGRAPHY, COMMON } from '../../utils/constants';

const Heading = styled.div`
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

Heading.defaultProps = {
  theme,
  type: 'h1',
};

Heading.propTypes = {
  ...TYPOGRAPHY.propTypes,
  ...COMMON.propTypes,
  as: PropTypes.elementType,
  theme: PropTypes.object,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'subtitle']),
};

export default Heading;
