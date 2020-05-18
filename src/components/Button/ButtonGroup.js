import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { Box } from '..';

const ButtonGroup = styled(Box)`
  vertical-align: middle;

  && > * {
    :not(:last-child) {
      margin-right: 20px;
    }
  }
`;

ButtonGroup.defaultProps = {
  display: 'inline-block',
  theme,
};

ButtonGroup.propTypes = {
  ...Box.propTypes,
};


export default ButtonGroup;
