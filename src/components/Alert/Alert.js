import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { COMMON } from '../../utils/constants';

const Alert = styled.div`
  // text
  ${get('typography.alert')};

  // border
  border-radius: 4px;

  // color
  ${variant({ scale: 'alert' })}

  // display
  display: flex;

  // align
  vertical-align: middle;
  align-items: center;

  // size
  padding: 16px 16px;
  width: 100%;

  svg {
    margin-right: 16px;
  }

  a {
    font-weight: ${get('fontWeights.medium')};
    ${variant({ scale: 'link.alert' })}
  }

  a:hover {
    ${variant({ scale: 'link.alert' })}
  }

  ${COMMON};
`;

Alert.propTypes = {
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'information']),
  theme: PropTypes.object,
  ...COMMON.propTypes,
};

Alert.defaultProps = {
  variant: 'success',
  theme,
};

export default Alert;
