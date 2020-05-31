/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { variant as styledVariant } from 'styled-system';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { COMMON } from '../../utils/constants';

import RadioGroup from './RadioGroup';

const verticalStyle = css`
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
`;

// help from https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
const LabelBase = styled.label`
  ${get('typography.forms')}
  color: ${get('colors.text.greyScale.main')};

  position: relative;
  padding-left: 40px;

  ${(props) => props.vertical && verticalStyle}

  & input:checked ~ span::after {
    display: block;
  }

  & span::after {
    top: 4px;
    left: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    ${styledVariant({
      prop: 'error',
      scale: 'radio',
    })};
  }

  &[disabled] span::after {
    background: ${get('radio.disabledFill')};
  }

  ${COMMON};
`;

const InputBase = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const CustomButton = styled.span`
  position: absolute;
  top: ${(props) => (props.vertical ? '9px' : '0')};
  left: 0;
  height: 20px;
  width: 20px;

  background: ${get('colors.white')};
  border-radius: 50%;
  border: ${get('radio.border')};

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  &[disabled] {
    ${get('radio.disabled')};
  }
`;

const Radio = ({
  checked,
  children,
  defaultChecked,
  disabled,
  error,
  id,
  name,
  onChange,
  theme: propTheme,
  value,
  vertical,
  ...props
}) => (
  <LabelBase
    htmlFor={id}
    disabled={disabled}
    error={error}
    theme={propTheme}
    vertical={vertical}
    {...props}
  >
    {children}
    <InputBase
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      id={id}
      name={name}
      onChange={onChange}
      type="radio"
      value={value}
    />
    <CustomButton disabled={disabled} theme={propTheme} vertical={vertical} />
  </LabelBase>
);

Radio.defaultProps = { theme, error: 'default' };

Radio.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.oneOf(['default', 'error', 'warning', 'success']),
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  theme: PropTypes.object,
  value: PropTypes.any,
  vertical: PropTypes.bool,
  ...COMMON.propTypes,
};

Radio.Group = RadioGroup;

export default Radio;
