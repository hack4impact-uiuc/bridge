import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme';
import Box from '../Box';

const CheckboxGroup = ({
  children,
  disabled,
  error,
  defaultValue,
  onChange,
  vertical,
  ...props
}) => (
  <Box {...props}>
    {children.map((child, idx) => cloneElement(child, {
      key: child.props.id,
      disabled: disabled || child.props.disabled,
      error: error || child.props.error,
      vertical,
      defaultChecked:
          (defaultValue === child.props.value ? true : undefined)
          || child.props.defaultChecked,
      onChange,
      marginLeft: idx !== 0 && !vertical ? '28px' : 0,
    }))}
  </Box>
);

CheckboxGroup.defaultProps = { theme };

CheckboxGroup.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any,
  error: PropTypes.oneOf(['default', 'error', 'warning', 'success']),
  onChange: PropTypes.func,
  theme: PropTypes.object,
  vertical: PropTypes.bool,
  ...Box.propTypes,
};

export default CheckboxGroup;
