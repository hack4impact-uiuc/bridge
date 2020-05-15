import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { COMMON, COLOR } from '../../utils/constants';

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
  padding: 0px 18px;
  height: 55px;

  svg {
    margin-right: 18px;
  }

  a {
    font-weight: ${get('fontWeights.medium')};
    ${variant({ scale: 'link.alert' })}
  }

  a:hover {
    ${variant({ scale: 'link.alert' })}
  }

  ${COMMON};
  ${COLOR};
`;

Alert.propTypes = {
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'information']),
  theme: PropTypes.object,
  ...COMMON.propTypes,
  ...COLOR.propTypes,
};

Alert.defaultProps = {
  variant: 'success',
  theme,
};

export default Alert;
