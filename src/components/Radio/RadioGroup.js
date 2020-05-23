import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { COMMON } from '../../utils/constants';

const RadioGroupBase = styled.div`
  ${COMMON};
`;

const RadioGroup = ({
  children,
  defaultValue,
  disabled,
  error,
  name,
  onChange,
  value,
  vertical,
  ...props
}) => (
  <RadioGroupBase {...props}>
    {children.map((child, idx) => cloneElement(child, {
      key: child.props.id,
      disabled: disabled || child.props.disabled,
      error: error || child.props.error,
      name,
      checked:
          (value === child.props.value ? true : undefined)
          || child.props.checked,
      defaultChecked:
          (defaultValue === child.props.value ? true : undefined)
          || child.props.defaultChecked,
      onChange,
      vertical,
      marginLeft: idx !== 0 && !vertical ? '28px' : 0,
    }))}
  </RadioGroupBase>
);

RadioGroup.defaultProps = { theme, error: 'default' };

RadioGroup.propTypes = {
  children: PropTypes.node,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  error: PropTypes.oneOf(['default', 'error', 'warning', 'success']),
  name: PropTypes.string,
  onChange: PropTypes.func,
  theme: PropTypes.object,
  value: PropTypes.any,
  vertical: PropTypes.bool,
  ...COMMON.propTypes,
};

export default RadioGroup;
