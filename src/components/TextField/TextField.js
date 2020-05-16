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
  top: ${(props) => props.top};
  left: 9px;
`;

const TextFieldSuffixIcon = styled(Icon)`
  position: absolute;
  display: inline-flex;
  height: 16px;
  width: 16px;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
`;

const TextFieldBase = styled.input`
  ${get('typography.forms')}
  color: ${get('colors.text.coolTone.main')};

  display: block;
  height: ${(props) => (props.as && props.as === 'textarea' ? '76px' : '44px')};
  width: 100%;

  padding: ${(props) => props.padding};
  
  border: ${(props) => props.border.default};
  border-radius: 4px;

  ${(props) => (props.as === 'textarea' ? 'resize: none' : '')};
  box-shadow: none;
  outline: none;

  &:focus {
    outline: none;
    // border: ${(props) => props.border.focus};
    box-shadow: ${(props) => props.border.focus};
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
  as,
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

  // needed for all different combos of icons and if textarea
  let padding = ['0px', '9px', '0px', '9px'];
  let top = '15px';
  if (as && as === 'textarea') {
    padding[0] = '12px';
    top = '36px';
  }
  if (iconType) {
    padding[1] = '34px';
  }
  if (icon) {
    padding[3] = '34px';
  }
  padding = padding.join(' ');

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
        as={as}
      />
      {icon && <TextFieldPrefixIcon top={top}>{icon}</TextFieldPrefixIcon>}
      {iconType && (
        <TextFieldSuffixIcon right={icon ? '-59px' : '-34px'} top={top} type={iconType} />
      )}
    </TextFieldContainer>
  );
};
TextField.propTypes = {
  as: PropTypes.elementType,
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOf(['default', 'error', 'warning', 'success']),
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
