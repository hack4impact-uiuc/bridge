import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../../theme';
import { get } from '../../utils/utils';
import { COMMON, COLOR } from '../../utils/constants';
import Icon from '../Icon';

const TextFieldContainer = styled.div`
  position: relative;
  display: inline-flex;

  height: ${(props) => (props.type && props.type === 'textarea'
    ? `${props.lines * 20 + 30}px`
    : '46px')};
  width: 100%;

  border: ${(props) => props.propBorder.default};
  border-radius: 4px;

  box-sizing: border-box;
  overflow: hidden;

  &:focus-within {
    border: ${(props) => props.propBorder.focus};
  }

  &[disabled] {
    ${get('textField.disabled')}
  }

  ${COLOR};
  ${COMMON};
`;

const iconCSS = css`
  display: flex;
  flex: none;
  align-items: center;
`;

const TextFieldPrefixIcon = styled.span`
  ${iconCSS}

  margin-right: 8px;
`;

const TextFieldSuffixIcon = styled(Icon)`
  ${iconCSS}

  margin-left: 4px;
  width: 16px;
`;

const TextFieldBase = styled.input`
  ${get('typography.forms')}
  color: ${get('colors.text.greyScale.main')};

  display: inline-block;
  width: 100%;

  ${(props) => (props.as === 'textarea' ? 'resize: none' : '')};
  
  outline: none;
  border: none;
  padding: 0;

  position: relative;

  &:disabled {
    background-color: inherit;
    color: inherit;
  }
`;

const TextField = ({
  'aria-label': ariaLabel,
  as,
  autoComplete,
  disabled,
  error,
  icon,
  id,
  lines,
  name,
  onChange,
  placeholder,
  theme: propTheme,
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

  let padding = '0px 9px 0px 9px';
  if (as && as === 'textarea') {
    padding = '12px 9px 12px 9px';
  }

  return (
    <TextFieldContainer
      disabled={disabled}
      lines={lines || 3}
      padding={padding}
      propBorder={border}
      theme={propTheme}
      type={as}
      {...props}
    >
      {icon && <TextFieldPrefixIcon>{icon}</TextFieldPrefixIcon>}
      <TextFieldBase
        aria-label={ariaLabel}
        as={as}
        autoComplete={autoComplete}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        theme={propTheme}
        type={type}
        value={value}
      />
      {iconType && <TextFieldSuffixIcon type={iconType} />}
    </TextFieldContainer>
  );
};

TextField.propTypes = {
  'aria-label': PropTypes.string,
  as: PropTypes.oneOf(['textarea']),
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOf(['default', 'error', 'warning', 'success']),
  icon: PropTypes.element,
  id: PropTypes.string,
  lines: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  theme: PropTypes.object,
  type: PropTypes.oneOf(['email', 'number', 'password', 'tel', 'text', 'url', 'date']),
  value: PropTypes.any,
  ...COMMON.propTypes,
  ...COLOR.propTypes,
};

TextField.defaultProps = {
  error: 'default',
  theme,
};

export default TextField;
