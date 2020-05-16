import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { COMMON, COLOR } from '../../utils/constants';
import Icon from '../Icon';

const TextFieldContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  ${COLOR};
  ${COMMON};
`;

const TextFieldPrefixIcon = styled.span`
  position: absolute;
  display: inline-flex;
  height: 16px;
  width: 16px;
  top: 15px;
  left: 9px;
`;

const TextFieldSuffixIcon = styled(Icon)`
  position: absolute;
  display: inline-flex;
  height: 16px;
  width: 16px;
  top: 15px;
  right: ${(props) => props.right};
`;

const TextFieldBase = styled.input`
  ${get('typography.forms')}
  color: ${get('colors.text.coolTone.main')};

  display: block;
  height: 44px;
  width: 100%;

  padding: ${(props) => props.padding};
  margin-right: 40px;
  
  border: ${(props) => props.border.default};
  border-radius: 4px;

  &:focus {
    outline: none;
    border: ${(props) => props.border.focus};
  }

  &:disabled {
    background-color: ${get('colors.greyPalette.lighter')};
    border: 1px solid ${get('colors.greyPalette.light')};
    color: ${get('colors.greyPalette.light')};
  }
`;

const TextField = ({
  icon,
  error,
  theme: propTheme,
  autoComplete,
  disabled,
  id,
  name,
  onChange,
  placeholder,
  type,
  value,
  ...props
}) => {
  let iconType = null;
  let border = propTheme.textField.default;
  switch (error) {
    case 'error':
      border = propTheme.textField.error;
      iconType = 'formErrorAlert';
      break;
    case 'warning':
      border = propTheme.textField.warning;
      iconType = 'warningAlert';
      break;
    case 'success':
      border = propTheme.textField.success;
      iconType = 'successAlert';
      break;
    default:
  }

  // needed for all different combos of icons
  let padding = '0px 9px 0px 9px';
  if (icon) {
    if (iconType) {
      padding = '0px 34px 0px 34px';
    } else {
      padding = '0px 9px 0px 34px';
    }
  } else if (iconType) {
    padding = '0px 34px 0px 9px';
  }

  // className, COMMON, and COLOR props are passed to container
  return (
    <TextFieldContainer {...props}>
      <TextFieldBase
        border={border}
        padding={padding}
        autoComplete={autoComplete}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {icon && <TextFieldPrefixIcon>{icon}</TextFieldPrefixIcon>}
      {iconType && (
        <TextFieldSuffixIcon right={icon ? '-59px' : '-34px'} type={iconType} />
      )}
    </TextFieldContainer>
  );
};
TextField.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOf(['error', 'warning', 'success']),
  icon: PropTypes.element,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  theme: PropTypes.object,
  type: PropTypes.oneOf(['email', 'number', 'password', 'tel', 'text', 'url']),
  value: PropTypes.any,
  ...COMMON.propTypes,
  ...COLOR.propTypes,
};

TextField.defaultProps = {
  error: 'default',
  theme,
};

export default TextField;
