/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { variant as styledVariant } from 'styled-system';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { COMMON } from '../../utils/constants';
import CheckboxGroup from './CheckboxGroup';

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
  cursor: pointer;

  ${(props) => props.vertical && verticalStyle}

  & input:checked ~ span {
    ${styledVariant({
      prop: 'error',
      scale: 'checkbox.checked',
    })};
    border-radius: 3px;
    display: block;
  }

  & input:checked ~ span svg {
    display: inline-block;
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
  height: 18px;
  width: 18px;

  background: ${get('colors.white')};
  border: ${get('checkbox.border')};
  border-radius: 3px;

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  & svg {
    position: absolute;
    top: 4px;
    left: 2.2px;
    height: 10px;

    display: none;
  }

  &[disabled] {
    ${get('checkbox.disabled')};
  }
`;

const Checkbox = ({
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
      type="checkbox"
      value={value}
    />
    <CustomButton disabled={disabled} theme={propTheme} vertical={vertical}>
      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 1L4.75 9L1 5.36364"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </CustomButton>
  </LabelBase>
);

Checkbox.defaultProps = { theme, error: 'default' };

Checkbox.propTypes = {
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

Checkbox.Group = CheckboxGroup;

export default Checkbox;
